import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-5">
    <h2 className="h5 fw-semibold mb-3 text-dark">{title}</h2>
    <div className="text-secondary lh-lg">{children}</div>
  </section>
);

const Privacypolicy = () => {
  return (
    <div className="min-vh-100 bg-light py-5 px-3">
      <div className="container bg-white shadow rounded-3 p-4 p-md-5 text-dark" style={{ maxWidth: "900px" }}>
        
        <h1 className="display-6 fw-bold text-center mb-5">
          Privacy Policy – Gem Honda
        </h1>

        <p className="mb-5 lh-lg">
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
          <ul className="list-unstyled ps-4">
            <li className="mb-2 list-disc">Fill out a form</li>
            <li className="mb-2 list-disc">Register on the website</li>
            <li className="mb-2 list-disc">Make a purchase</li>
            <li className="mb-2 list-disc">Enter information anywhere on the site</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-unstyled ps-4">
            <li className="mb-2 list-disc">Respond to customer service requests efficiently</li>
            <li className="mb-2 list-disc">Process transactions quickly</li>
            <li className="mb-2 list-disc">Improve user experience and website performance</li>
          </ul>
        </Section>

        <Section title="How We Protect Your Information">
          <ul className="list-unstyled ps-4">
            <li className="mb-2 list-disc">Gem Honda does not use vulnerability scanning or PCI standard scanning.</li>
            <li className="mb-2 list-disc">Gem Honda does not use Malware Scanning.</li>
            <li className="mb-2 list-disc">Gem Honda does not use an SSL certificate.</li>
            <li className="mb-2 list-disc">
              We do not require an SSL certificate because our website primarily
              provides information about automobiles available at the Gem Honda
              Showroom and facilitates “post service done” payments.
            </li>
          </ul>
        </Section>

        <Section title="Use of Cookies">
          <ul className="list-unstyled ps-4">
            <li className="mb-2 list-disc">Gem Honda does not use cookies for tracking.</li>
            <li className="mb-2 list-disc">You can disable cookies in your browser settings.</li>
            <li className="mb-2 list-disc">Some features may not work properly if cookies are disabled.</li>
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

          <ul className="list-unstyled ps-4">
            <li className="mb-2 list-disc">Demographics and Interests Reporting</li>
            <li className="mb-2 list-disc">Use of first-party and third-party cookies</li>
            <li className="mb-2 list-disc">Website traffic and user behavior analysis</li>
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
          <ul className="list-unstyled ps-4">
            <li className="mb-2 list-disc">
              Users will be notified via email within 7 business days in case of a data breach.
            </li>
            <li className="mb-2 list-disc">We support individual redress rights.</li>
          </ul>
        </Section>

        <Section title="CAN-SPAM Act Compliance">
          <ul className="list-unstyled ps-4">
            <li className="mb-2 list-disc">We collect email addresses to communicate and send updates.</li>
            <li className="mb-2 list-disc">No misleading headers or subjects are used.</li>
            <li className="mb-2 list-disc">Opt-out requests are honored quickly.</li>
          </ul>
        </Section>

        <p className="mt-5 text-center text-muted small">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Privacypolicy;
