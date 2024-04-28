import React from "react";
import "./rating.scss";
import StarEmpty from "../../assets/star-solid-empty.svg";
import StarFull from "../../assets/star-solid-full.svg";

export const Rating = ({rating}) => {

  const rate = [];
  for (let i = 0; i < 5; i++) {
    rate.push(i < rating ? <img key={i} src={StarFull} alt="Star Full" className="star"/> : <img key={i} src={StarEmpty} alt="Star Empty" className="star"/>);
  }

  return (
    <div className="rating">
      {rate}
    </div>
  );
};
