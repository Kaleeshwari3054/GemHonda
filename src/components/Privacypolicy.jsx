import React from "react";

const Privacypolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-gray-800">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Privacy Policy – Gem Honda
        </h1>

        <p className="mb-6 leading-relaxed">
          This Privacy Policy has been created to help visitors understand how
          Gem Honda collects, uses, protects, and manages Personally
          Identifiable Information (PII). PII, as defined under Indian privacy
          laws and information security standards, refers to information that
          can identify, contact, or locate an individual. Please read this
          Privacy Policy carefully to understand how Gem Honda handles your
          information.
        </p>

        <Section title="Information We Collect">
          When visiting, registering, or placing an order on the Gem Honda
          website or app, you may be asked to enter your name, email address,
          mailing address, phone number, or other details to enhance your
          experience.
        </Section>

        <Section title="When We Collect Information">
          <ul className="list-disc ml-6 space-y-2">
            <li>Fill out a form</li>
            <li>Register on the website</li>
            <li>Make a purchase</li>
            <li>Enter information anywhere on the site</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc ml-6 space-y-2">
            <li>Respond to customer service requests efficiently</li>
            <li>Process transactions quickly</li>
            <li>Improve user experience and website performance</li>
          </ul>
        </Section>

        <Section title="How We Protect Your Information">
          <ul className="list-disc ml-6 space-y-2">
            <li>Gem Honda does not use vulnerability scanning or PCI standard scanning.</li>
            <li>Gem Honda does not use Malware Scanning.</li>
            <li>Gem Honda does not use an SSL certificate.</li>
            <li>
              We do not require an SSL certificate because our website primarily
              provides information about automobiles available at the Gem Honda
              Showroom and facilitates “post service done” payments.
            </li>
          </ul>
        </Section>

        <Section title="Use of Cookies">
          <ul className="list-disc ml-6 space-y-2">
            <li>Gem Honda does not use cookies for tracking.</li>
            <li>You can disable cookies in your browser settings.</li>
            <li>Some features may not work properly if cookies are disabled.</li>
          </ul>
        </Section>

        <Section title="Third-Party Disclosure">
          Gem Honda does not sell, trade, or transfer your Personally
          Identifiable Information to outside parties.
        </Section>

        <Section title="Third-Party Links">
          Gem Honda does not include or offer third-party products or services on
          our website.
        </Section>

        <Section title="Google Services">
          <p className="mb-4">
            We use Google AdSense advertising on the Gem Honda website. Google,
            as a third-party vendor, uses cookies to serve ads based on users’
            visits.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Demographics and Interests Reporting</li>
            <li>Use of first-party and third-party cookies</li>
            <li>Website traffic and user behavior analysis</li>
          </ul>
        </Section>

        <Section title="Opting Out">
          You can manage ad preferences through the Google Ad Settings page or
          use the Google Analytics Opt-Out Browser Add-on.
        </Section>

        <Section title="COPPA (Children’s Online Privacy Protection Act)">
          Gem Honda does not specifically market to children under the age of
          13.
        </Section>

        <Section title="Fair Information Practices">
          <ul className="list-disc ml-6 space-y-2">
            <li>Users will be notified via email within 7 business days in case of a data breach.</li>
            <li>We support individual redress rights.</li>
          </ul>
        </Section>

        <Section title="CAN-SPAM Act Compliance">
          <ul className="list-disc ml-6 space-y-2">
            <li>We collect email addresses to communicate and send updates.</li>
            <li>No misleading headers or subjects are used.</li>
            <li>Opt-out requests are honored quickly.</li>
          </ul>
        </Section>

        <p className="mt-8 text-center text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-3 text-gray-900">{title}</h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default Privacypolicy;
