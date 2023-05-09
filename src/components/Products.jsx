import React, { useEffect } from "react";
import ProductsCard from "./ProductsCard";
import RoundedPriceProvider from "../context/RoundedPriceProvider";
import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
  React.useEffect(() => {
    console.log(products);
  }, [products]);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/store");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fff5ff] py-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl text-[#fff5ff] bg-[#b300b0] text-white py-2 w-80 text-center">
          smart shopping
        </h1>
        <div className="w-32 shadow-amber-100 h-0.5 bg-[#b300b0]"></div>
        <p className="max-w-md lg:max-w-lg text-[#b300b0] text-center">
            Upgrade your life with the latest tech
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
        {Array.isArray(products) &&
          products?.map((item) => (
            <RoundedPriceProvider key={item.id} product={item}>
              <ProductsCard key={item.id} product={item} />
            </RoundedPriceProvider>
          ))}
      </div>

      <div className="flex justify-center my-8">
        <button
          onClick={handleClick}
          className="bg-[#b300b0] hover:bg-[#660065] duration-300  text-white font-semibold text-lg py-2 px-4 rounded"
        >
          load more products
        </button>
      </div>
    </div>
  );
};
export default Products;
