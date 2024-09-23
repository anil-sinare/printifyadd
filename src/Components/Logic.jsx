import React from "react";
import storage from "../assets/stores.svg";
import winn from "../assets/wix-MWZCZDTE.svg";
import woo from "../assets/woo-PGFAG65X.svg";
import squ from "../assets/squarespace-FIBF2RIF.svg";
import print from "../assets/presta-54F6AYUU.svg";
import more from "../assets/more-integration-4S3FHLQZ.svg";
import bit from "../assets/big-commerce-EGSGKPYX.svg";
import etsy from "../assets/etsy-MXXFYORZ.svg";
import hand from "../assets/5a.svg";
import sho from "../assets/sho.svg";

const Logic = () => {
  return (
    <div className="mx-20 relative">
      <div className="text-center mt-10 pb-10 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Connect your store
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Printify easily integrates with major e-commerce platforms and
          marketplaces.
        </p>
      </div>
      <div className="">
        <img src={storage} />
        <div className="absolute top-28 right-72 ">
          <a href=" https://printify.com/wix/">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl bg-white shadow-md hover:scale-95"
              src={winn}
              alt=""
            />
          </a>
        </div>
        <div className="absolute top-80 right-56 ">
          <a href="https://printify.com/woocommerce/">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl bg-white shadow-md hover:scale-95"
              src={woo}
              alt=""
            />
          </a>
        </div>
        <div className="absolute top-56 left-[700px] ">
          <a href="https://printify.com/woocommerce/">
            {" "}
            <img
              className="border w-36 px-7 py-8 rounded-2xl bg-white shadow-md hover:scale-95"
              src={squ}
              alt=""
            />
          </a>
        </div>

        <div className="absolute bottom-28 left-52 ">
          <a href="https://printify.com/prestashop/">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl bg-white shadow-md hover:scale-95"
              src={print}
              alt=""
            />
          </a>
        </div>

        <div className="absolute bottom-0 left-72 ">
          <a href="https://printify.com/integrations/">
            {" "}
            <img
              className="border  px-3 py-2 rounded-2xl w-28 bg-white shadow-md hover:scale-95"
              src={more}
              alt=""
            />
          </a>
        </div>

        <div className="absolute top-28 left-72 ">
          <a href=" https://printify.com/bigcommerce/">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl bg-white shadow-md hover:scale-95"
              src={bit}
              alt=""
            />
          </a>
        </div>

        <div className="absolute bottom-10 right-72    ">
          <a href="https://printify.com/etsy/">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl bg-white shadow-md hover:scale-95"
              src={etsy}
              alt=""
            />
          </a>
        </div>

        <div className="absolute top-60 right-[800px]    ">
          <a href="#">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl w-32  bg-green-600 shadow-md hover:scale-95"
              src={hand}
              alt=""
            />
          </a>
        </div>

        <div className="absolute bottom-0 right-[700px] ">
          <a href=" https://printify.com/bigcommerce/">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl bg-white shadow-md hover:scale-95"
              src={sho}
              alt=""
            />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 ">
          <a href=" https://printify.com/bigcommerce/">
            {" "}
            <img
              className="border px-8 py-8 rounded-2xl bg-white shadow-md hover:scale-95 w-48"
              src="https://logowik.com/content/uploads/images/api1791.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logic;
