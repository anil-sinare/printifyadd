import React from "react";

function Higher() {
  return (
    <div className="App mx-10 sm:mx-20">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Box
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolUbsGrCxC6b214Ew4w-Xgve4SiJQlw0_JBCihOFQCegGn6IrdUs8-q1xLrEDs9g07IE&usqp=CAU"
            title="Higher Profits"
            description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
          />
          <Box
            imgSrc="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
            title="Robust Scaling
"
            description="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
          />
          <Box
            imgSrc="https://printify.com/pfh/assets/legacy/best-selection.svg"
            title="Best Selection"
            description="With 900+ products and top quality brands, you can choose the best products for your business."
          />
        </div>
      </div>
    </div>
  );
}

const Box = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6  rounded-lg">
      <div className="w-24 h-24 mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-600 text-start">{description}</p>
    </div>
  );
};

export default Higher;
