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
        iconSrc: "/google.png",
        buttonLink: "/seo"
    },
    {
        title: "Card 2",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/googleads.png",
        buttonLink: "/googleads"
    },
    {
        title: "Card 3",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/meta.png",
        buttonLink: "/metaads"
    },
    {
        title: "Card 4",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/email.png",
        buttonLink: "/emailmarketing"
    }
];

const brandingCardContents = [
    {
        title: "Card 1",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/instagram.png",
        buttonLink: "/smm"
    },
    {
        title: "Card 2",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/reels.png",
        buttonLink: "/reels"
    },
    {
        title: "Card 3",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/domain.png",
        buttonLink: "/sajtovi"
    },
    {
        title: "Card 4",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis senectus tristique eros id senectus himenaeos libero quam.",
        iconSrc: "/pen-tool.png",
        buttonLink: "/grafickidizajn"
    }
];


export default function HomePage() {
    return (
        <div>
            <Nav />

            <MainPage
                image="/upp.svg"
                image2="/arrowup.svg"
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

            <Separator />

            <Anim opis='Hello' subH='' text="Naucitefff" />

            <CustomerReviews />

            <Anim2 opis='Hello' subH='' text="Naucite" />

            <MainPage
                image="/puzle.svg"
                image2="/arrowup.svg"
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

