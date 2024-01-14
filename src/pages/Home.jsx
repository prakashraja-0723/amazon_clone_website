import React from "react";
import Header from "../Components/Header.jsx";
import ProductSlider from "../Components/ProductSlider.jsx";
import ProductCard from "../Components/ProductCard.jsx";
import Footer from "../Components/Footer.jsx";

import responsive from "../assets/responsive.gif";

const Home = () => {
  return (
    <>
      <div className={`hidden lg:block`}>
        <Header />
        <main className={`relative max-w-[1500px] mx-auto`}>
          <ProductSlider />
          <ProductCard />
        </main>
        <Footer />
      </div>
      <div
        className={`lg:hidden w-screen h-screen flex items-center justify-center`}
      >
        <div
          className={`w-[300px] sm:w-[400px] md:min-w-[600px] lg:w-[800px] h-64 rounded-md m-auto border border-gray-400 shadow text-slate-900 p-5 text-center`}
        >
          <div className={`flex items-center justify-center`}>
            <img src={responsive} alt="responsive" />
          </div>
          <h1>
            This site only supports for large screen [minimum width : 1024px]
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
