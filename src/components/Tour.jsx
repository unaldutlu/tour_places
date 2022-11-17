import React from "react";
import Cards from "./Card";
import Header from "./Header";
import Navbarr from "./Navbar";
import data from "../data/data";
import Footer from "./Footer";

function Tour() {
  return (
    <div>
      <Navbarr />
      <Header />
      <div className='main'>
        {data.map((item, i) => {
          const { id, title, desc, image } = item;
          return (
            <Cards key={i} id={id} title={title} desc={desc} image={image} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Tour;
