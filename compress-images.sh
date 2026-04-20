#!/bin/bash

# ============================================================================
# Image Compression Script for TourzaHolidays
# ============================================================================
# This script compresses all images to web-optimized sizes
# 
# Prerequisites:
#   brew install imagemagick
#
# Usage:
#   chmod +x compress-images.sh
#   ./compress-images.sh
# ============================================================================

set -e  # Exit on error

IMAGES_DIR="src/assets/images"
BACKUP_DIR="original-images-backup"
MAX_WIDTH=1920
QUALITY=85

echo "🖼️  TourzaHolidays Image Compression"
echo "===================================="
echo ""

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "❌ Error: ImageMagick is not installed."
    echo ""
    echo "Install it with:"
    echo "  brew install imagemagick"
    echo ""
    exit 1
fi

echo "✅ ImageMagick found: $(magick --version | head -1)"
echo ""

# Create backup directory
if [ ! -d "$BACKUP_DIR" ]; then
    echo "📦 Creating backup directory..."
    cp -R "$IMAGES_DIR" "$BACKUP_DIR"
    echo "✅ Backup created at: $BACKUP_DIR"
    echo ""
else
    echo "ℹ️  Backup already exists at: $BACKUP_DIR"
    echo ""
fi

# Count total images
total_images=$(find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.JPG" -o -iname "*.JPEG" \) | wc -l | xargs)
current=0

echo "📊 Found $total_images images to compress"
echo ""
echo "Starting compression..."
echo "  - Max width: ${MAX_WIDTH}px"
echo "  - Quality: ${QUALITY}%"
echo "  - Stripping metadata: yes"
echo ""

# Get initial size
initial_size=$(du -sh "$IMAGES_DIR" | cut -f1)

# Process each folder
for folder in "$IMAGES_DIR"/*/ ; do
    folder_name=$(basename "$folder")
    echo "📁 Processing folder: $folder_name"
    
    # Process each image in folder
    for img in "$folder"*.{jpg,JPG,jpeg,JPEG} 2>/dev/null; do
        [ -f "$img" ] || continue
        
        current=$((current + 1))
        filename=$(basename "$img")
        
        # Get original size
        orig_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        orig_size_mb=$(echo "scale=2; $orig_size / 1048576" | bc)
        
        # Compress image
        magick "$img" \
            -resize "${MAX_WIDTH}x${MAX_WIDTH}>" \
            -quality "$QUALITY" \
            -strip \
            "$img.tmp" 2>/dev/null
        
        # Replace original with compressed
        mv "$img.tmp" "$img"
        
        # Get new size
        new_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        new_size_mb=$(echo "scale=2; $new_size / 1048576" | bc)
        reduction=$(echo "scale=1; 100 - ($new_size * 100 / $orig_size)" | bc)
        
        printf "  [%3d/%3d] ✓ %-40s %6.2fMB → %6.2fMB (-%s%%)\n" \
            "$current" "$total_images" "$filename" "$orig_size_mb" "$new_size_mb" "$reduction"
    done
    echo ""
done

# Get final size
final_size=$(du -sh "$IMAGES_DIR" | cut -f1)

echo "✅ Compression complete!"
echo ""
echo "📊 Summary:"
echo "  - Images processed: $total_images"
echo "  - Before: $initial_size"
echo "  - After: $final_size"
echo ""
echo "💡 Next steps:"
echo "  1. Test the website locally (npm run dev)"
echo "  2. If everything looks good, commit changes"
echo "  3. Original images are backed up in: $BACKUP_DIR"
echo ""
