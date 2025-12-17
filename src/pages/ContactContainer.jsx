// import React from "react";
// import "../Styles/ContactContainer.css";

// const ContactContainer = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <p className="subtitle">
//         We’re here to help! Reach out to us for inquiries, bookings, or support.
//       </p>

//       <div className="contact-content">
//         {/* Left Side - Form */}
//         <div className="contact-form">
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Full Name</label>
//               <input type="text" id="name" placeholder="Enter your name" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" placeholder="Enter your email" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <input type="tel" id="phone" placeholder="Enter your phone" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" placeholder="Write your message..." rows="4" required></textarea>
//             </div>

//             <button type="submit" className="submit-btn">Send Message</button>
//           </form>
//         </div>

//         {/* Right Side - Info + Map */}
//         <div className="contact-info">
//           <h3 className="heading">Gem Honda </h3>
//           <p>📍 2/9 Yaathaval Street,Virugambakkam Chennai, Tamil Nadu, India</p>
//         <p className="phone-row">
//   📞 <span>Service – <a href="tel:7299999711">7299999711</a></span>
//   <span className="divider">|</span>
//   📞 <span>Sales – <a href="tel:7299999733">7299999733</a></span>
// </p>
//       <div className="email-row">

//     📨 <a href="mailto:customercare@thegemmotors.com">customercare@thegemmotors.com</a>

// </div>

// <div className="map">
//   <img
//     src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg"
//     alt="Honda Showroom"
//     className="map-image"
//   />
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactContainer;
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

//     const text = `
// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Message: ${formData.message}
// `;

//     // Mobile SMS app open aagum, number + message auto-fill
//     window.location.href = `sms:9841419345?&body=${encodeURIComponent(text)}`;

//     // Optional: form clear pannanum na
//     setFormData({ name: "", email: "", phone: "", message: "" });
//     setIsChecked(false);
//   };


//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <p className="subtitle">
//         We're here to help! Reach out to us for inquiries, bookings, or support.
//       </p>

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
//                 // disabled={!isChecked}
//                 required={isChecked}
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
//                 // disabled={!isChecked}
//                 required={isChecked}
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
//                 // disabled={!isChecked}
//                 required={isChecked}
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
//                 // disabled={!isChecked}
//                 required={isChecked}
//               ></textarea>
//             </div>

//             {/* Communication Preferences Checkbox */}
//             <div className="communication-checkbox">
//               <label className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   id="communication-consent"
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                   required
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
//               className={`submit-btn ${!isChecked ? "disabled" : ""}`}
//               disabled={!isChecked}
//             >
//               {isChecked ? "Send Message" : "Accept Communications to Proceed"}
//             </button>
//           </form>
//         </div>

//         {/* Right Side - Info + Map */}
//         <div className="contact-info">
//           <h3 className="heading">Gem Honda</h3>
//           <p>
//             📍 2/9 Yaathaval Street, Virugambakkam, Chennai, Tamil Nadu, India
//           </p>

//           <p className="phone-row">
//             📞{" "}
//             <span>
//               Service – <a href="tel:7299999711">7299999711</a>
//             </span>
//             <span className="divider">|</span>
//             📞{" "}
//             <span>
//               Sales – <a href="tel:7299999733">7299999733</a>
//             </span>
//           </p>

//           <div className="email-row">
//             📨{" "}
//             <a href="mailto:customercare@thegemmotors.com">
//               customercare@thegemmotors.com
//             </a>
//           </div>

//           <div className="map">
//             <img
//               src="https://www.shutterstock.com/image-photo/portrait-attractive-trendy-cheerful-girl-600nw-2161154411.jpg"
//               alt="Honda Showroom"
//               className="map-image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactContainer;



import React, { useState } from "react";
import "../Styles/ContactContainer.css";

const ContactContainer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Please agree to receive communications to proceed!");
      return;
    }

    const text = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
`;

    // Mobile SMS app open aagum, number + message auto-fill
    window.location.href = `sms:9841419345?&body=${encodeURIComponent(text)}`;

    // Optional: clear form after triggering SMS
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsChecked(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="subtitle">
        We're here to help! Reach out to us for inquiries, bookings, or support.
      </p>

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
              ></textarea>
            </div>

            {/* Communication Preferences Checkbox */}
            <div className="communication-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="communication-consent"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  required
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
              className={`submit-btn ${!isChecked ? "disabled" : ""}`}
              disabled={!isChecked}
            >
              {isChecked ? "Send Message" : "Accept Communications to Proceed"}
            </button>
          </form>
        </div>

        {/* Right Side - Info + Map */}
        <div className="contact-info">
          <h3 className="heading">Gem Honda</h3>
          <p>
            📍 2/9 Yaathaval Street, Virugambakkam, Chennai, Tamil Nadu, India
          </p>

          <p className="phone-row">
            📞{" "}
            <span>
              Service – <a href="tel:7299999711">7299999711</a>
            </span>
            <span className="divider">|</span>
            📞{" "}
            <span>
              Sales – <a href="tel:7299999733">7299999733</a>
            </span>
          </p>

          <div className="email-row">
            📨{" "}
            <a href="mailto:customercare@thegemmotors.com">
               gemhondamd@gmail.com
            </a>
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
