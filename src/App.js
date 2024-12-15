import React from "react";

import Navbar from "./components/navbar/navbar";
import SectionOne from "./components/sectionone/sectionone";
import PopularMeals from "./components/popularMeals/popularMeals";
import Gallery from "./components/gallery/gallery";
import SignUp from "./components/signup/signup";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <PopularMeals />
      <Gallery />
      <SignUp />
      <ScrollToTop />
    </div>
  );
}

export default App;
