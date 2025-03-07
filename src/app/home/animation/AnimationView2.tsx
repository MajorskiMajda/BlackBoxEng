'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MainPage() {
    const svgRef = useRef<SVGSVGElement>(null); // Ref for the SVG element
    const svgRef2 = useRef<SVGSVGElement>(null); // Ref for the SVG element
    const [svgWidth, setSvgWidth] = useState(800); // Default width
    const [svgHeight, setSvgHeight] = useState(300); // Default height

    // Function to update SVG dimensions dynamically
    useEffect(() => {
        const updateSvgSize = () => {
            const width = window.innerWidth;
            const height = 300; // Keep height fixed or adjust if needed
            setSvgWidth(width);
            setSvgHeight(height);
        };

        updateSvgSize(); // Call initially
        window.addEventListener("resize", updateSvgSize);
        return () => window.removeEventListener("resize", updateSvgSize);
    }, []);

    // GSAP Animation
    useEffect(() => {
        if (svgRef.current) {
            const paths = svgRef.current.querySelectorAll('path');


            // Manually configure the order and delay for each path (Blue, Yellow, Green, Red)
            const pathConfigs = [
                { delay: 0, color: "#da26ff" },   // First path: Blue
                { delay: 0.3, color: "#bd21fa" },   // Second path: Yellow
                { delay: 0.4, color: "#9f1cf4" },   // Third path: Green
                { delay: 0.5, color: "#7f17ee" },   // Fourth path: Red
            ];

            paths.forEach((path, index) => {
                const length = path.getTotalLength();

                // Get the manually set configurations for each path
                const { delay, color } = pathConfigs[index] || { delay: 0, color: "transparent" };

                // Set initial stroke properties
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,  // Start with the stroke hidden
                    stroke: color,  // Set the stroke color from pathConfigs
                    strokeWidth: 30,
                    fillOpacity: 0,  // Start with no fill (only the stroke is visible)
                });

                // Create the scroll-triggered animation for each path
                ScrollTrigger.create({
                    trigger: svgRef.current, // Trigger based on the SVG element
                    start: "center bottom", // Start when the top of the SVG hits 80% of the viewport
                    once: true, //

                    scrub: 1, // Smooth scrubbing
                    onEnter: () => {
                        // Animate the stroke dash offset to reveal the stroke from top to bottom
                        gsap.to(path, {
                            strokeDashoffset: 0, // Reveal the stroke
                            duration: 3, // Duration of the stroke drawing animation
                            ease: "power2.out", // Easing for smooth animation
                            delay: delay, // Use the manually set delay
                        });

                        // Animate the fill opacity to reveal the fill (optional)
                        gsap.to(path, {
                            fillOpacity: 1, // Reveal the fill after stroke (optional)
                            duration: 2,
                            ease: "power2.out",
                            delay: delay, // Add delay for fill as well
                        });
                    },

                });

            });
        }
    }, []); // Empty dependency array, meaning this effect runs once after the initial render

    useEffect(() => {
        const mm = gsap.matchMedia();
        // Match media query for smaller screens (mobile)
        mm.add("(max-width: 767px)", () => {
            if (svgRef2.current) {
                const paths = svgRef2.current.querySelectorAll('path');

                // Modify pathConfigs for smaller screens if necessary
                const pathConfigs = [
                    { delay: 0, color: "#da26ff" },   // First path: Blue
                    { delay: 0.3, color: "#bd21fa" },   // Second path: Yellow
                    { delay: 0.4, color: "#9f1cf4" },   // Third path: Green
                    { delay: 0.5, color: "#7f17ee" },   // Fourth path: Red
                ];

                paths.forEach((path, index) => {
                    const length = path.getTotalLength();

                    // Get the manually set configurations for each path
                    const { delay, color } = pathConfigs[index] || { delay: 0, color: "transparent" };

                    // Set initial stroke properties
                    gsap.set(path, {
                        strokeDasharray: length,
                        strokeDashoffset: length,  // Start with the stroke hidden
                        stroke: color,  // Set the stroke color from pathConfigs
                        strokeWidth: 20, // Adjust stroke width for smaller screens if needed
                        fillOpacity: 0,  // Start with no fill (only the stroke is visible)
                    });

                    // Create the scroll-triggered animation for each path
                    ScrollTrigger.create({
                        trigger: svgRef2.current, // Trigger based on the SVG element
                        start: "center bottom", // Start when the top of the SVG hits 80% of the viewport
                        once: true, //

                        scrub: 1, // Smooth scrubbing
                        onEnter: () => {
                            // Animate the stroke dash offset to reveal the stroke from top to bottom
                            gsap.to(path, {
                                strokeDashoffset: 0, // Reveal the stroke
                                duration: 2, // Duration of the stroke drawing animation for small screens
                                ease: "power2.out", // Easing for smooth animation
                                delay: delay, // Use the manually set delay
                            });

                            // Animate the fill opacity to reveal the fill (optional)
                            gsap.to(path, {
                                fillOpacity: 1, // Reveal the fill after stroke (optional)
                                duration: 1.5, // Adjust duration for smaller screens
                                ease: "power2.out",
                                delay: delay, // Add delay for fill as well
                            });
                        },

                    });
                });
            }
        });

        return () => mm.revert(); // Clean up match media on unmount
    }, []); // Empty dependency array, meaning this effect runs once after the initial render

    return (
        <div className="flex flex-col-reverse md:flex-row w-screen items-center justify-evenly " suppressHydrationWarning={true}>
            {/* SVG Section */}
            <div className=" lg:w-4/4 w-screen  sm:w-full flex justify-center  md:mt-0">
                {/* SVG for Large Screens */}
                <svg
                    ref={svgRef}
                    className="hidden md:block"  // Visible on medium+ screens
                    width="859" height="100%" viewBox="100 150 759 737" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M372 0V319C372 319 372 369 330.992 369C289.984 369 0 369 0 369" stroke="black" />
                    <path d="M445 0V357.377C445 357.377 445 436 372.025 436C299.051 436 0 436 0 436" stroke="black" />
                    <path d="M520 0V365.559C520 365.559 520 506 353.359 506C186.718 506 0 506 0 506" stroke="black" />
                    <path d="M600 0V350.486C600 350.486 600 574 348.419 574C96.8386 574 0 574 0 574" stroke="black" />
                </svg>

                {/* SVG for Small Screens */}
                <svg
                    ref={svgRef2}
                    width={svgWidth}
                    height="300"
                    viewBox={`20 -20 ${svgWidth} ${svgHeight + 40}`} // Dynamic viewBox
                    preserveAspectRatio="none"
                    fill="none"
                    className="block  md:hidden " >
                    <rect width="100%" height="100%" />
                    <path d="M1 105C29.6195 136.09 112.48 179.617 214.965 105C317.45 30.3828 402.127 73.9095 431.655 105C475.265 138.203 587.835 184.688 689.23 105C790.625 25.3118 888.658 71.7966 925 105" stroke="black" />
                    <path d="M1 166.5C29.6195 197.944 112.48 241.965 214.965 166.5C317.45 91.0349 402.127 135.056 431.655 166.5C475.265 200.081 587.835 247.094 689.23 166.5C790.625 85.9062 888.658 132.919 925 166.5" stroke="black" />
                    <path d="M1 232C29.6195 263.09 112.48 306.617 214.965 232C317.45 157.383 402.127 200.91 431.655 232C475.265 265.203 587.835 311.688 689.23 232C790.625 152.312 888.658 198.797 925 232" stroke="black" />
                    <path d="M1 45C29.6195 76.0905 112.48 119.617 214.965 45C317.45 -29.6172 402.127 13.9095 431.655 45C475.265 78.2034 587.835 124.688 689.23 45C790.625 -34.6882 888.658 11.7966 925 45" stroke="black" />
                </svg>

            </div>
        </div>

    );
}
