import { useEffect, useRef } from "react";

export default function RotatingGearCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const angleRef = useRef(0); // Keep track of rotation angle

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (canvas && ctx) {
            const image = new Image();
            image.src = "/seogear.png"; // Path to your gear image

            // When image loads, draw it and rotate the blue part
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;

                // Draw the original image onto the canvas
                ctx.drawImage(image, 0, 0);

                // Extract blue part and rotate it every second
                setInterval(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
                    ctx.drawImage(image, 0, 0); // Draw original image again

                    // Extract the blue part of the gear
                    const bluePart = extractBluePart(ctx, canvas.width, canvas.height);

                    // Rotate the blue part around its center
                    rotateBluePart(ctx, bluePart, canvas.width / 2, canvas.height / 2, angleRef.current);

                    // Increment angle for next frame
                    angleRef.current += 0.05; // Increase angle for continuous rotation
                }, 1000 / 60); // 60 FPS rotation
            };
        }
    }, []);

    // Function to extract the blue part of the image
    const extractBluePart = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        // Loop through each pixel and keep the blue parts
        for (let i = 0; i < data.length; i += 4) {
            const red = data[i];
            const green = data[i + 1];
            const blue = data[i + 2];

            // Check if the pixel is blue enough (adjust the threshold as needed)
            if (blue > 150 && red < 100 && green < 100) {
                // Keep the pixel as it is
                continue;
            } else {
                // Make non-blue pixels transparent
                data[i + 3] = 0; // Set alpha to 0 (fully transparent)
            }
        }

        // Create new image data for the blue part
        ctx.putImageData(imageData, 0, 0);
        return imageData;
    };

    // Function to rotate the blue part of the gear
    const rotateBluePart = (
        ctx: CanvasRenderingContext2D,
        imageData: ImageData,
        cx: number,
        cy: number,
        angle: number
    ) => {
        ctx.save();
        ctx.translate(cx, cy); // Move to the center of the gear
        ctx.rotate(angle); // Rotate by the given angle
        ctx.translate(-cx, -cy); // Move back

        // Redraw the blue part after rotating
        ctx.putImageData(imageData, 0, 0);

        ctx.restore(); // Restore the context state
    };

    return (
        <canvas ref={canvasRef} width={500} height={500}></canvas>
    );
}