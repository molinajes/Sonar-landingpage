import "./App.css";
import React, { Component } from "react";
import Slider from "react-slick";
import stanfordPartner from "./assets/stanfordPartner.svg";
import plugpartner from "./assets/plugpartner.svg";
import venturePartner from "./assets/venturePartner.svg";
import michinganPartner from "./assets/michinganPartner.svg";

function Partner() {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <p className="partnerHeading">Partners</p>
      </div>
      <div className="partnerSlider">
        <Slider {...settings}>
          <div className="partnerImg">
            <img src={stanfordPartner} height="96" width="228px" />
          </div>
          <div className="partnerImg">
            <img src={plugpartner} height="96" width="228px" />
          </div>
          <div className="partnerImg">
            <img src={venturePartner} height="96" width="228px" />
          </div>
          <div className="partnerImg">
            <img src={michinganPartner} height="96" width="228px" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partner;
