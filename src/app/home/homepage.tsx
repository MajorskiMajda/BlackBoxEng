"use client"
import MainPage from "./components/Main"
import Nav from "./components/NavBar"
import Footer from "./components/Footer"
// import Questions from "./components/QuestionsView"
import ContactForm from "./components/ContactView"
import Anim from './components/AnimVIew'
import Anim2 from './components/AnimView2'
import Separator from './components/Separator'
import Sec from './components/SecondMain'
import CustomerReviews from "./components/CustomerReviews"
import HorizontalScrollSection from './components/Features';


const marketingCardContents = [
    {
        title: "Card 1",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/google.svg",
        buttonLink: "/seo-optimizacija"
    },
    {
        title: "Card 2",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/googleads.svg",
        buttonLink: "/google-reklame"
    },
    {
        title: "Card 3",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/meta.svg",
        buttonLink: "/meta-reklame"
    },
    {
        title: "Card 4",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/gmail.svg",
        buttonLink: "/email-marketing"
    }
];

const brandingCardContents = [
    {
        title: "Card 1",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/instagram.svg",
        buttonLink: "/smm"
    },
    {
        title: "Card 2",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/video.svg",
        buttonLink: "/reels"
    },
    {
        title: "Card 3",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/domain.svg",
        buttonLink: "/izrada-sajtova"
    },
    {
        title: "Card 4",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/pen-tool.svg",
        buttonLink: "/graficki-dizajn"
    }
];


export default function HomePage() {
    return (
        <div>
            <Nav />

            <MainPage
                priority={true}
                image="/upp.svg"
                tex="text-left"
                className2="test3"
                hideImageOnMobile={false}
                textSizeClass="text-5xl"
                opis="Hello"
                subH=""
                text="Brendirajte se povecajte prodaju"
                className="lg:order-last md:order-first"
            />

            <div className="pic lg:h-[7vw] h-[10vw]">
            </div>

            <Sec image={"/rock.svg"} />

            {/* Marketing Section */}
            <HorizontalScrollSection
                heading="Usluge Marketinga"
                sectionType="features" // Pass "features" or "prices" here
                cardContents={marketingCardContents}
            />

            <HorizontalScrollSection
                heading="Branding Services"
                sectionType="features" // Pass "features" or "prices" here
                cardContents={brandingCardContents}
            />

  

            <Anim opis='Hello' subH='' text="Naucitefff" />

            <CustomerReviews />

            <Anim2 opis='Hello' subH='' text="Naucite" />
            
            <Separator />

            <MainPage
                
                image="/puzle.svg"
                tex="text-left"
                className2="test3"
                hideImageOnMobile={false}
                textSizeClass="lg:text-5xl text-3xl"
                opis="Hello"
                subH=""
                text="Brendirajte se povecajte prodaju"
                className="lg:order-last md:order-first"
            />

            <ContactForm variant="home" />
            {/* <Questions /> */}

            <Footer />
        </div>
    )
}

