import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] bg-gray-200 flex justify-center">
      <div className="md:p-3 w-[100%] flex flex-col items-center py-4">
        <div className="flex gap-1 items-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-xl">Lined</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            className="w-8 h-8 animate-bounce transition-transform duration-300"
          />
        </div>

        <div className="text-sm">@Copyright 2025</div>
      </div>
    </div>
  );
};

export default Footer;
