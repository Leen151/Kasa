import React, { useState } from 'react'
import './slider.scss'
import ArrowForward from '../../assets/chevron-right-solid.svg'
import ArrowBack from '../../assets/chevron-left-solid.svg'


export const Slider = ({ pictures }) => {
  const picturesLength = pictures.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = function () {
    setCurrentSlide(currentSlide === 0 ? picturesLength - 1 : currentSlide - 1);
  };

  const nextSlide = function () {
    setCurrentSlide(currentSlide === picturesLength - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider-container">
      {picturesLength > 1 && (
        <>
          <img
            className="arrow-back" src={ArrowBack} alt="navigation: image précédente"
            onClick={previousSlide}
          />
          <img className="slide" src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
          <div className="slide-number">
            {" "}
            {currentSlide + 1}/{picturesLength}
          </div>
          <img
            className="arrow-forward" src={ArrowForward} alt="navigation: image suivante"
            onClick={nextSlide}
          />
        </>
      )}
      {picturesLength === 1 && (
        <img className="slide" src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      )}
    </div>
  );
};