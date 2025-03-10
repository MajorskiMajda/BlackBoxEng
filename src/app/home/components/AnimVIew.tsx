'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Animation component, disable SSR
const Animation = dynamic(() => import('../animation/AnimationView'), { ssr: false });

export default function MainPage(props: {
    text: string;
    subH: ReactNode | string;
    opis: string;
    subHColor?: string;
    showButton?: boolean;
    showButton2?: boolean;
    className?: string;
    hideImageOnMobile?: boolean;
    textSizeClass?: string;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [coloredIndices, setColoredIndices] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Lista ključnih reči za subH
    const keywords = [
        "rešenja za Vas",
        "Custom-Code Web Sajtova",
        "SEO optimizacije",
        "Meta",
        "Google",
        "Grafičkog Dizajna",
        "uspešan biznis"
    ];

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setColoredIndices((prev) => [...prev, 0]);
            }, 0);

            keywords.forEach((_, index) => {
                setTimeout(() => {
                    setColoredIndices((prev) => [...prev, index + 1]);
                }, (index + 1) * 300);
            });
        }
    }, [isVisible]);

    const highlightKeywords = (text: string): ReactNode => {
        let parts: ReactNode[] = [text];
        
        keywords.forEach((keyword, keywordIndex) => {
            parts = parts.flatMap((part) => {
                if (typeof part !== "string") return part;
                return part.split(keyword).flatMap((segment, segmentIndex, array) =>
                    segmentIndex < array.length - 1
                        ? [
                              segment,
                              <span
                                  key={`${keyword}-${keywordIndex}-${segmentIndex}`}
                                  style={{
                                      color: coloredIndices.includes(keywordIndex + 1) ? "#bd6cfe" : "inherit",
                                      fontWeight: "600",
                                      transition: "color 0.5s ease"
                                  }}
                              >
                                  {keyword}
                              </span>
                          ]
                        : segment
                );
            });
        });

        return <>{parts}</>;
    };

    const highlightTitle = (text: string): ReactNode => {
        const target = "Naša Rešenja";
        const parts = text.split(target);
        if (parts.length === 1) return text;

        return (
            <>
                {parts[0]}
                <span
                    style={{
                        color: coloredIndices.includes(0) ? "#da26ff" : "inherit",
                        transition: "color 0.5s ease"
                    }}
                >
                    {target}
                </span>
                {parts[1]}
            </>
        );
    };

    const styledText = highlightTitle(props.text);
    const styledSubH = typeof props.subH === "string" ? highlightKeywords(props.subH) : props.subH;

    return (
        <div
            ref={sectionRef}
            className="flex flex-col-reverse lg:flex-row md:flex-col items-center justify-evenly h-fit lg:pl-16 pb-0"
        >
            {/* Text Section */}
            <div className="flex md:flex-col sm:mt-10 sm:mb-10 mb-0 mt-0 md:flex-row justify-center min-h-fit w-full md:w-12/12">
                <div className="lg:pr-8 lg:pl-0 lg:pb-0 px-8 pb-8 md:w-4/4 lg:w-4/4">
                    <div className={`font-semibold lg:mb-8 leading-[1.3] text-white lg:mb-4 lg:p-0 pt-4 pb-4 xl:text-5xl lg:text-4xl text-4xl text-left`}>
                        {styledText}
                    </div>
                    <div className={`font-light text-neutral-300 mb-4 xl:text-2xl lg:text-xl text-lg text-left`}>
                        {styledSubH}
                    </div>
                    <div className={`font-light text-neutral-300 lg:text-xl text-md`}>
                        {props.opis}
                    </div>
                </div>
            </div>
            {/* Animation Section */}
            <div className={`mt-12 lg:w-2/4 order-last md:w-10/12 sm:w-full flex justify-center md:mt-0`}>
                <Animation />
            </div>
        </div>
    );
}