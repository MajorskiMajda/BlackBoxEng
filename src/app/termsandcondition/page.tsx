'use client';

import Nav from '../home/components/NavBar';
import Footer from '../home/components/Footer';
import ContactForm from '../home/components/ContactView';

export default function TermsPage() {
  return (
    <div className="">
      <Nav />

      <div className="text-white">
        {/* Hero Section */}
        <section className="bg-[#da26ff] py-20 text-center px-6">
          <div className="max-w-8xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-neutral-200 text-sm mt-2">&copy; 2025 Vendora Group LLC. All rights reserved.</p>
          </div>
        </section>

        {/* Terms and Conditions Content */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto text-neutral-300 space-y-10 leading-relaxed">

          <h2 className="text-3xl font-bold">Welcome</h2>
          <p>Welcome to https://eng.black-box-media.com!</p>
          <p>These terms and conditions outline the rules and regulations for the use of Vendora Group LLC&apos;s Website, located at https://eng.black-box-media.com.</p>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use https://eng.black-box-media.com if you do not agree to take all of the terms and conditions stated on this page.</p>
          <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&apos;s needs in respect of provision of the Company&apos;s stated services, in accordance with and subject to, prevailing law of us. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

          <h2 className="text-3xl font-bold">Cookies</h2>
          <p>We employ the use of cookies. By accessing https://eng.black-box-media.com you agreed to use cookies in agreement with Vendora Group LLC&apos;s Privacy Policy.</p>

          <h2 className="text-3xl font-bold">License</h2>
          <p>Unless otherwise stated, Vendora Group LLC and/or its licensors own the intellectual property rights for all material on https://eng.black-box-media.com. All intellectual property rights are reserved. You may access this from https://eng.black-box-media.com for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Republish material from https://eng.black-box-media.com</li>
            <li>Sell, rent or sub-license material from https://eng.black-box-media.com</li>
            <li>Reproduce, duplicate or copy material from https://eng.black-box-media.com</li>
            <li>Redistribute content from https://eng.black-box-media.com</li>
          </ul>

          <h2 className="text-3xl font-bold">Comments</h2>
          <p>Parts of this website offer users the opportunity to post and exchange opinions. Vendora Group LLC does not filter, edit, publish or review Comments prior to their appearance on the website. Comments do not reflect the views and opinions of Vendora Group LLC, its agents or affiliates. Comments reflect the views of the person posting them.</p>
          <p>You warrant and represent that:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>You are entitled to post the Comments and have all necessary licenses and consents to do so;</li>
            <li>The Comments do not infringe any intellectual property rights of any third party;</li>
            <li>The Comments do not contain defamatory, libelous, offensive, indecent, or otherwise unlawful material;</li>
            <li>The Comments will not be used to solicit or promote business or unlawful activity.</li>
          </ul>

          <h2 className="text-3xl font-bold">Hyperlinking to our Content</h2>
          <p>The following organizations may link to our Website without prior written approval:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors</li>
            <li>System wide Accredited Businesses (excluding charities and charity fundraising groups)</li>
          </ul>

          <h2 className="text-3xl font-bold">iFrames</h2>
          <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

          <h2 className="text-3xl font-bold">Content Liability</h2>
          <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims arising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or violation of, any third-party rights.</p>

          <h2 className="text-3xl font-bold">Reservation of Rights</h2>
          <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it&apos;s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

          <h2 className="text-3xl font-bold">Removal of Links</h2>
          <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or to respond directly.</p>

          <h2 className="text-3xl font-bold">Disclaimer</h2>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Limit or exclude our or your liability for death or personal injury;</li>
            <li>Limit or exclude liability for fraud or fraudulent misrepresentation;</li>
            <li>Limit any of our or your liabilities in any way not permitted under applicable law;</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>

          <h2 className="text-3xl font-bold">Contacting Us</h2>
          <p>If there are any questions regarding these Terms and Conditions, you may contact us at:</p>
          <p>
            <strong>Vendora Group LLC</strong><br />
            30 N Gould St Ste R, Sheridan, WY 82801, USA<br />
            Email: info@vendoragroup.com<br />
            Website: https://eng.black-box-media.com
          </p>

        </section>

        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
