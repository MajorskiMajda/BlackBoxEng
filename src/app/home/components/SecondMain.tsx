'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { MotionDiv } from '../../ui/motion';

export default function MainPage(props: {

    image: string | StaticImport;
}) {
    const features = [
        "Veća konverzija, veći profit – pretvaramo posetioce u kupce.",
        "Više vremena za važne stvari – preuzimamo marketing na sebe.",
        "Manje stresa, više rezultata – optimizujemo sve za vas.",
        "Više poseta sajtu i profilima – privlačimo ciljanu publiku.",
        "Bolja vidljivost – ističemo vas tamo gde je važno."
    ];
    useEffect(() => {
        // GSAP flying animation for the rocket
        gsap.to('.rocket', {
            y: -50,           // Move up 20px (this gives the flying effect)
            repeat: -1,       // Repeat indefinitely
            yoyo: true,       // Make it go up and down
            duration: 2,      // Duration of one complete up and down cycle
            ease: 'sine.inOut', // Smooth easing for a floating effect
        });

        // GSAP wobble animation for the rocket (left-right shaking)
        gsap.to('.rocket', {
            x: 20,            // Move 10px to the left and right
            repeat: -1,       // Repeat indefinitely
            yoyo: true,       // Make it wobble back and forth
            duration: 0.8,    // Duration of one shake cycle
            ease: 'sine.inOut', // Smooth ease for wobbling effect
        });
        gsap.to('.rocket', {
            x: 10,
            rotate: 7,         // Rotate 15 degrees for more rotation
            repeat: -1,
            yoyo: true,
            duration: 1.5,      // Longer duration for slower wobble and rotation
            ease: 'sine.inOut', // Smooth easing
        });
    }, []);

    return (
        <div className="flex z-2  flex-col justify-end ">
            <div className="flex flex-col-reverse test2 lg:h-[90vh] h-fit md:flex-row items-center z-9 lg:gap-0 gap-10 lg:justify-between  lg:px-16 px-8 ">
                {/* Image Section */}
                <div className={`lg:w-2/4 md:w-8/12 sm:w-full md:w-[300] flex justify-center p-4 md:mt-0`}>
                    <Image
                        className="rocket xx rounded-md"
                        src={props.image}
                        width={500}
                        height={300}
                        objectFit="contain"
                        alt="Rocket"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-left justify-left min-h-fit w-full md:w-1/2 ">
                    <div className="w-full">
                        <div className="lg:text-5xl text-4xl leading-[1.3] text-left  font-semibold mb-8">
                            Od izazova do <span className="text-[#da26ff]">profita!</span>
                        </div>

                        <div className="flex flex-col gap-y-8">
                            {features.map((feature, index) => (
                                <MotionDiv
                                    key={index}
                                    className="flex items-center text-neutral-300"
                                    initial={{ opacity: 0, x: -75 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.8, delay: index * 0.5 }}
                                >
                                    <Image
                                        src={'/verify.svg'}
                                        alt="Custom Icon"
                                        width={40}
                                        height={40}
                                        className="rounded-md"
                                    />
                                    <p className="lg:text-3xl text-xl ml-4 font-normal">{feature}</p>
                                </MotionDiv>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

// Add this style for the background image

