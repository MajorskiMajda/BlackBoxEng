'use client';

import Nav from '../home/components/NavBar';
import Footer from '../home/components/Footer';
import Main from '../home/components/Main';
import ContactForm from '../home/components/ContactView';

export default function MainPage() {
  return (
    <div className="">
      <Nav />

      <div className="text-white text-neutral-300-800">
        {/* Hero Section */}
        <section className="bg-onama py-20 text-center px-6">
          <div className="max-w-8xl mx-auto">
            <h1 className="text-5xl bg-[#da26ff] font-bold mb-4">O nama</h1>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-6">
            Vaš Partner za Digitalni Uspeh
          </h2>
          <p className="text-lg text-neutral-300 text-left">
            Mi smo tim stručnjaka sa strašću prema digitalnom marketingu i
            brendiranju, posvećeni pružanju vrhunskih usluga koje će Vam pomoći
            da ostvarite svoje poslovne ciljeve. Povećavamo vidljivost Vašeg web
            sajta na pretraživačima, privlačimo organski saobraćaj i poboljšavamo
            rangiranje. Kreiramo ciljane Google Ads kampanje koje donose brze
            rezultate i povećavaju konverzije. Pomažemo Vam da dosegnete Vašu
            ciljnu publiku na Facebook-u i Instagram-u putem efikasnih Meta
            oglasa. Izgrađujemo snažne odnose sa Vašim klijentima kroz
            personalizovane email marketing kampanje. Kreiramo i upravljamo
            Vašim profilima na društvenim mrežama, stvarajući angažovanu
            zajednicu i jačajući Vaš brend. Snimamo i montiramo kreativne Reels
            video zapise koji privlače pažnju i povećavaju doseg. Dizajniramo i
            razvijamo moderne, funkcionalne i vizuelno impresivne web sajtove.
            Kreiramo jedinstveni vizuelni identitet za Vaš brend, od logotipa
            do materijala za štampu i web.
          </p>
        </section>
        <Main
          image={'/bulb.svg'}
          tex="text-left"
          className2="test3"
          hideImageOnMobile={false}
          textSizeClass="text-5xl"
          opis=""
          subH="Naša misija je da pomognemo našim klijentima da ostvare svoj puni digitalni potencijal. Verujemo u transparentnost, inovacije i posvećenost klijentima. Naš cilj je da izgradimo dugoročna partnerstva i da budemo ključni faktor Vašeg uspeha. Ukoliko želite da unapredite svoje digitalno prisustvo i ostvarite poslovni rast, kontaktirajte nas. Radujemo se saradnji sa Vama!"
          text="Naša Misija"
          className="lg:order-last md:order-first"
        ></Main>
        <section className="py-16 bg-black px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-6">Zašto Mi?</h2>
          <p className="text-lg text-neutral-300 text-left">
            Da li se Vaš web sajt gubi u moru online sadržaja? Povećavamo
            vidljivost Vašeg web sajta na pretraživačima, privlačimo organski
            saobraćaj i poboljšavamo rangiranje, tako da Vas Vaša ciljna publika
            lako pronađe. Želite brze rezultate, ali ne znate kako da efikasno
            iskoristite Google Ads? Kreiramo ciljane Google Ads kampanje koje
            donose brze rezultate i povećavaju konverzije, maksimizirajući Vaš
            povraćaj investicije. Da li Vam je teško da doprete do Vaše ciljne
            publike na društvenim mrežama? Pomažemo Vam da dosegnete Vašu
            ciljnu publiku na Facebook-u i Instagram-u putem efikasnih Meta
            oglasa, gradeći snažnu online prisutnost. Da li Vam nedostaje
            vremena za vođenje društvenih mreža? Kreiramo i upravljamo Vašim
            profilima na društvenim mrežama, stvarajući angažovanu zajednicu i
            jačajući Vaš brend, oslobađajući Vam vreme da se fokusirate na
            druge aspekte Vašeg poslovanja. Da li želite moderan i dinamičan
            sadržaj na društvenim mrežama? Snimamo i montiramo kreativne Reels
            video zapise koji privlače pažnju i povećavaju doseg, čineći Vaš
            brend relevantnim u digitalnom svetu. Da li želite da Vaš brend
            ima prepoznatljiv vizuelni identitet? Kreiramo jedinstveni vizuelni
            identitet za Vaš brend, od logotipa do materijala za štampu i web,
            osiguravajući da Vaš brend ostavi trajan utisak. Da li Vam je
            potreban moderan i funkcionalan web sajt? Dizajniramo i razvijamo
            moderne, funkcionalne i vizuelno impresivne web sajtove, koji
            ostavljaju snažan prvi utisak.
          </p>
        </section>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}