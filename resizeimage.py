from PIL import Image, ImageOps
import os

def resize_image(input_path, output_path, sizes=[(1920, None), (1200, None), (600, None)], formats=['webp', 'jpeg']):
    """
    Resize an image into multiple sizes and save in specified formats.

    Args:
    - input_path (str): Path to the input image.
    - output_path (str): Directory to save the resized images.
    - sizes (list of tuples): List of (width, height) sizes. Use `None` for height to maintain aspect ratio.
    - formats (list): List of formats to save the image in ('jpeg', 'png', 'webp').
    """
    img = Image.open(input_path)

    # Correct image orientation based on EXIF data
    img = ImageOps.exif_transpose(img)
    
    img_name = os.path.splitext(os.path.basename(input_path))[0]

    # Ensure output directory exists
    if not os.path.exists(output_path):
        os.makedirs(output_path)

    for size in sizes:
        width, height = size
        if height is None:  # Preserve aspect ratio
            height = int((width / img.width) * img.height)

        resized_img = img.resize((width, height), Image.Resampling.LANCZOS)

        # Convert RGBA to RGB if necessary (for JPEG format)
        if resized_img.mode == 'RGBA':
            resized_img = resized_img.convert('RGB')

        # Save image in each format
        for fmt in formats:
            output_file = os.path.join(output_path, f"{img_name}_{width}x{height}.{fmt}")
            resized_img.save(output_file, format=fmt, optimize=True, quality=85)
            print(f"Saved resized image: {output_file}")

def resize_images_in_directory(input_dir, output_dir, sizes=[(1920, None), (1200, None), (600, None)], formats=['webp', 'jpeg']):
    """
    Resize all images in a directory and save the resized images in an output directory.

    Args:
    - input_dir (str): Path to the directory containing the images.
    - output_dir (str): Directory to save the resized images.
    - sizes (list of tuples): List of (width, height) sizes. Use `None` for height to maintain aspect ratio.
    - formats (list): List of formats to save the image in ('jpeg', 'png', 'webp').
    """
    # Loop through all files in the input directory
    for filename in os.listdir(input_dir):
        # Check if the file is an image (you can add more extensions as needed)
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            input_path = os.path.join(input_dir, filename)
            resize_image(input_path, output_dir, sizes, formats)

if __name__ == "__main__":
    input_directory = "./public"  # Directory containing the original images
    output_directory = "./output_images"  # Directory to save resized images

    # Run the resizing function on all images in the directory
    resize_images_in_directory(input_directory, output_directory)
