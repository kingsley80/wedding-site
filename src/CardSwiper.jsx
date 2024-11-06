import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import y1 from "./assets/y1.jpg";
import y2 from "./assets/y2.jpg";
import y3 from "./assets/y3.jpg";
import C2 from "./assets/C2.jpg";
import y5 from "./assets/y5.jpg";
import y6 from "./assets/y6.jpg";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const CardSwiper = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container px-6 py-12 mx-auto">
      <div className="card text-center">
        <Slider {...settings}>
          <div class="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img class="rounded-t-lg h-96 w-96" src={y1} alt="" />
            </div>
            <div class="p-2">
              <p class="text-base font-bold text-2xl">Madagascar</p>
            </div>
          </div>
          <div class="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img class="rounded-t-lg h-96 w-96" src={y2} alt="" />
            </div>
            <div class="p-2">
              <p class="text-base font-bold text-2xl">California</p>
            </div>
          </div>
          <div class="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img class="rounded-t-lg h-96 w-96" src={y3} alt="" />
            </div>
            <div class="p-2">
              <p class="text-base font-bold text-2xl">New Jersey</p>
            </div>
          </div>
          <div class="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img class="rounded-t-lg h-96 w-96" src={C2} alt="" />
            </div>
            <div class="p-2">
              <p class="text-base font-bold text-2xl">Ice Land</p>
            </div>
          </div>
          <div class="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img class="rounded-t-lg h-96 w-96" src={y5} alt="" />
            </div>
            <div class="p-2">
              <p class="text-base font-bold text-2xl">London</p>
            </div>
          </div>
          <div class="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img class="rounded-t-lg h-96 w-96" src={y6} alt="" />
            </div>
            <div class="p-2">
              <h1 class="text-base font-bold text-2xl">Disney Land</h1>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CardSwiper;
