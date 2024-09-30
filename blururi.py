from PIL import Image
import base64
from io import BytesIO
import os

def generate_blur_data_url(image_path, output_size=(10, 10)):
    """
    Generate a base64-encoded data URL of a small resized image from a local file path.
    Handles PNG images, including those with transparent backgrounds.
    
    Args:
        image_path (str): Path to the input image.
        output_size (tuple): The size to which the image will be resized (default is 10x10).
    
    Returns:
        str: Base64-encoded data URL of the resized image.
    """
    # Open the image from the local file system
    img = Image.open(image_path)
    
    # If the image has an alpha channel (transparency), convert it to RGB on a white background
    if img.mode == 'RGBA':
        # Create a white background image
        background = Image.new('RGB', img.size, (255, 255, 255))
        # Paste the RGBA image onto the background, using it as a mask
        background.paste(img, mask=img.split()[3])  # 3 is the alpha channel
        img = background

    # Resize the image to the specified small size
    img = img.resize(output_size)

    # Save the image to a BytesIO buffer in JPEG format
    buffered = BytesIO()
    img.save(buffered, format="JPEG")

    # Get the base64-encoded string of the image
    img_base64 = base64.b64encode(buffered.getvalue()).decode()

    # Create the data URL for use in Next.js Image component
    data_url = f"data:image/jpeg;base64,{img_base64}"
    
    return data_url

if __name__ == "__main__":
    # Set the path to the image in your public folder
    # Make sure the path is correct relative to the script’s location
    public_folder = "./public"
    image_filename = "lzglogo.png"  # Replace with your image file name
    image_path = os.path.join(public_folder, image_filename)

    # Check if the file exists
    if os.path.exists(image_path):
        # Generate the base64-encoded data URL
        blur_data_url = generate_blur_data_url(image_path)
        print("Base64-encoded Data URL:\n")
        print(blur_data_url)
    else:
        print(f"Image not found at: {image_path}")
