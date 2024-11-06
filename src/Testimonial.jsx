import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";

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

const Testimonial = () => {
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
    <>
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl text-center text-gray-900 dark:text-white">
          <span className="text-4xl mb-9">HEAR FROM OUR CLIENTS</span> <br />
        </h1>
        <div className="card mt-20">
          <Slider {...settings}>
            <div className="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <h1 className="text-2xl mb-6">KATIE MAGGIE</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  saepe, voluptates deleniti mollitia harum doloremque dolore
                  esse. Nesciunt architecto sit accusantium, autem harum, ad,
                  placeat iusto mollitia minus laborum sed!
                </p>
                <StarRating />
              </div>
            </div>
            <div className="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <h1 className="text-2xl mb-6">MELODY JONES</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  saepe, voluptates deleniti mollitia harum doloremque dolore
                  esse. Nesciunt architecto sit accusantium, autem harum, ad,
                  placeat iusto mollitia minus laborum sed!
                </p>
                <StarRating />
              </div>
            </div>
            <div className="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <h1 className="text-2xl mb-6">JENNIFER BILLY</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  saepe, voluptates deleniti mollitia harum doloremque dolore
                  esse. Nesciunt architecto sit accusantium, autem harum, ad,
                  placeat iusto mollitia minus laborum sed!
                </p>
                <StarRating />
              </div>
            </div>
            <div className="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <h1 className="text-2xl mb-6">AGATHA JONES</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  saepe, voluptates deleniti mollitia harum doloremque dolore
                  esse. Nesciunt architecto sit accusantium, autem harum, ad,
                  placeat iusto mollitia minus laborum sed!
                </p>
                <StarRating />
              </div>
            </div>
            <div className="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <h1 className="text-2xl mb-6">LILIAN WILLIAMS</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  saepe, voluptates deleniti mollitia harum doloremque dolore
                  esse. Nesciunt architecto sit accusantium, autem harum, ad,
                  placeat iusto mollitia minus laborum sed!
                </p>
                <StarRating />
              </div>
            </div>
            <div className="block max-w-[24rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <h1 className="text-2xl mb-6">CELINE JACKSON</h1>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  saepe, voluptates deleniti mollitia harum doloremque dolore
                  esse. Nesciunt architecto sit accusantium, autem harum, ad,
                  placeat iusto mollitia minus laborum sed!
                </p>
                <StarRating />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
