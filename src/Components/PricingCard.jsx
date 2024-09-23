import React from "react";
import wi from "../assets/wi.jpeg";

const PricingCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-5 bg-gray-900 text-white p-6 mx-10 md:mx-56 rounded-3xl my-10">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Make Money, Risk-Free
        </h1>
        <p className="text-lg mb-8">
          You pay for fulfillment only when you make a sale
        </p>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>You sell a t-shirt</span>
            <span>$30</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>You pay for its production</span>
            <span>$12</span>
          </div>
          <div className="flex justify-between border-t border-gray-700 pt-4">
            <span className="font-medium text-green-500 text-[20px]">
              Your profit
            </span>
            <span className="text-green-500 text-[20px]">$18</span>
          </div>
        </div>

        <button className="mt-8 px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg">
          Start Selling
        </button>

        <p className="mt-4 text-sm text-gray-400">
          100% Free to use · 800+ Products · Largest print network
        </p>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-xs hidden md:flex lg:relative">
          <img
            src={wi}
            alt="Woman watering money plants"
            className="max-w-full lg:absolute lg:top-0 lg:left-20 rounded-2xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
