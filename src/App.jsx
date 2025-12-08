import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FounderSection from "./pages/FounderSection";
import ScooterList from "./pages/sales/ScooterList";
import BikeList from "./pages/sales/BikeList";
import ContactContainer from "./pages/ContactContainer";
import BikeDetails from "./pages/BikeDetails";
import ScooterOverview from "./pages/ScooterOverview";
import ScooterColours from "./pages/ScooterColours";
import Activa125 from "./pages/scooters/Activa125";
import Activa110 from "./pages/scooters/Activa110";
import Dio125 from "./pages/scooters/Dio125";
import Dio110 from "./pages/scooters/Dio110";
import "./App.css";
import SiteMap from "./components/Sitemap";
import Privacypolicy from "./components/Privacypolicy";
import Disclaimer from "./components/Disclaimer";
import Termsandcondition from "./components/Termsandcondition";
import ScrollToTop from "./pages/ScrollToTop";
import Offers from "./pages/Offers";
import Reviews from "./pages/Reviews";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <AboutUs />
                <FounderSection />
                <Reviews />
              </>
            }
          />
          <Route path="/evlist" element={<EVList />} />
          <Route path="/bike-list" element={<BikeList />} />
          <Route path="/scooter-page" element={<ScooterList />} />
          <Route path="/contact-container" element={<ContactContainer />} />
          <Route path="/bike-details-container" element={<BikeDetails />} />
          <Route path="/scooters/activa-125" element={<Activa125 />} />
          <Route path="/scooters/activa-110" element={<Activa110 />} />
          <Route path="/scooters/dio-125" element={<Dio125 />} />
          <Route path="/scooters/dio-110" element={<Dio110 />} />
          <Route path="/scooter/:slug" element={<ScooterOverview />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Termsandcondition />} />
          <Route
            path="/scooter-overview-container"
            element={<ScooterOverview />}
          />
          <Route
            path="/scooter-colours-container"
            element={<ScooterColours />}
          />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
