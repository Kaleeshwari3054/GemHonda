// src/pages/Products/BikeList.jsx
import React from 'react';
import '../../Styles/BikeList.css';
import {Link} from 'react-router-dom'

const bikes=[
  {
  name: 'Honda SP 125',
  cc: '124 cc',
  mileage: '65 kmpl',
  bhp: '10.8 bhp',
  weight: '117 kg',
  price: '₹ 95,500',
  rating: '4.7/5',
  ratingsCount: '3,652 Ratings',
  description: 'The Honda SP 125 combines sporty styling with fuel-efficient performance. Equipped with advanced features like a digital meter, LED headlamp, and refined 125cc engine, it delivers smooth rides and excellent mileage for daily commutes.',
  image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/menu/RedWing/shine-125.jpg?h=240&iar=0&w=360',
  colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/g67bafb_1809975.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/1q6bafb_1809979.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80" },
      { name: "Mat Marvel Blue Metallic", code: "#071a36", image: "https://imgd.aeplcdn.com/1056x594/n/905bafb_1809983.jpg?q=80"},
      { name: "Mat Axis Grey Metallic", code: "#29302c", image: "https://imgd.aeplcdn.com/1056x594/n/u2nbafb_1809977.jpg?q=80"},
  ]
},
{
  name: 'Honda CB 125 Hornet',
  cc: '124.7 cc',
  mileage: '54 kmpl',
  bhp: '11.0 bhp',
  weight: '126 kg',
  price: '₹ 1,14,200',
  rating: '4.5/5',
  ratingsCount: '42 Ratings',
  description: 'The Honda CB 125 Hornet is a muscular street bike designed for riders who seek style and performance. With its aggressive tank design, powerful engine, and comfortable seating, it’s perfect for both city rides and weekend trips.',
  image: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/motorcycle/CB-125/nav/CB125.jpg?h=240&iar=0&w=360',
  colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/50d6qgb_1855474.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/50d6qgb_1855474.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/uh06qgb_1855470.jpg?q=80" },
      { name: "Pearl Siren Blue with Lemon Ice Yellow", image: "https://imgd.aeplcdn.com/1056x594/n/b63oqgb_1855468.jpg?q=80"},
  ]
}
,
{
  name: 'Honda Shine',
  cc: '123.94 cc',
  mileage: '55 kmpl',
  bhp: '10.59 bhp',
  weight: '114 kg',
  price: '₹ 81,300',
  rating: '4.5/5',
  ratingsCount: '3,487 Ratings',
  description: 'The Honda Shine is one of India’s most popular commuter motorcycles, known for its reliability, refined engine, and comfortable ride quality. Its stylish design and efficient performance make it ideal for daily commuting.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/45481/shine-right-side-view-2.jpeg?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/sobtkgb_1848452.jpg?q=80" },
    { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/otgtkgb_1848458.jpg?q=80" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80" },
    { name: "Genny Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/om9tkgb_1848456.jpg?q=80"},
    { name: "Matte Axis Gray Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/ppdtkgb_1848454.jpg?q=80" },
    { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/u2nbafb_1809977.jpg?q=80"},
  ]
},
{
  name: 'Honda CB350',
  cc: '348.36 cc',
  mileage: '35 kmpl',
  bhp: '20.78 bhp',
  weight: '181 kg',
  price: '₹ 2,14,800',
  rating: '4.7/5',
  ratingsCount: '2,156 Ratings',
  description: 'The Honda CB350 blends classic design with modern performance, featuring a powerful single-cylinder engine, smooth gearbox, and retro-inspired styling. It is perfect for riders who appreciate timeless charm with a touch of modern tech.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/200503/cb350-right-side-view.jpeg?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/lwasnfb_1825021.jpg?q=80" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/t0hsnfb_1825029.jpg?q=80" },
    { name: "Pearl Deep Ground Gray", image: "https://imgd.aeplcdn.com/1056x594/n/0wfsnfb_1825027.jpg?q=80" },
    { name: "Mat Dune Brown", image: "https://imgd.aeplcdn.com/1056x594/n/wtesnfb_1825025.jpg?q=80"},
    { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/xfcsnfb_1825023.jpg?q=80"},
  ]
},
{
  name: 'Honda Unicorn',
  cc: '162.7 cc',
  mileage: '50 kmpl',
  bhp: '12.73 bhp',
  weight: '140 kg',
  price: '₹ 1,09,800',
  rating: '4.5/5',
  ratingsCount: '3,487 Ratings',
  description: 'The Honda Unicorn is a trusted commuter bike that offers excellent comfort, refined performance, and impressive mileage. Known for its reliability and low maintenance costs, it’s a favorite among long-distance and daily riders alike.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/194689/unicorn-right-side-view.jpeg?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/ypqds9b_1803741.jpg?q=80" },
    { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-mat-axis-gray-metallic-1669210943319.png?q=800" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/nc5ds9b_1803743.jpg?q=80" },
  ]
}
,

