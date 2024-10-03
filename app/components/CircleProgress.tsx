"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CircleProgressProps {
  score: number; // The percentage to fill (0-100)
  label: string; // Label for the circle (e.g., "SEO")
  color: string; // Color for the progress stroke (e.g., green)
  startAnimation: boolean; // Control to start the percentage animation
}

const CircleProgress: React.FC<CircleProgressProps> = ({ score, label, color, startAnimation }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (startAnimation) {
      const duration = 2000; // Duration of the animation in ms
      const easingFunction = (t: number) => (--t) * t * t + 1; // Custom easing function (ease-out cubic)

      const startTime = performance.now();

      const animateProgress = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is capped at 1 (100%)

        const easedProgress = easingFunction(progress); // Apply ease-out function
        setAnimatedScore(Math.round(easedProgress * score));

        if (progress < 1) {
          requestAnimationFrame(animateProgress); // Continue animation if not complete
        }
      };

      requestAnimationFrame(animateProgress); // Start the animation
    }
  }, [startAnimation, score]);

  const circleRadius = 90; // Adjust to control size of circle
  const circleCircumference = 2 * Math.PI * circleRadius;

  // Calculate the stroke-dashoffset based on the animated score
  const progressOffset = circleCircumference - (animatedScore / 100) * circleCircumference;

  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Fade-in duration
    >
      <svg
        width="230" // Updated size for the larger stroke width
        height="230" // Match the height
        viewBox="0 0 230 230" // Adjusted viewBox for stroke width 20
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle (Gray) */}
        <circle
          cx="115" // Center the circle
          cy="115" // Center the circle
          r={circleRadius}
          stroke="#e0e0e0"
          strokeWidth="20" // Updated stroke width
          fill="none"
        />

        {/* Animated Progress Circle */}
        <circle
          cx="115"
          cy="115"
          r={circleRadius}
          stroke={color}
          strokeWidth="20" // Updated stroke width
          fill="none"
          strokeLinecap="butt" // Use "butt" for flat ends and cleaner edges
          strokeDasharray={circleCircumference}
          strokeDashoffset={progressOffset}
          style={{
            transition: "stroke-dashoffset 0.5s ease-out", // Stroke animation with ease-out effect
          }}
        />
      </svg>

      {/* Score and Label inside the circle */}
      <div className="absolute flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-white">{animatedScore}%</div>
        <p className="text-sm text-white">{label}</p>
      </div>
    </motion.div>
  );
};

export default CircleProgress;
