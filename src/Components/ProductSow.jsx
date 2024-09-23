import React from "react";

const ProductShow = () => {
  return (
    <div className="flex px-10 sm:px-20 flex-col bg-gray-50 pb-36 md:flex-row justify-around items-center py-8 space-y-6 md:space-y-0 md:space-x-4">
      <div className=" p-6  flex-1">
        <img
          className="w-28 justify-center"
          src="https://printify.com/pfh/assets/legacy/custom-products.png"
          alt="Create"
        />
        <h2 className="text-xl font-bold text-green-600 mb-2">CREATE</h2>
        <p className="text-2xl font-semibold mb-2">custom products</p>
        <p>
          Easily add your designs to a wide range of products using our free
          tools.
        </p>
      </div>

      <div className="  p-6 text-start flex-1">
        <img
          src="https://printify.com/pfh/assets/legacy/your-products.png"
          alt="Sell"
          className="w-28 justify-center "
        />
        <h2 className="text-xl font-bold text-green-600 mb-2">SELL</h2>
        <p className="text-2xl font-semibold mb-2">on your terms</p>
        <p>You choose the products, sale price, and where to sell.</p>
      </div>

      <div className="  p-6 text-start flex-1">
        <img
          src="https://printify.com/pfh/assets/legacy/fullfillment.png"
          className="w-28 justify-center "
        />
        <h2 className="text-xl font-bold text-green-600 mb-2">WE HANDLE</h2>
        <p className="text-2xl font-semibold mb-2">fulfillment</p>
        <p>
          Once an order is placed, we automatically handle all the printing and
          delivery logistics.
        </p>
      </div>
    </div>
  );
};

export default ProductShow;
