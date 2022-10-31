import React from "react";
import Homealt from "./components/Homealt";

import SocialLinks from "./components/SocialLinks";
import NavBarAlt from "./components/NavBarAlt";
import AboutAlt from "./components/AboutAlt";
import PortfolioAlt from "./components/PortfolioAlt";
import SkillAlt from "./components/SkillsAlt";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBarAlt />
      {/* <NavBar/> */}
      <div className="relative">
        <Homealt />
        <AboutAlt />
        <PortfolioAlt />
        <SkillAlt />
        <ContactUs />
        <Footer/>
      </div>
      <SocialLinks />
    </div>
  );
}
export default App;
