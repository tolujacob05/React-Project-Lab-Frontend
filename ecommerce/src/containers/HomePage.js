import React from "react";

import Promo from "./Promo";
import StorePage from "./StorePage";

import Nav from "./Nav";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Promo />
      <StorePage />
    </div>
  );
};

export default HomePage;
