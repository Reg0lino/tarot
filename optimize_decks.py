import os
from PIL import Image  # Requires: pip install Pillow

# CONFIGURATION
TARGET_WIDTH = 300  # Good size for the board
QUALITY = 80        # Good balance of size/quality
SOURCE_DIR = 'img'
SKIP_FOLDERS = ['backs', 'cloth', 'thumbnails']  # Don't resize these


def optimize_images():
    print(
        f"--- Starting Batch Optimization (Target Width: {TARGET_WIDTH}px) ---")

    for root, dirs, files in os.walk(SOURCE_DIR):
        # Skip excluded folders
        if any(skip in root for skip in SKIP_FOLDERS):
            continue

        # Check if this folder has images
        image_files = [f for f in files if f.lower().endswith(
            ('.png', '.jpg', '.jpeg'))]

        if not image_files:
            continue

        # Create a 'small' subdirectory if it doesn't exist
        small_dir = os.path.join(root, 'small')
        if not os.path.exists(small_dir):
            os.makedirs(small_dir)
            print(f"Created folder: {small_dir}")

        for filename in image_files:
            # Skip if file is already in a 'small' folder (recursive safety)
            if 'small' in root:
                continue

            original_path = os.path.join(root, filename)
            new_path = os.path.join(small_dir, filename)

            # Skip if already optimized
            if os.path.exists(new_path):
                continue

            try:
                with Image.open(original_path) as img:
                    # Calculate new height maintaining aspect ratio
                    aspect_ratio = img.height / img.width
                    new_height = int(TARGET_WIDTH * aspect_ratio)

                    # Resize
                    img_small = img.resize(
                        (TARGET_WIDTH, new_height), Image.Resampling.LANCZOS)

                    # Save (Keep PNG for transparency, JPG for others)
                    if filename.lower().endswith('.png'):
                        img_small.save(new_path, optimize=True)
                    else:
                        # Convert to RGB if saving as JPG (in case of RGBA)
                        if img_small.mode in ("RGBA", "P"):
                            img_small = img_small.convert("RGB")
                        img_small.save(
                            new_path, quality=QUALITY, optimize=True)

                    print(f"Optimized: {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

    print("--- Optimization Complete ---")


if __name__ == "__main__":
    optimize_images()
