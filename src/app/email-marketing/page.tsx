'use client';

import Main from '../home/components/Main'
import Nav from '../home/components/NavBar'
import Footer from '../home/components/Footer'
import Info from '../home/components/info'
import Contact from '../home/components/ContactView'
import contentData from '../data/email.json';


export default function MainPage() {

    const { cardContents, keyContent, whatWeDoList, howWeDo, whatWeDo } = contentData;
    return (
        <div className="">
            <Nav />
            <Main
                priority={true}
                image="/emailm.svg"
                gap="gap-0"
                imgsize={550}
                tex="text-left"
                className2=" "
                hideImageOnMobile={false}
                textSizeClass="lg:text-6xl text-5xl"
                opis=""
                subH="Turn Leads into Loyal Clients – Personalized Emails and Outreach That Drive Real Results!"
                text="Grow Sales with Email Marketing"
                className="lg:order-first md:order-first"
            />
            <Info
                cardContents={cardContents}
                howWeDoTitle={howWeDo.title}
                howWeDoDescription={howWeDo.description}
                whatWeDoTitle={whatWeDo.title}
                whatWeDoDescription={whatWeDo.description}
                keyContent={keyContent}
                whatWeDoList={whatWeDoList}
            />
            <Contact variant="services" />
            <Footer />
        </div>
    );

}