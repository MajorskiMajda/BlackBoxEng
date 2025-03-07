"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Ensure you're using the correct import

// MotionDiv for h1, can use any tag for different elements
export const MotionDiv = motion.div;

interface MotionCProps {
  children: React.ReactNode;
  custom?: number;
  className?: string;
  initial?: string;
  animate?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants?: any;
  applyScaleAnimation?: boolean; // Option to apply the scale animation
}

const MotionC: React.FC<MotionCProps> = ({
  children,
  custom = 0,
  className = "",
  initial = "hidden",
  animate = "visible",
  variants,
  applyScaleAnimation = true, // Default to true, so scale animation will be applied by default
}) => {
  const [isInView, setIsInView] = useState(false); // Manage visibility state for appear animation
  const [isHovered, setIsHovered] = useState(false); // Manage hover state for scale animation
  const ref = useRef<HTMLDivElement>(null); // Reference to the div

  // Default animation variants for appear (bottom-to-top)
  const defaultAppearVariants = {
    hidden: { opacity: 0, y: 20 }, // Start below the element
    visible: (i: number) => ({
      opacity: 1,
      y: 0, // Move to its normal position
      transition: { duration: 0.7, delay: i * 0.3 }, // Delay for staggered animation
    }),
  };

  // Default animation for scale effect on hover
  const defaultScaleVariants = {
    hovered: { scale: 1.05, transition: { duration: 0.3 } },
    notHovered: { scale: 1, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when element is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer on component unmount
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      custom={custom}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial} // Trigger appear animation when in view
      variants={variants || defaultAppearVariants}
    >
      {/* Apply the scale animation only if `applyScaleAnimation` is true */}
      {applyScaleAnimation ? (
        <motion.div
          variants={defaultScaleVariants}
          animate={isHovered ? "hovered" : "notHovered"} // Apply scale effect based on hover
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
        >
          {children}
        </motion.div>
      ) : (
        <>{children}</> // Render children without scale animation if `applyScaleAnimation` is false
      )}
    </motion.div>
  );
};

export default MotionC;
