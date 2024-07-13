import React from "react";
import TestNav from "../Nav/TestNav.js";
import Footer from "../Footer.js/Footer.js";
import Banner from "./Banner.js";

import BannerTwo from "./BannerrTwo.js";
import BannerFive from "./BannerFive.js";
import BannerProducts from "./BannerProducts.js";
import BannerFour from "./BannerFour.js";

export default function HomePage() {
  return (
    <div>
      <TestNav />
      <Banner/>
      <BannerTwo/>
      <BannerProducts/>
      <BannerFour/>
      <BannerFive/>
      <Footer />
    </div>
  );
}
