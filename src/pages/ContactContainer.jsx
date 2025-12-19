// // import React from "react";
// // import "../Styles/ContactContainer.css";

// // const ContactContainer = () => {
// //   return (
// //     <div className="contact-container">
// //       <h2>Contact Us</h2>
// //       <p className="subtitle">
// //         We’re here to help! Reach out to us for inquiries, bookings, or support.
// //       </p>

// //       <div className="contact-content">
// //         {/* Left Side - Form */}
// //         <div className="contact-form">
// //           <form>
// //             <div className="form-group">
// //               <label htmlFor="name">Full Name</label>
// //               <input type="text" id="name" placeholder="Enter your name" required />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="email">Email</label>
// //               <input type="email" id="email" placeholder="Enter your email" required />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="phone">Phone</label>
// //               <input type="tel" id="phone" placeholder="Enter your phone" required />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="message">Message</label>
// //               <textarea id="message" placeholder="Write your message..." rows="4" required></textarea>
// //             </div>

// //             <button type="submit" className="submit-btn">Send Message</button>
// //           </form>
// //         </div>

// //         {/* Right Side - Info + Map */}
// //         <div className="contact-info">
// //           <h3 className="heading">Gem Honda </h3>
// //           <p>📍 2/9 Yaathaval Street,Virugambakkam Chennai, Tamil Nadu, India</p>
// //         <p className="phone-row">
// //   📞 <span>Service – <a href="tel:7299999711">7299999711</a></span>
// //   <span className="divider">|</span>
// //   📞 <span>Sales – <a href="tel:7299999733">7299999733</a></span>
// // </p>
// //       <div className="email-row">

// //     📨 <a href="mailto:customercare@thegemmotors.com">customercare@thegemmotors.com</a>

// // </div>

// // <div className="map">
// //   <img
// //     src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg"
// //     alt="Honda Showroom"
// //     className="map-image"
// //   />
// // </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactContainer;
// // import React, { useState } from "react";
// // import "../Styles/ContactContainer.css";

// // const ContactContainer = () => {
// //   const [isChecked, setIsChecked] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     message: "",
// //   });

// //   const handleCheckboxChange = (e) => {
// //     setIsChecked(e.target.checked);
// //   };

// //   const handleInputChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.id]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!isChecked) {
// //       alert("Please agree to receive communications to proceed!");
// //       return;
// //     }

// //     const text = `
// // Name: ${formData.name}
// // Email: ${formData.email}
// // Phone: ${formData.phone}
// // Message: ${formData.message}
// // `;

// //     // Mobile SMS app open aagum, number + message auto-fill
// //     window.location.href = `sms:9841419345?&body=${encodeURIComponent(text)}`;

// //     // Optional: form clear pannanum na
// //     setFormData({ name: "", email: "", phone: "", message: "" });
// //     setIsChecked(false);
// //   };


// //   return (
// //     <div className="contact-container">
// //       <h2>Contact Us</h2>
// //       <p className="subtitle">
// //         We're here to help! Reach out to us for inquiries, bookings, or support.
// //       </p>

// //       <div className="contact-content">
// //         {/* Left Side - Form */}
// //         <div className="contact-form">
// //           <form onSubmit={handleSubmit}>
// //             <div className="form-group">
// //               <label htmlFor="name">
// //                 Full Name <span className="required">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 placeholder="Enter your full name"
// //                 value={formData.name}
// //                 onChange={handleInputChange}
// //                 // disabled={!isChecked}
// //                 required={isChecked}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="email">
// //                 Email <span className="required">*</span>
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 placeholder="Enter your email address"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 // disabled={!isChecked}
// //                 required={isChecked}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="phone">
// //                 Phone <span className="required">*</span>
// //               </label>
// //               <input
// //                 type="tel"
// //                 id="phone"
// //                 placeholder="Enter your mobile number"
// //                 value={formData.phone}
// //                 onChange={handleInputChange}
// //                 // disabled={!isChecked}
// //                 required={isChecked}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="message">
// //                 Message <span className="required">*</span>
// //               </label>
// //               <textarea
// //                 id="message"
// //                 placeholder="Tell us about your inquiry, service needs, or feedback..."
// //                 rows="4"
// //                 value={formData.message}
// //                 onChange={handleInputChange}
// //                 // disabled={!isChecked}
// //                 required={isChecked}
// //               ></textarea>
// //             </div>

