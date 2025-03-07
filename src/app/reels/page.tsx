'use client';

import Main from '../home/components/Main'
import Nav from '../home/components/NavBar'
import Footer from '../home/components/Footer'
import Info from '../home/components/info'
import Contact from '../home/components/ContactView'


export default function MainPage() {
    const cardContents = [
        {
            title: "Basic Plan",
            content: "This is the basic plan with essential features.",
            price: 999, // Price field for pricing
        },
        {
            title: "Pro Plan",
            content: "The pro plan includes premium features.",
            price: 9199, // Price field for pricing
        },
        {
            title: "Enterprise Plan",
            content: "The enterprise plan is for large-scale use.",
            price: 9299, // Price field for pricing
        },
    ];

    return (
        <div className="">
            <Nav />
            <Main        
                priority={true}
                image="/videoe.svg"
                gap="gap-0"
                imgsize={550}
                tex="text-left"
                className2="test3"
                hideImageOnMobile={false}
                textSizeClass="text-5xl"
                opis="Hello"
                subH=""
                text="Social Media Management"
                className="lg:order-first md:order-first"
            />
            <Info cardContents={cardContents} />
            <Contact variant="services" />
            <Footer />
        </div>
    );

}