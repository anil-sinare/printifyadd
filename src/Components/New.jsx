import React from "react";
import linka from "../assets/linka.svg";

const New = () => {
  return (
    <div className="bg-gray-50 max-h-[400]">
      <div className="mx-20 mt-10 mb-10 bg-white  grid grid-cols-1 md:grid-cols-2 gap-10 p-4 ">
        <div>
          <img
            className="w-[400px] h-[500px]  row-start-5"
            src="https://printify.com/pfh/media/clothes-mobile-Q6UN6X6P.webp"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="mt-16 text-2xl sm:text-3xl font-semibold">
            Easily add your design to a wide range of products
          </p>
          <p className="mt-7">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>

          <div className="flex gap-2 text-green-600 font-semibold">
            <button>All Product </button>
            <img src={linka} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