// //             {/* Communication Preferences Checkbox */}
// //             <div className="communication-checkbox">
// //               <label className="checkbox-label">
// //                 <input
// //                   type="checkbox"
// //                   id="communication-consent"
// //                   checked={isChecked}
// //                   onChange={handleCheckboxChange}
// //                   required
// //                 />
// //                 <span className="checkmark"></span>
// //                 <span className="checkbox-text">
// //                   I'd like to receive communications via SMS, Email, OBD, Google
// //                   RCS & WhatsApp for my services, offers and updates.
// //                 </span>
// //               </label>
// //             </div>

// //             <button
// //               type="submit"
// //               className={`submit-btn ${!isChecked ? "disabled" : ""}`}
// //               disabled={!isChecked}
// //             >
// //               {isChecked ? "Send Message" : "Accept Communications to Proceed"}
// //             </button>
// //           </form>
// //         </div>

// //         {/* Right Side - Info + Map */}
// //         <div className="contact-info">
// //           <h3 className="heading">Gem Honda</h3>
// //           <p>
// //             📍 2/9 Yaathaval Street, Virugambakkam, Chennai, Tamil Nadu, India
// //           </p>

// //           <p className="phone-row">
// //             📞{" "}
// //             <span>
// //               Service – <a href="tel:7299999711">7299999711</a>
// //             </span>
// //             <span className="divider">|</span>
// //             📞{" "}
// //             <span>
// //               Sales – <a href="tel:7299999733">7299999733</a>
// //             </span>
// //           </p>

// //           <div className="email-row">
// //             📨{" "}
// //             <a href="mailto:customercare@thegemmotors.com">
// //               customercare@thegemmotors.com
// //             </a>
// //           </div>

// //           <div className="map">
// //             <img
// //               src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg"
// //               alt="Honda Showroom"
// //               className="map-image"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactContainer;


// import React, { useState } from "react";
// import "../Styles/ContactContainer.css";

