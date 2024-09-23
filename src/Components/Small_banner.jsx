import React from "react";

const Small_banner = () => {
  return (
    <div className="mx-10  sm:mx-30 mt-10 mb-10 gap-5 border p-10 bg-green-100 rounded-3xl flex flex-col sm:flex-row justify-between  items-center">
      <p className=" text-xl md:text-2xl font-semibold text-green-900 sm:w-[400px]">
        {" "}
        Are you a large business looking for custom solutions?
      </p>
      <div>
        <button className=" px-5 py-2 border bg-white   text-sm">
          {" "}
          Talk to sales{" "}
        </button>
      </div>
    </div>
  );
};

export default Small_banner;
