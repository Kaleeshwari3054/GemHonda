// import  React, {useState} from 'react';
// import '../../../Styles/ExtendedWarranty.css';
// import warrantyBadge from '../../../assets/extended-waranty.webp'; 
// import FeatureBox from './FeatureBox';
// import FAQAccordion from './FAQAccordion';
// const categories = [
//   { id: 1, label: 'RedWing Motorcycles', image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/services/maintenance/tabImage/redwing-maintenance-1.png?h=174&iar=0&w=260' },
//   { id: 2, label: 'RedWing Scooters', image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/services/maintenance/tabImage/scooters-maintenance-1.png?h=174&iar=0&w=260' },
//   { id: 3, label: 'BigWing Motorcycles', image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/services/maintenance/tabImage/bigwing-maintenance-1.png?h=174&iar=0&w=260' },
//   { id: 4, label: 'EV', image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/services/maintenance/tabImage/ev-maintenance-1.png?h=174&iar=0&w=260' }
// ];


// const features = [
//   'Major Parts Covered at Minimum Cost',
//   'Across India Validity',
//   'Reliable and Genuine Honda Parts',
//   'Service by Trained Honda Technicians',
//   'Transferable in Case of Ownership Change',
// ];

// const benefits = [
//   'Wide Coverage of Parts Upto 10 Years',
//   'Enhanced Resale Value of Two-wheeler',
//   'Cost Saving on Major Replacements',
//   'Peace of Mind Nationwide',
//   'Highest Service Standards Followed',
// ];
// const ExtendedWarranty = () => {

//   const [selected, setSelected] = useState(1);

//   return (
//     <section className="coverage-section">
//          <h2>Extended Warranty</h2>
//       <p>Protect your vehicle with unique Honda Extended Warranty Packages and enjoy a decade of vehicle warranty.</p>

//       <div className="warranty-tabs">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className={`warranty-tab ${selected === cat.id ? 'active' : ''}`}
//             onClick={() => setSelected(cat.id)}
//           >
//             <img src={cat.image} alt={cat.label} />
//             <span>{cat.label}</span>
//           </div>
//         ))}
//       </div>
    


//       <div className="container">
//         <img src={warrantyBadge} alt="Extended Warranty" className="warranty-badge" />
        
//         <h2 className="coverage-heading">Coverage</h2>
//         <p className="coverage-subheading">
//           Comprehensive parts coverage and related labour charges covered.
//         </p>

//         <div className="warranty-table-wrapper">
//           <p className="table-note">
//             <strong>Extended Warranty Options Available</strong> <br />
//             <span className="small-text">(&lt;250CC category models except CBR models*)</span>
//           </p>

//           <table className="warranty-table">
//             <thead>
//               <tr>
//                 <th colSpan="2">Policy Tenure</th>
//                 <th>Total Warranty<br />(Standard + Extended)</th>
//                 <th colSpan="2">Kms. Coverage</th>
//               </tr>
//               <tr>
//                 <th>Standard Warranty</th>
//                 <th>Extended Warranty</th>
//                 <th></th>
//                 <th>Standard Warranty</th>
//                 <th>Extended Warranty</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>3 Years</td>
//                 <td>1 Year</td>
//                 <td>4 Years</td>
//                 <td>42,000 Kms.</td>
//                 <td>16,000 Kms.</td>
//               </tr>
//               <tr>
//                 <td>3 Years</td>
//                 <td>2 Years</td>
//                 <td>5 Years</td>
//                 <td>42,000 Kms.</td>
//                 <td>28,000 Kms.</td>
//               </tr>
//               <tr>
//                 <td>3 Years</td>
//                 <td>3 Years</td>
//                 <td>6 Years</td>
//                 <td>42,000 Kms.</td>
//                 <td>40,000 Kms.</td>
//               </tr>
//               <tr>
//                 <td>3 Years</td>
//                 <td>7 Years</td>
//                 <td>10 Years</td>
//                 <td>42,000 Kms.</td>
//                 <td>88,000 Kms.</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <p className="disclaimer">
//           Warranty coverage is applicable on policy period and kms, whichever is earlier. T&C apply*
//         </p>
//       </div>
//          <div className="extended-warranty">
//       <div className="boxes">
//         <FeatureBox title="Features of Extended Warranty" items={features} />
//         <FeatureBox title="Benefits of Extended Warranty" items={benefits} />
//       </div>

//       <FAQAccordion />
//     </div>
//     </section>
//   );
// };

// export default ExtendedWarranty;
