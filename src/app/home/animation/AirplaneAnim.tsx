'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function MainPage() {
  useEffect(() => {
    const path = document.querySelector('.path') as SVGPathElement;
    const airplane = document.querySelector('.airplane') as HTMLElement;
    const pathLength = path?.getTotalLength();

    if (pathLength && airplane) {
      // Get the initial position of the airplane along the path
      const pathStartPoint = path.getPointAtLength(0); // Get the starting point of the path

      // Initially position the airplane correctly
      gsap.set(airplane, {
        x: pathStartPoint.x,
        y: pathStartPoint.y,
      });

      // Set path stroke properties
      gsap.set('.path', {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        stroke: "white",
        fill: "transparent",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top bottom',
          scrub: 0.3, // Faster reaction to scrolling
          once: true,
        },
      });

      // Animate airplane along the path
      tl.to('.airplane', {
        visibility: "visible",  // Make the airplane visible when it starts moving
        motionPath: {
          path: '.path',
          align: '.path',
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        duration: 1.5, // Faster animation
        ease: "power1.out",
      });

      // Reveal path stroke at the same time
      tl.to('.path', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power1.out',
      }, 0); // Sync both animations

      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <div className="scroll-container h-full hidden lg:block relative" suppressHydrationWarning={true}>
      {/* SVG Path to follow */}
      <svg
        width="415"
        height="309"
        viewBox="0 0 415 309"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Define a smooth curved path */}
        <path
          className="path"
          d="M1 308C24 237 138.8 76.2 414 1"
          strokeWidth="2"
        />
      </svg>

      {/* Airplane Image */}
      <div className="airplane absolute">
        <Image
          className="rounded-md rotate-25"
          src="/airplane.svg"
          width={100}
          height={60}
          objectFit="contain"
          alt="Airplane flying"
        />
      </div>
    </div>
  );
}