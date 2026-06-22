#!/usr/bin/env bash
# Generate all images for sprayfoaminsulationmiami.com via HuggingFace FLUX.1-schnell
# Coastal / South Florida / hurricane-resistant / humidity theme. Light, NOT desert.
set -uo pipefail

OUT="/workspace/Websites/sprayfoaminsulationmiami.com/public/images"
mkdir -p "$OUT"

gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps)..."
    curl -s --max-time 180 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" '{inputs:$p, parameters:{num_inference_steps:$s}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    sleep 4
  done
  echo "[$fname] GAVE UP"
  return 1
}

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a professional spray foam insulation crew in full protective PPE applying closed-cell spray foam to the concrete-block walls of a modern South Florida coastal home. Bright tropical daylight, palm trees and blue sky, hurricane-resistant construction, professional spray rig. Clean white, teal and aqua tones, high-end commercial photography, no text, no watermark" 4

gen "closed-cell-foam.jpg" \
  "Photorealistic macro close-up of creamy closed-cell spray foam insulation adhering to concrete block and rebar inside a Florida masonry wall. Detailed expanding foam texture, professional construction photography, bright even lighting, sharp focus, no text" 4

gen "spray-rig.jpg" \
  "Photorealistic photo of a professional spray foam insulation proportioner rig truck parked at a residential jobsite in South Florida. Hoses and equipment visible, palm trees, bright clear tropical daylight, blue sky, commercial photography, no text" 4

gen "coastal-home.jpg" \
  "Photorealistic architectural photo of an upscale modern Miami Florida coastal luxury home exterior. White stucco walls, large impact-resistant windows, flat or low-pitch roof, palm trees, turquoise water glimpsed in background. Bright sunny tropical day, professional real estate photography, clean white and aqua-blue palette, no text" 4

gen "crew-portrait.jpg" \
  "Photorealistic professional portrait of a two-person spray foam insulation contractor crew wearing branded polo shirts and protective gear, standing confidently in front of their work truck. Friendly genuine expressions, tropical South Florida background with palm trees, bright daylight, approachable and trustworthy, commercial photography, no text" 4

gen "attic-foam.jpg" \
  "Photorealistic photo inside a hot humid South Florida residential attic showing closed-cell spray foam insulation applied to the underside of the roof deck, creating a sealed conditioned attic. Bright work lighting, professional construction documentation, no text" 4

gen "cta-interior.jpg" \
  "Photorealistic bright airy photo of a comfortable modern Miami Florida coastal home interior. Sunlight streaming through large impact windows into a cool-toned living room with white walls, light wood accents, blue and aqua decor. Conveys energy efficiency and humidity control, aspirational lifestyle photography, clean bright palette, no text" 4

gen "og-image.jpg" \
  "Photorealistic minimalist social share banner image. Clean white background fading to soft aqua-teal and a touch of coral at the top like a calm ocean gradient. Subtle palm-frond and gentle wave silhouette along the horizon. Clean, premium, bright, coastal corporate. Soft light. No text, no words, no letters" 4

echo ""
echo "=== FINAL VERIFICATION ==="
ls -la "$OUT"/
for f in "$OUT"/*; do file "$f"; done