// const ContactContainer = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(''); // Success/Error message
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isChecked) {
//       alert("Please agree to receive communications to proceed!");
//       return;
//     }

//     setIsSubmitting(true);
//     setStatus(''); // Clear previous status

//     // Prepare email data
//     const emailSubject = `New Contact Form - GEM Honda`;
//     const emailBody = `
// New Inquiry from GEM Honda Website:

// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Message: ${formData.message}

// ---
// Submitted on: ${new Date().toLocaleString('en-IN', { 
//   timeZone: 'Asia/Kolkata',
//   dateStyle: 'medium',
//   timeStyle: 'short' 
// })}
//     `.trim();

//     const mailtoLink = `mailto:kaleeshwari894@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
//     try {
//       // Open email client
//       window.location.href = mailtoLink;
      
//       // DEVELOPER CONSOLE LOG ✅
//       console.log('✅ EMAIL TRIGGERED SUCCESSFULLY!');
//       console.log('📧 To:', 'kaleeshwari894@gmail.com');
//       console.log('📄 Subject:', emailSubject);
//       console.log('📝 Body Preview:', emailBody.substring(0, 200) + '...');
//       console.log('🔗 Full mailto link:', mailtoLink);
//       console.log('👤 User Data:', formData);

//       // Show success message
//       setStatus('success');
      
//     } catch (error) {
//       console.error('❌ Email failed:', error);
//       setStatus('error');
//     }

//     // Reset form after 2 seconds
//     setTimeout(() => {
//       setFormData({ name: "", email: "", phone: "", message: "" });
//       setIsChecked(false);
//       setIsSubmitting(false);
//       setStatus('');
//     }, 2000);
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <p className="subtitle">
//         We're here to help! Reach out to us for inquiries, bookings, or support.
//       </p>

//       {/* STATUS MESSAGE */}
//       {status && (
//         <div className={`status-message ${status}`}>
//           {status === 'success' ? (
//             <>
//               <div className="success-icon">✅</div>
//               <h4>Thank You for Your Message!</h4>
//               <p>Your inquiry has been sent successfully to our team. We will contact you soon.</p>
//               <p><strong>GEM Honda Team</strong></p>
//             </>
//           ) : (
//             <>
//               <div className="error-icon">❌</div>
//               <h4>Oops! Something went wrong</h4>
//               <p>Please try again or contact us directly.</p>
//             </>
//           )}
//         </div>
//       )}

//       <div className="contact-content">
//         {/* Left Side - Form */}
//         <div className="contact-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">
//                 Full Name <span className="required">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter your full name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 disabled={isSubmitting || status === 'success'}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">
//                 Email <span className="required">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 disabled={isSubmitting || status === 'success'}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">
//                 Phone <span className="required">*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 placeholder="Enter your mobile number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//                 disabled={isSubmitting || status === 'success'}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">
//                 Message <span className="required">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 placeholder="Tell us about your inquiry, service needs, or feedback..."
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//                 disabled={isSubmitting || status === 'success'}
//               ></textarea>
//             </div>

//             <div className="communication-checkbox">
//               <label className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   id="communication-consent"
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                   required
//                   disabled={isSubmitting || status === 'success'}
//                 />
//                 <span className="checkmark"></span>
//                 <span className="checkbox-text">
//                   I'd like to receive communications via SMS, Email, OBD, Google
//                   RCS & WhatsApp for my services, offers and updates.
//                 </span>
//               </label>
//             </div>

//             <button
//               type="submit"
//               className={`submit-btn ${(!isChecked || isSubmitting || status === 'success') ? "disabled" : ""}`}
//               disabled={!isChecked || isSubmitting || status === 'success'}
//             >
//               {isSubmitting ? "Opening Email..." : 
//                status === 'success' ? "Message Sent! 🎉" : 
//                isChecked ? "Send Message" : "Accept Communications to Proceed"}
//             </button>
//           </form>
//         </div>

//         {/* Right Side - Info + Map */}
//         <div className="contact-info">
//           <h3 className="heading">Gem Honda</h3>
//           <p>📍 2/9 Yaathaval Street, Virugambakkam, Chennai, Tamil Nadu, India</p>
//           <p className="phone-row">
//             📞 Service – <a href="tel:7299999711">7299999711</a> | 📞 Sales – <a href="tel:7299999733">7299999733</a>
//           </p>
//           <div className="email-row">
//             📨 <a href="mailto:kaleeshwari894@gmail.com">kaleeshwari894@gmail.com</a>
//           </div>
//           <div className="map">
//             <img src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg" alt="Honda Showroom" className="map-image" />
//           </div>
//         </div>
//       </div>

//       {/* CSS for Status Message - Add to ContactContainer.css */}
//       <style jsx>{`
//         .status-message {
//           padding: 20px;
//           border-radius: 10px;
//           margin-bottom: 20px;
//           text-align: center;
//           font-weight: 500;
//         }
//         .status-message.success {
//           background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
//           color: #155724;
//           border: 2px solid #c3e6cb;
//         }
//         .status-message.error {
//           background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
//           color: #721c24;
//           border: 2px solid #f5c6cb;
//         }
//         .success-icon, .error-icon {
//           font-size: 2rem;
//           margin-bottom: 10px;
//         }
//         .status-message h4 {
//           margin: 10px 0;
//           font-size: 1.3rem;
//         }
//         .status-message p {
//           margin: 5px 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactContainer;




import React, { useState } from "react";
import emailjs from '@emailjs/browser'; // npm install @emailjs/browser
import "../Styles/ContactContainer.css";

const ContactContainer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔥 YOUR EMAILJS KEYS HERE:
  const SERVICE_ID = 'service_t63p2ba';        // ✅ From Email Services
  const TEMPLATE_ID = 'template_19z1r1a';      // ← REPLACE with your Template ID
  const PUBLIC_KEY = '_RgO2dRt7vIvGvfWK';        // ← REPLACE with your Public Key

  // Initialize EmailJS
  emailjs.init(PUBLIC_KEY);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Please agree to receive communications to proceed!");
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      // ✅ AUTO-SEND with EmailJS
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'medium',
          timeStyle: 'short' 
        })
      }, PUBLIC_KEY);

      console.log('✅ EMAIL AUTO-SENT SUCCESSFULLY!', result);
      console.log('📧 Delivered to: gemhondamd@gmail.com');
      
      // ✅ PERFECT SUCCESS MESSAGE
      setStatus('success');
      
    } catch (error) {
      console.error('❌ EmailJS Error:', error);
      setStatus('error');
    }

    setIsSubmitting(false);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsChecked(false);
      setStatus('');
    }, 4000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="subtitle">
        We're here to help! Reach out to us for inquiries, bookings, or support.
      </p>

      {/* ✅ FIXED SUCCESS MESSAGE - INLINE STYLES */}
      {status === 'success' && (
        <div style={{
          padding: '25px',
          background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
          color: '#155724',
          border: '2px solid #c3e6cb',
          borderRadius: '12px',
          marginBottom: '25px',
          textAlign: 'center',
          boxShadow: '0 8px 25px rgba(40, 167, 69, 0.2)',
          animation: 'slideIn 0.5s ease'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>✅</div>
          <h4 style={{ margin: '0 0 15px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Thank You for Your Message!
          </h4>
          <p style={{ margin: '10px 0', fontSize: '1.1rem', fontWeight: 500 }}>
            Your inquiry has been sent successfully to our team.
          </p>
          <p style={{ margin: '5px 0 0 0', fontSize: '1rem' }}>
            <strong>We will contact you soon!</strong>
          </p>
          <p style={{ margin: '10px 0 0 0', fontSize: '0.95rem', color: '#0f5132' }}>
            <strong>- GEM Honda Team</strong>
          </p>
        </div>
      )}

      {status === 'error' && (
        <div style={{
          padding: '25px',
          background: 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
          color: '#721c24',
          border: '2px solid #f5c6cb',
          borderRadius: '12px',
          marginBottom: '25px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>❌</div>
          <h4>Oops! Something went wrong</h4>
          <p>Please try again or contact us directly at 7299999711</p>
        </div>
      )}

      <div className="contact-content">
        {/* Left Side - Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting || status === 'success'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting || status === 'success'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting || status === 'success'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your inquiry, service needs, or feedback..."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting || status === 'success'}
              />
            </div>

            <div className="communication-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="communication-consent"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  required
                  disabled={isSubmitting || status === 'success'}
                />
                <span className="checkmark"></span>
                <span className="checkbox-text">
                  I'd like to receive communications via SMS, Email, OBD, Google
                  RCS & WhatsApp for my services, offers and updates.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={`submit-btn ${(!isChecked || isSubmitting || status === 'success') ? "disabled" : ""}`}
              disabled={!isChecked || isSubmitting || status === 'success'}
            >
              {isSubmitting ? "Sending Email..." : 
               status === 'success' ? "✅ Sent Successfully!" : 
               isChecked ? "Send Message" : "Accept Communications to Proceed"}
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="contact-info">
          <h3 className="heading">Gem Honda</h3>
          <p>📍 2/9 Yaathaval Street, Virugambakkam, Chennai, Tamil Nadu, India</p>
          <p className="phone-row">
            📞 Service – <a href="tel:7299999711">7299999711</a> | 📞 Sales – <a href="tel:7299999733">7299999733</a>
          </p>
          <div className="email-row">
            📨 <a href="mailto:gemhondamd@gmail.com">gemhondamd@gmail.com</a>
          </div>
          <div className="map">
            <img 
              src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg" 
              alt="Honda Showroom" 
              className="map-image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
