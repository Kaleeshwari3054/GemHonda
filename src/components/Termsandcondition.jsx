// // src/components/TermsConditions.jsx
// import React from "react";

// const TermsConditions = () => {
//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Terms & Conditions – GEM Honda</h1>
//       <p><strong>Last Updated:</strong> October 04, 2024</p>

//       <section className="mb-4">
//         <h2>1. Interpretation and Definitions</h2>
//         <h3>Interpretation</h3>
//         <p>
//           Words with capitalized initials have defined meanings under the following conditions. These definitions apply
//           whether in singular or plural form.
//         </p>

//         <h3>Definitions</h3>
//         <ul>
//           <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
//           <li><strong>Country:</strong> Tamil Nadu, India.</li>
//           <li><strong>Company:</strong> GEM Honda, an authorized Honda two-wheeler dealership, located in Tamil Nadu, India.</li>
//           <li><strong>Device:</strong> Any device that can access the Service such as computer, mobile phone, or tablet.</li>
//           <li><strong>Service:</strong> The website and services provided by GEM Honda.</li>
//           <li><strong>Website:</strong> GEM Honda, accessible from <a href="https://www.thegemmotors.com/" target="_blank" rel="noopener noreferrer">https://www.thegemmotors.com/</a>.</li>
//           <li><strong>You:</strong> The individual or legal entity accessing or using the Service.</li>
//         </ul>
//       </section>

//       <section className="mb-4">
//         <h2>2. Acknowledgment</h2>
//         <p>These Terms govern your use of this website. By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, do not use the website.</p>
//         <p>You confirm that you are at least 18 years of age. Our use of your information is subject to our <a href="/privacy-policy">Privacy Policy</a>.</p>
//       </section>

//       <section className="mb-4">
//         <h2>3. Use of Website</h2>
//         <p>You agree to use this website only for lawful purposes. You must not:</p>
//         <ul>
//           <li>Cause damage or disrupt website operation</li>
//           <li>Attempt unauthorized access</li>
//           <li>Upload malicious code, viruses, or harmful content</li>
//         </ul>
//       </section>

//       <section className="mb-4">
//         <h2>4. Product & Service Information</h2>
//         <p>GEM Honda provides information related to:</p>
//         <ul>
//           <li>Honda two-wheelers (bikes and scooters)</li>
//           <li>Prices, specifications, mileage, and features</li>
//           <li>Offers and dealership services</li>
//         </ul>
//         <p>All product details are indicative only and may change without prior notice.</p>
//       </section>

//       <section className="mb-4">
//         <h2>5. Links to Third-Party Websites</h2>
//         <p>We may contain links to third-party websites. GEM Honda is not responsible for the content or policies of third-party sites.</p>
//       </section>

//       <section className="mb-4">
//         <h2>6. Termination</h2>
//         <p>We may terminate your access to our Service immediately if you violate these Terms.</p>
//       </section>

//       <section className="mb-4">
//         <h2>7. Limitation of Liability</h2>
//         <p>GEM Honda shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed ₹10,000 INR if no purchase was made.</p>
//       </section>

//       <section className="mb-4">
//         <h2>8. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
//         <p>The Service is provided "AS IS" and "AS AVAILABLE" without warranties. We do not guarantee uninterrupted access, accuracy, or virus-free operation.</p>
//       </section>

//       <section className="mb-4">
//         <h2>9. Governing Law</h2>
//         <p>These Terms are governed by the laws of India, with exclusive jurisdiction of courts in Tamil Nadu.</p>
//       </section>

//       <section className="mb-4">
//         <h2>10. Dispute Resolution</h2>
//         <p>If you have any dispute or concern, you agree to first attempt to resolve it informally by contacting GEM Honda.</p>
//       </section>

//       <section className="mb-4">
//         <h2>11. Changes to These Terms</h2>
//         <p>We reserve the right to modify or replace these Terms at any time. Changes become effective once posted on the website.</p>
//       </section>

//       <section className="mb-4">
//         <h2>12. Contact Us</h2>
//         <p>If you have any questions, contact us:</p>
//         <ul>
//           <li><strong>Email:</strong> gemmotors@thegemmotors.com</li>
//           <li><strong>Phone:</strong> +91-9094320000</li>
//           <li><strong>Address:</strong> 2/9 Yaathaval Street, Virugambakkam Chennai, Tamil Nadu, India</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default TermsConditions;