{
  name: 'Honda Hornet 2.0',
  cc: '184.4 cc',
  mileage: '40 kmpl',
  bhp: '17.03 bhp',
  weight: '142 kg',
  price: '₹ 1,39,000',
  rating: '4.5/5',
  ratingsCount: '2,314 Ratings',
  description: 'The Honda Hornet 2.0 is a muscular streetfighter built for riders who crave style and performance. Equipped with a refined engine, sharp handling, and premium features, it is perfect for city streets as well as spirited weekend rides.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/156227/hornet-right-side-view-2.png?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/uhd9hgb_1844284.png?q=80" },
    { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/5ib9hgb_1844282.png?q=80" },
    { name: "Pearl Igneous Black - OBD 2", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-pearl-igneous-black---obd-2-1693228291632.png?q=800" },
    { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-matte-axis-grey-metallic---obd2-1693228309007.png?q=80"},
  ]
},
{
  name: 'Honda Hness CB350',
  cc: '348.36 cc',
  mileage: '35 kmpl',
  bhp: '20.78 bhp',
  weight: '181 kg',
  price: '₹ 2,14,000',
  rating: '4.7/5',
  ratingsCount: '1,856 Ratings',
  description: 'The Honda Hness CB350 combines retro charm with modern performance. Its thumpy exhaust note, comfortable riding stance, and advanced tech make it a perfect choice for long rides and everyday commuting alike.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/200501/hness-cb350-right-side-view-2.png?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/g67bafb_1809975.jpg?q=80" },
    { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/ijarnfb_1824961.jpg?q=80" },
    { name: "Rebel Red Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/vuvqnfb_1824959.jpg?q=80" },
    { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/3wuqnfb_1824957.jpg?q=80"},
    { name: "Pearl Igneous Black", image: "https://imgd.aeplcdn.com/1056x594/n/uatqnfb_1824955.jpg?q=80" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zternfb_1824965.jpg?q=80" },
  ]
},
{
  name: 'Honda SP 160',
  cc: '162.71 cc',
  mileage: '45 kmpl',
  bhp: '13.27 bhp',
  weight: '139 kg',
  price: '₹ 1,18,500',
  rating: '4.4/5',
  ratingsCount: '1,094 Ratings',
  description: 'The Honda SP 160 is a sporty commuter that offers a balance of style, efficiency, and performance. With aggressive design lines, a refined engine, and comfortable ergonomics, it is ideal for both city commutes and short highway trips.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/154781/sp160-right-side-view-13.jpeg?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/y2r5kgb_1848412.jpg?q=80" },
    { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/b1s5kgb_1848414.jpg?q=80" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/2mo5kgb_1848408.jpg?q=80" },
    { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/f0p5kgb_1848410.jpg?q=80"},
  ]
}
,

{
  name: 'Honda NX200',
  cc: '184.4 cc',
  mileage: '42 kmpl',
  bhp: '17.03 bhp',
  weight: '147 kg',
  price: '₹ 1,48,000',
  rating: '4.5/5',
  ratingsCount: '1,258 Ratings',
  description: 'The Honda NX200 is a stylish and versatile bike designed for riders who enjoy both city commuting and weekend adventures. Its refined engine, comfortable riding posture, and premium features make it a great choice for those seeking performance with practicality.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/197825/nx200-right-side-view-2.jpeg?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/j4g5kgb_1848398.jpg?q=80" },
    { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/h595kgb_1848396.jpg?q=80" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/agi5kgb_1848400.jpg?q=80" },
  ]
},
{
  name: 'Honda NX500',
  cc: '471 cc',
  mileage: '28 kmpl',
  bhp: '46.9 bhp',
  weight: '196 kg',
  price: '₹ 5,90,000',
  rating: '4.7/5',
  ratingsCount: '892 Ratings',
  description: 'The Honda NX500 is an adventure-touring motorcycle built for riders who crave long-distance journeys with comfort and reliability. With its robust parallel-twin engine, upright ergonomics, and advanced riding aids, it is equally capable on highways and rough trails.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/164401/nx500-right-side-view-6.png?isig=0&q=80',
  colors: [
    { name: "Pearl Horizon White", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-pearl-horizon-white-1705657375652.png?q=80" },
    { name: "Grand Prix Red", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-grand-prix-red-1705657002952.png?q=80" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-matte-gunpowder-black-metallic-1705657006951.png?q=80" },
  ]
}
,
{
  name: 'Honda CBR650R',
  cc: '648.72 cc',
  mileage: '20 kmpl',
  bhp: '85.8 bhp',
  weight: '208 kg',
  price: '₹ 9,34,000',
  rating: '4.8/5',
  ratingsCount: '2,156 Ratings',
  description: 'The Honda CBR650R is a premium sport bike that blends aggressive styling with refined performance. Powered by a smooth inline-four engine, it delivers thrilling acceleration, precise handling, and a comfortable riding posture, making it perfect for both city streets and open highways.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/202631/cbr650r-right-front-three-quarter.jpeg?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/mbvs3fb_1834949.jpg?q=800" },
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/p0at3fb_1834951.jpg?q=80" },
  ]
},
{
  name: 'Honda Livo',
  cc: '109.51 cc',
  mileage: '60 kmpl',
  bhp: '8.67 bhp',
  weight: '114 kg',
  price: '₹ 78,500',
  rating: '4.4/5',
  ratingsCount: '1,032 Ratings',
  description: 'The Honda Livo is a stylish commuter motorcycle designed for daily riders who value fuel efficiency and comfort. With its sharp design, refined engine, and excellent mileage, it offers a perfect balance between performance and practicality for urban commutes.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/155547/livo-right-side-view-2.png?isig=0&q=80',
  colors: [
    { name: "Pearl Siren Blue", image: "https://imgd.aeplcdn.com/1056x594/n/ngpnigb_1845530.jpg?q=80" },
    { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/1q6bafb_1809979.jpg?q=80" },
    { name: "Pearl Igneous Black", image: "https://imgd.aeplcdn.com/1056x594/n/ozlnigb_1845524.jpg?q=80" },
  ]
}
,
{
  name: 'Honda CB300F Flex Fuel',
  cc: '293.52 cc',
  mileage: '32 kmpl',
  bhp: '24.1 bhp',
  weight: '153 kg',
  price: '₹ 2,39,000',
  rating: '4.5/5',
  ratingsCount: '1,245 Ratings',
  description: 'The Honda CB300F Flex Fuel is an advanced streetfighter designed for performance and sustainability. Featuring Flex Fuel technology, it can run on petrol as well as ethanol blends, delivering responsive power and sharp handling for urban rides and weekend getaways.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/170223/cb300f-flex-fuel-right-side-view-3.jpeg?isig=0&q=80',
  colors: [
    { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/x970a9b_1782915.jpg?q=80" },
    { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/l4n0a9b_1782917.jpg?q=80"},
  ]
},
{
  name: 'Honda Rebel 500',
  cc: '471 cc',
  mileage: '27 kmpl',
  bhp: '45.5 bhp',
  weight: '191 kg',
  price: '₹ 5,79,000',
  rating: '4.7/5',
  ratingsCount: '987 Ratings',
  description: 'The Honda Rebel 500 is a modern cruiser that blends timeless design with contemporary performance. Its low-slung frame, relaxed ergonomics, and powerful parallel-twin engine make it perfect for both city cruising and long highway journeys.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/202895/rebel-500-right-side-view-3.jpeg?isig=0&q=80',
  colors: [
    { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/1qf6vfb_1835677.jpg?q=800" },
  ]
}
,
{
  name: 'Honda CB1000 Hornet',
  cc: '998 cc',
  mileage: '17 kmpl',
  bhp: '143.5 bhp',
  weight: '208 kg',
  price: '₹ 15,00,000', // realistic updated price
  rating: '4.8/5',
  ratingsCount: '2,560 Ratings',
  description: 'The Honda CB1000 Hornet is a high-performance streetfighter designed for riders who crave power and agility. Its 998cc inline-four engine delivers thrilling acceleration, while the aggressive styling and advanced electronics ensure an exhilarating yet controlled ride.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/203642/cb-1000-hornet-right-side-view-2.jpeg?isig=0&q=80',
  colors: [
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/54bn0gb_1836512.jpg?q=80" },
  ]
},
{
  name: 'Honda GoldWing Tour',
  cc: '1833 cc',
  mileage: '14 kmpl',
  bhp: '124.7 bhp',
  weight: '390 kg',
  price: '₹ 39,20,000', // realistic updated price
  rating: '4.9/5',
  ratingsCount: '1,895 Ratings',
  description: 'The Honda GoldWing Tour is the ultimate luxury touring motorcycle, built for unmatched comfort and long-distance performance. With its powerful 1833cc flat-six engine, advanced features, and plush seating, it offers an effortless ride for both rider and passenger.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/158873/goldwing-right-side-view-2.png?isig=0&q=80',
  colors: [
      { name: "Bordeaux Red Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/tvidbgb_1837930.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/jtgcbgb_1837898.avif?q=80" },
  ]
},
{
  name: 'Honda Shine X',
  cc: '124 cc',
  mileage: '60 kmpl',
  bhp: '11.2 bhp',
  weight: '118 kg',
  price: '₹ 79,800', // realistic updated price
  rating: '4.7/5',
  ratingsCount: '4,120 Ratings',
  description: 'The Honda Shine X is a stylish and reliable commuter bike, designed for superior fuel efficiency and smooth performance. Equipped with a refined 124cc engine, it delivers excellent mileage while ensuring a comfortable riding experience. With its modern design, robust build, and multiple color options, the Shine X is perfect for daily commuting and long rides alike.',
  image: 'https://imgd.aeplcdn.com/227x128/n/cw/ec/45481/shine-right-side-view-2.jpeg?isig=0&q=80',
  colors: [
      { name: "Red", image: "https://imgd.aeplcdn.com/1056x594/n/sobtkgb_1848452.jpg?q=80" },
      { name: "Blue", image: "https://imgd.aeplcdn.com/1056x594/n/otgtkgb_1848458.jpg?q=80" },
      { name: "Black", image: "https://imgd.aeplcdn.com/1056x594/n/zdqbafb_1809981.jpg?q=80" },
      { name: "Genny Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/om9tkgb_1848456.jpg?q=80" },
      { name: "Matte Axis Gray Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/ppdtkgb_1848454.jpg?q=80" },
      { name: "Mat Axis Grey Metallic", image: "https://imgd.aeplcdn.com/1056x594/n/u2nbafb_1809977.jpg?q=80" },
  ]
}

];

const BikeList = () => {
  return (
    <div className="bike-list">
      {bikes.map((bike, index) => (
        <div className="bike-card" key={index}>
          {/* Bike Image */}
          <a href={bike.url} target="_blank" rel="noopener noreferrer">
            <img src={bike.image} alt={bike.name} className="bike-image" />
          </a>

          {/* Bike Details */}
          <div className="bike-details">
            <h2 className="bike-name">{bike.name}</h2>
            <p className="bike-specs">
              {bike.cc} | {bike.mileage} | {bike.bhp} | {bike.weight} 
            </p>
            <p className="bike-price">{bike.price}</p>

            {/* Ratings */}
            <p className="bike-rating">
              ⭐ {bike.rating} <span>({bike.ratingsCount})</span>
            </p>

            {/* Pass bike data to next page */}
            <Link to="/bike-details-container" state={{ bike }}>
              Explore
            </Link>
              <Link to="/contact-container" state={{ bike }}>
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeList;



