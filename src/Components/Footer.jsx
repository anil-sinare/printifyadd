import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-400 text-center">
      <div className="flex items-center justify-center gap-6 pt-5 text-xs pb-3 ">
        <p className="hover:text-green-600"> Intellectual Property Policy</p>
        <p className="hover:text-green-600"> Terms of Service</p>
        <p className="hover:text-green-600"> Privacy Policy</p>
        <p className="hover:text-green-600"> Security</p>
      </div>
      <div className="text-sm font-medium pb-5">
        <p>© 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