// src/components/TermsConditions.jsx
import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-6">Terms & Conditions – GEM Honda</h1>
          <p className="text-muted">Last Updated: October 04, 2024</p>
        </div>

        {/* Sections */}
        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">1. Interpretation and Definitions</h2>

              <h3 className="h6 fw-semibold">Interpretation</h3>
              <p className="text-muted small">
                Words with capitalized initials have defined meanings under the following conditions. These definitions apply
                whether in singular or plural form.
              </p>

              <h3 className="h6 fw-semibold mt-3">Definitions</h3>
              <ul className="small text-muted">
                <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
                <li><strong>Country:</strong> Tamil Nadu, India.</li>
                <li><strong>Company:</strong> GEM Honda, an authorized Honda two-wheeler dealership, located in Tamil Nadu, India.</li>
                <li><strong>Device:</strong> Any device that can access the Service such as computer, mobile phone, or tablet.</li>
                <li><strong>Service:</strong> The website and services provided by GEM Honda.</li>
                <li><strong>Website:</strong> GEM Honda, accessible from <a href="https://www.thegemmotors.com/" target="_blank" rel="noopener noreferrer">https://www.thegemmotors.com/</a>.</li>
                <li><strong>You:</strong> The individual or legal entity accessing or using the Service.</li>
              </ul>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">2. Acknowledgment</h2>
              <p className="text-muted small">
                These Terms govern your use of this website. By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, do not use the website.
              </p>
              <p className="text-muted small">
                You confirm that you are at least 18 years of age. Our use of your information is subject to our <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">3. Use of Website</h2>
              <p className="text-muted small">You agree to use this website only for lawful purposes. You must not:</p>
              <ul className="small text-muted">
                <li>Cause damage or disrupt website operation</li>
                <li>Attempt unauthorized access</li>
                <li>Upload malicious code, viruses, or harmful content</li>
              </ul>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">4. Product & Service Information</h2>
              <p className="text-muted small">GEM Honda provides information related to:</p>
              <ul className="small text-muted">
                <li>Honda two-wheelers (bikes and scooters)</li>
                <li>Prices, specifications, mileage, and features</li>
                <li>Offers and dealership services</li>
              </ul>
              <p className="text-muted small">
                All product details are indicative only and may change without prior notice.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">5. Links to Third-Party Websites</h2>
              <p className="text-muted small">
                We may contain links to third-party websites. GEM Honda is not responsible for the content or policies of third-party sites.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">6. Termination</h2>
              <p className="text-muted small">
                We may terminate your access to our Service immediately if you violate these Terms.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">7. Limitation of Liability</h2>
              <p className="text-muted small">
                GEM Honda shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed ₹10,000 INR if no purchase was made.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">8. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
              <p className="text-muted small">
                The Service is provided "AS IS" and "AS AVAILABLE" without warranties. We do not guarantee uninterrupted access, accuracy, or virus-free operation.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">9. Governing Law</h2>
              <p className="text-muted small">
                These Terms are governed by the laws of India, with exclusive jurisdiction of courts in Tamil Nadu.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">10. Dispute Resolution</h2>
              <p className="text-muted small">
                If you have any dispute or concern, you agree to first attempt to resolve it informally by contacting GEM Honda.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">11. Changes to These Terms</h2>
              <p className="text-muted small">
                We reserve the right to modify or replace these Terms at any time. Changes become effective once posted on the website.
              </p>
            </div>

            {/* Section */}
            <div className="card shadow-sm mb-4 p-4 border-0 rounded-4">
              <h2 className="h5 fw-bold mb-3">12. Contact Us</h2>
              <p className="text-muted small">If you have any questions, contact us:</p>
              <ul className="small text-muted">
                <li><strong>Email:</strong> gemmotors@thegemmotors.com</li>
                <li><strong>Phone:</strong> +91-9094320000</li>
                <li><strong>Address:</strong> 2/9 Yaathaval Street, Virugambakkam Chennai, Tamil Nadu, India</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsConditions;