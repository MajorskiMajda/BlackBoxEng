'use client';

import Main from '../home/components/Main'
import Nav from '../home/components/NavBar'
import Footer from '../home/components/Footer'
import Info from '../home/components/info'
import Contact from '../home/components/ContactView'
import contentData from '../data/graphic.json';


export default function MainPage() {

    const { cardContents, keyContent, whatWeDoList, howWeDo, whatWeDo } = contentData;

    return (
        <div className="">
            <Nav />
            <Main
                priority={true}
                image="/graphic.svg"
                gap="gap-0"
                imgsize={550}
                tex="text-left"
                className2="test3"
                hideImageOnMobile={false}
                textSizeClass="lg:text-6xl text-5xl"
                opis=""
                subH="Kroz kreativne ideje, strategijski pristup i pažljivo osmišljene vizuelne elemente, vaš brend će postati prepoznatljiv, upečatljiv i uspješan. Jer znamo da grafički dizajn nije samo umjetnost – on je investicija u vašu budućnost."
                text="Grafički Dizajn"
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