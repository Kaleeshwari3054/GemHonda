// App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import RideCards from "./pages/RideCards";
import ImageCarousel from "./pages/ImageCarousel";
import CommunityCarousel from "./pages/CommunityCarousel";
import EVList from "./pages/sales/EVList"; // Make sure this exists
import ScooterList from "./pages/sales/ScooterList";
// import DealerNetworkSection from "./pages/dealer/DealerNetworkSection";
import EVOverview from "./pages/EVOverview";
import EVComparison from "./pages/EVComparison";
import EVColours from "./pages/EVColours";
import BikeList from "./pages/sales/BikeList";
import ContactContainer from "./pages/ContactContainer";
import BikeDetails from "./pages/BikeDetails";
import ScooterOverview from "./pages/ScooterOverview";
import ScooterColours from "./pages/ScooterColours";
import Activa125 from "./pages/scooters/Activa125";
import Activa110 from "./pages/scooters/Activa110";
import Dio125 from "./pages/scooters/Dio125";
import Dio110 from "./pages/scooters/Dio110";


// import ExtendedWarranty from "./pages/Services/Maintenance/ExtendedWarranty";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <RideCards />
              <ImageCarousel />
              <CommunityCarousel />
            </>
          }
        />
        <Route path="/evlist" element={<EVList />} />
        <Route path="/bike-list" element={<BikeList />} />

        <Route path="/scooter-page" element={<ScooterList />} />
        <Route path="/ev-overview-container" element={<EVOverview />} />
        {/* <Route path="/coverage-section" element ={<ExtendedWarranty/>}/> */}
        <Route path="/comparison-container" element={<EVComparison />} />
        <Route path="/ev-colours-container" element={<EVColours />} />
        <Route path="/contact-container" element={<ContactContainer />} />
        <Route path="/bike-details-container" element={<BikeDetails />} />
      
        {/* Individual Scooter Pages */}
        <Route path="/scooters/activa-125" element={<Activa125 />} />
        <Route path="/scooters/activa-110" element={<Activa110 />} />
        <Route path="/scooters/dio-125" element={<Dio125 />} />
        <Route path="/scooters/dio-110" element={<Dio110 />} />
        
        <Route path="/scooter/:slug" element={<ScooterOverview />} />

        <Route
          path="/scooter-overview-container"
          element={<ScooterOverview />}
        />
        <Route path="/scooter-colours-container" element={<ScooterColours />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
