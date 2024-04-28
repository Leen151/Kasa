import React, { useState } from "react";
import "./collapse.scss";
import Chevron from "../../assets/chevron.svg";

export const Collapse = ({title, content}) => {
  const [unfolded, setUnfolded] = useState(false);

  const toggle = () => {
    setUnfolded(!unfolded);
  };
  // console.log(Array.isArray(content))
  // console.log(typeof content === 'string')

  const collapseContent = Array.isArray(content) 
    ? content.map((item, index) => { return (<p key={index}>{item}</p>); })
    : content;

  return (
    <div className="collapse">
      <h3 className="collapse-title" onClick={toggle}>{title} <img src={Chevron} className={`chevron${unfolded ? " active" : ""}`}/></h3>
      <div className={`collapse-text${unfolded ? " active" : ""}`}>
        {collapseContent}
      </div>
    </div>
  );
};
