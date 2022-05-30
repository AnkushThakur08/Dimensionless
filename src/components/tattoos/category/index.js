import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cate1 from "../../../assets/tattoo/cate1.png";
import cate2 from "../../../assets/tattoo/cate2.png";
import cate3 from "../../../assets/tattoo/cate3.png";
import cate4 from "../../../assets/tattoo/cate4.png";
import cate5 from "../../../assets/tattoo/cate5.png";
import cate6 from "../../../assets/tattoo/cate6.png";

function Category() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-6 py-8 lg:px-36 dark:text-white dark:bg-[#202124]">
      <h2 className="text-center text-4xl font-semibold  py-8"> Categories </h2>
      <Slider className="py-10" {...settings}>
        <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate1}
              />
            </div>
            <h6 className="font-bold text-lg 2xl:text-2xl text-center">
              Bookworm
            </h6>
          </div>
        </div>
        <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate2}
              />
            </div>
            <h6 className="font-bold text-lg 2xl:text-2xl text-center">
              Spiritual
            </h6>
          </div>
        </div>
        <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate3}
              />
            </div>
            <h6 className="font-bold text-lg 2xl:text-2xl text-center">BFFs</h6>
          </div>
        </div>
        <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate4}
              />
            </div>
            <h6 className="font-bold text-lg 2xl:text-2xl text-center">
              Anime
            </h6>
          </div>
        </div>
        <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate5}
              />
            </div>
            <h6 className="font-bold text-lg 2xl:text-2xl text-center">
              Schoolcore
            </h6>
          </div>
        </div>
        <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate6}
              />
            </div>
            <h6 className="font-bold text-lg 2xl:text-2xl text-center">
              Cartoon
            </h6>
          </div>
        </div>
        {/* <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate1}
              />
            </div>
          </div>
        </div> */}

        {/* <div className="p-6">
          <div className=" rounded-xl   overflow-hidden">
            <div style={{}} className="flex justify-center">
              <img
                style={{ objectFit: "cover" }}
                className="rounded-xl w-full"
                src={cate2}
              />
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}
export default Category;
