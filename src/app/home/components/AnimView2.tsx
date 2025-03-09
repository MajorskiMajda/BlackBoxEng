"use client";

import { ReactNode, useEffect, useState, useRef } from 'react';
import Animation from '../animation/AnimationView2';

export default function MainPage(props: {
    text: string;
    subH: ReactNode | string;
    opis: string;
    subHColor?: string;
    showButton?: boolean;
    showButton2?: boolean;
    className?: string;
    hideImageOnMobile?: boolean;
}) {
    const [isClient, setIsClient] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [coloredIndices, setColoredIndices] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsClient(true);

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
        "rezultate",
        "menadžment i kreativan sadržaj",
        "objava za Instagram",
        "Reels UGC video reklame",
        "profit",
        "slanja outreach mejlova",
        "ključ za uspeh"
    ];

    // Indeks za "Zašto mi?" je 0, ključne reči počinju od 1
    useEffect(() => {
        if (isVisible) {
            // Prvo bojimo "Zašto mi?" (indeks 0)
            setTimeout(() => {
                setColoredIndices((prev) => [...prev, 0]);
            }, 0);

            // Zatim bojimo ključne reči sa zakašnjenjem
            keywords.forEach((_, index) => {
                setTimeout(() => {
                    setColoredIndices((prev) => [...prev, index + 1]);
                }, (index + 1) * 300);
            });
        }
    }, [isVisible]);

    // Funkcija za stilizovanje ključnih reči u subH
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
        const target = "Menadžment i Brendiranje";
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
            className="flex  sm:mb-10 mb-0 flex-col-reverse md:flex-col lg:flex-row items-center justify-evenly h-fit lg:pl-16 p-0 pt-0"
        >
            {/* Image Section */}
            {isClient && (
                <div
                    className={`lg:order-first order-first h-full lg:w-1/4 md:w-10/12 sm:w-full flex justify-center md:mt-0`}
                >
                    <Animation />
                </div>
            )}

            {/* Text Section */}
            <div className="flex flex-col justify-center sm:mt-10 sm:mb-10 mt-0 mb-0 items-center min-h-fit w-full md:w-12/12">
                {/* Wrapper for Title and Description */}
                <div className="w-full lg:p-0 p-8 md:w-4/4 text-left lg:w-3/4">
                    {/* Title Section */}
                    <div
                        className={`font-semibold leading-[1.3] lg:mb-8 lg:p-0 pt-4 pb-4 'text-2xl text-4xl xl:text-5xl md:text-4xl lg:text-4xl '
                         text-left`}
                    >
                        {styledText}
                    </div>
                    {/* Subtitle Section */}
                    <div
                        className={`font-light text-neutral-300 mb-4  xl:text-2xl text-base sm:text-lg md:text-xl lg:text-xl
                         text-left`}
                    >
                        {styledSubH}
                    </div>
                    {/* Description Section */}
                    <div
                        className={`font-light text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl
                        `}
                    >
                        {props.opis}
                    </div>
                </div>
            </div>
        </div>
    );
}