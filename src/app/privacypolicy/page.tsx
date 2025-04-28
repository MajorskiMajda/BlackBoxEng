'use client';

import Nav from '../home/components/NavBar';
import Footer from '../home/components/Footer';
import ContactForm from '../home/components/ContactView';

export default function PrivacyPolicyPage() {
  return (
    <div className="">
      <Nav />

      <div className="text-white">
        {/* Hero Section */}
        <section className="bg-[#da26ff] py-20 text-center px-6">
          <div className="max-w-8xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-neutral-200 text-sm mt-2">© 2025 Vendora Group LLC. All rights reserved.</p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto text-neutral-300 space-y-10 leading-relaxed">

          <h2 className="text-3xl font-bold">Introduction</h2>
          <p>
            This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally identifiable information’ (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
          </p>

          <h2 className="text-3xl font-bold">What personal information do we collect?</h2>
          <p>When contacting us on our site, you may be asked to enter your name, email address, phone number or other details to help you with your experience.</p>

          <h2 className="text-3xl font-bold">When do we collect information?</h2>
          <p>We collect information from you when you fill out a form or enter information on our site.</p>

          <h2 className="text-3xl font-bold">How do we use your information?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To personalize user’s experience and deliver the type of content and product offerings in which you are most interested.</li>
            <li>To improve our website in order to better serve you.</li>
            <li>To allow us to better service you in responding to your customer service requests.</li>
            <li>To administer a contest, promotion, survey or other site feature.</li>
            <li>To send periodic emails regarding your order or other products and services.</li>
          </ul>

          <h2 className="text-3xl font-bold">How do we protect visitor information?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We do not use vulnerability scanning and/or scanning to PCI standards.</li>
            <li>We do not use Malware Scanning.</li>
            <li>We do not use an SSL certificate.</li>
            <li>We only provide articles and information on our website. Other than your contact information for the specific purposes of responding to your inquiry, we never ask for personal or private information.</li>
          </ul>

          <h2 className="text-3xl font-bold">Do we use cookies?</h2>
          <p>Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information.</p>

          <h2 className="text-3xl font-bold">We use cookies to:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Understand and save user’s preferences for future visits.</li>
            <li>Keep track of advertisements.</li>
            <li>Compile aggregate data about site traffic and interactions to offer better site experiences and tools in the future.</li>
            <li>Use trusted third-party services that track this information on our behalf.</li>
          </ul>

          <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.</p>

          <h2 className="text-3xl font-bold">If users disable cookies:</h2>
          <p>If you disable cookies, some features will be disabled. Some services may not function properly.</p>

          <h2 className="text-3xl font-bold">Third Party Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and others who assist us in operating our website, conducting our business, or servicing you, so long as they agree to keep this information confidential.</p>

          <h2 className="text-3xl font-bold">Third Party Links</h2>
          <p>We may occasionally offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.</p>

          <h2 className="text-3xl font-bold">Google</h2>
          <p>We use Google Analytics on our website for demographics and interests reporting. We, along with third-party vendors like Google, use first-party cookies (Google Analytics cookies) and third-party cookies (DoubleClick cookie) together to compile data regarding user interactions with ad impressions and other ad service functions.</p>

          <h2 className="text-3xl font-bold">California Online Privacy Protection Act (CalOPPA)</h2>
          <p>CalOPPA requires commercial websites to post a privacy policy. We comply with CalOPPA by allowing users to visit our site anonymously and providing a link to our Privacy Policy on our home page.</p>

          <h2 className="text-3xl font-bold">According to CalOPPA we agree to:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Users can visit our site anonymously.</li>
            <li>Our Privacy Policy link includes the word &quot;Privacy&quot; and is easily found.</li>
            <li>Users are notified of any changes on our Privacy Policy Page.</li>
            <li>Users can change their personal information by emailing us.</li>
          </ul>

          <h2 className="text-3xl font-bold">How does our site handle do not track signals?</h2>
          <p>We honor Do Not Track signals and do not plant cookies or use advertising when a DNT browser mechanism is in place.</p>

          <h2 className="text-3xl font-bold">Does our site allow third-party behavioral tracking?</h2>
          <p>No, we do not allow third-party behavioral tracking.</p>

          <h2 className="text-3xl font-bold">COPPA (Children Online Privacy Protection Act)</h2>
          <p>We do not specifically market to children under 13 years old.</p>

          <h2 className="text-3xl font-bold">Fair Information Practices</h2>
          <p>Should a data breach occur, we will notify the users via email within 7 business days. We also support the Individual Redress Principle, allowing individuals to legally pursue rights against data collectors and processors who fail to follow the law.</p>

          <h2 className="text-3xl font-bold">CAN-SPAM Act</h2>
          <p>We collect your email address to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Send information, respond to inquiries, and/or other requests or questions.</li>
            <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
          </ul>

          <p>To be in accordance with CANSPAM, we agree to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>NOT use false or misleading subjects or email addresses.</li>
            <li>Identify the message as an advertisement in some reasonable way.</li>
            <li>Include the physical address of our business or site headquarters.</li>
            <li>Honor opt-out/unsubscribe requests quickly.</li>
            <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
          </ul>

          <h2 className="text-3xl font-bold">If at any time you would like to unsubscribe from receiving future emails, you can:</h2>
          <p>Follow the instructions at the bottom of each email and we will promptly remove you from ALL correspondence.</p>

          <h2 className="text-3xl font-bold">Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us at:<br />
            <strong>Vendora Group LLC</strong><br />
            30 N Gould St Ste R, Sheridan, WY 82801, USA<br />
            Email: info@black-box-media.com<br />
            Website: https://eng.black-box-media.com
          </p>
        </section>

        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
