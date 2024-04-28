import React from "react";
import "./banner.scss";
import HomeBanner from "../../assets/banner_home.webp";
import AboutBanner from "../../assets/banner_about.webp";

export const Banner = ({pageTag}) => {
  let src = "";
  let textBanner = "";
  let className = "";

  if(pageTag==="Home"){
    src = HomeBanner;
    textBanner = "Chez vous, partout et ailleurs";
    className = "banner-home";
  }
  else if(pageTag==="About"){
    src = AboutBanner;
    className = "banner-about";
  }

  return (
    <div className={className}>
      <img src={src} alt=""/>
      {textBanner && <p>{textBanner}</p>}
    </div>
  );
};
