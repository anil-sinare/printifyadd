import React from "react";
import logo_1 from "../assets/printify-logo.webp";
import facebook from "../assets/facebook-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";
import x from "../assets/X-Logo-Green.svg";
import youtube from "../assets/youtube-icon.svg";
import tiktok from "../assets/Tiktok-1.svg";
import reddit from "../assets/reddit-icon.svg";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row  justify-between mx-20 mb-11 mt-5">
      <div>
        <img className="w-36" src={logo_1} />
      </div>

      <div className="flex  gap-4">
        <img className="w-8" src={facebook} alt="" />
        <img className="w-8" src={instagram} alt="" />
        <img className="w-8" src={linkedin} alt="" />
        <img className="w-8" src={x} alt="" />
        <img className="w-8" src={youtube} alt="" />
        <img className="w-8" src={tiktok} alt="" />
        <img className="w-8" src={reddit} alt="" />
      </div>
    </div>
  );
};

export default Contact;
