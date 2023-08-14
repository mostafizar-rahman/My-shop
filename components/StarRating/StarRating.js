import React from "react";
import { FaStarHalf, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({ star, up }) => {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <li key={index}>
        {star >= index + 1 ? (
           <FaStar className="text-orange-500 cursor-pointer" /> 
        ) : star >= number ? (
          <FaStarHalf className="text-orange-500 cursor-pointer" />
        ) : (
          <AiOutlineStar className="text-orange-500 cursor-pointer" />
        )}
      </li>
    );
  });
  return <ul className="flex ">{starRating}</ul>;
};

export default StarRating;
