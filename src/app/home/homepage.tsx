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
import contentData from '../data/home.json'
import mainPage1Data from '../data/homemain1.json'
import mainPage2Data from '../data/homemain2.json'
import animPage1Data from '../data/homeanim1.json'
import animPage2Data from '../data/homeanim2.json'

export default function HomePage() {
    const { marketingCardContents, brandingCardContents } = contentData;
    

    return (
        <div>
            <Nav />

            <MainPage
                priority={true}
                image="/upp.svg"
                tex="text-left"
                className2="test3"
                hideImageOnMobile={false}
                textSizeClass=" xl:text-6xl lg:text-5xl text-4xl "
                opis={mainPage1Data.opis}
                subH={mainPage1Data.subH}
                subHSizeClass="lg:text-3xl sm:text-2xl text-xl text-left"
                text={mainPage1Data.title}
                className="lg:order-last md:order-first"
            />

            <div className="pic lg:h-[7vw] h-[10vw]">
            </div>

            <Sec image={"/rock.svg"} />

            {/* Marketing Section */}
            <HorizontalScrollSection
                heading="Usluge Marketinga"
                sectionType="features" 
                cardContents={marketingCardContents}
            />

            <HorizontalScrollSection
                heading="Usluge Brendiranja"
                sectionType="features" 
                cardContents={brandingCardContents}
            />

  

            <Anim
                opis={animPage1Data.opis}
                subH={animPage1Data.subH}
                text={animPage1Data.title}
            />

            <CustomerReviews />

            <Anim2 opis={animPage2Data.opis}
                subH={animPage2Data.subH}
                text={animPage2Data.title} />
            
            <Separator />

            <MainPage
                image="/puzle.svg"
                tex="text-left"
                className2="test3"
                hideImageOnMobile={false}
                textSizeClass="xl:text-5xl lg:text-4xl  text-4xl"
                opis={mainPage2Data.opis}
                subH={mainPage2Data.subH}
                subHSizeClass=" xl:text-2xl lg:text-xl text-xl text-left"
                text={mainPage2Data.title}
                className="lg:order-last order-first"
            />

            <ContactForm variant="home" />
            {/* <Questions /> */}

            <Footer />
        </div>
    )
}

