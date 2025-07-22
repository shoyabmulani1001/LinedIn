import React from "react";

const Card = (props) => {
  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-200 ${
        props.padding ? "p-5" : "p-0"
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
