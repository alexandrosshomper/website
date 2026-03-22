#!/usr/bin/env bash
# Converts all PNG/JPG images in public/img to WebP, skipping files that already have a .webp sibling.
# Requires: brew install webp
#
# Usage:
#   bash scripts/convert-to-webp.sh            # convert everything
#   bash scripts/convert-to-webp.sh --dry-run  # preview without converting

set -euo pipefail

DRY_RUN=false
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

if ! command -v cwebp &>/dev/null; then
  echo "❌  cwebp not found. Install with: brew install webp"
  exit 1
fi

CONVERTED=0
SKIPPED=0
TOTAL_SAVED=0

convert_file() {
  local src="$1"
  local webp="${src%.*}.webp"

  if [[ -f "$webp" ]]; then
    SKIPPED=$((SKIPPED + 1))
    return
  fi

  local src_size
  src_size=$(du -k "$src" | cut -f1)

  if $DRY_RUN; then
    echo "  would convert: $src → $webp  (~${src_size}KB)"
    CONVERTED=$((CONVERTED + 1))
    return
  fi

  cwebp -q 85 -mt "$src" -o "$webp" -quiet
  local webp_size
  webp_size=$(du -k "$webp" | cut -f1)
  local saved=$((src_size - webp_size))
  TOTAL_SAVED=$((TOTAL_SAVED + saved))
  echo "  ✓  $src  ${src_size}KB → ${webp_size}KB  (-${saved}KB)"
  CONVERTED=$((CONVERTED + 1))
}

echo "🔍  Scanning public/img for PNG/JPG files..."
echo ""

while IFS= read -r -d '' file; do
  convert_file "$file"
done < <(find public/img -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0)

echo ""
if $DRY_RUN; then
  echo "Dry run — $CONVERTED file(s) would be converted, $SKIPPED already have .webp"
else
  echo "Done — $CONVERTED file(s) converted, $SKIPPED skipped. Estimated savings: ~${TOTAL_SAVED}KB"
fi
