import React from "react";
import video from "../assets/vi.mp4";
const Create = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-5">
      <div className="flex flex-col mx-10 md:p-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold items-center justify-center">
            Create and sell <br />
            custom products
          </h1>
        </div>
        <div className="mt-5 gap-4 ">
          <p className=" text-gray-900 font-medium">
            {" "}
            <i class="fa-solid fa-arrow-left"> </i> 100% Free to use{" "}
          </p>
          <p className=" text-gray-900 font-medium">
            <i class="fa-solid fa-arrow-left"> </i> 900+ High-Quality Products{" "}
          </p>
          <p className=" text-gray-900 font-medium">
            <i class="fa-solid fa-arrow-left"> </i> Largest global print network{" "}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-x-4 m-4 items-center  mt-12">
          <a
            href="/signup"
            className=" border-2 border-green-300 bg-green-600  text-white px-[30px] py-[9px] rounded-md text-sm font-medium hover:bg-green-500"
          >
            Start for free
          </a>
          <a
            href="/login"
            className="  border  px-[30px] py-[8px] text-gray-700 hover:text-green-600   rounded-md text-sm font-medium "
          >
            <i class="fa-solid fa-circle-play"></i> How it Works
          </a>
        </div>
        <p className="font-medium text-green-600">
          Trusted by over 8M sellers around the world
        </p>
      </div>

      <div className="flex items-center justify-center">
        <video className="w-full h-4/5" autoPlay muted loop playsInline>
          <source src={video} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Create;
