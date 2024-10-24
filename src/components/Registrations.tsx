"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MonthlyBarChart from "./BarCharts";
import leftArrow from "@/components/icons/left-arrow.svg";
import rightArrow from "@/components/icons/right-arrow.svg";
import slide1 from "@/components/icons/Carousel/slide.svg";
import slide2 from "@/components/icons/Carousel/slide1.svg";
import slide3 from "@/components/icons/Carousel/slide2.svg";

type Slide = {
  image: StaticImageData;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    image: slide1,
    title: "Latest News & Updates",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    image: slide2,
    title: "Upcoming Events",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    image: slide3,
    title: "Community Growth",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
];

const Registrations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex flex-col mt-4 sm:w-full sm:px-5 sm:gap-3 sm:h-[650px] sm:border-5 sm:border-red-800">
      <h1 className="font-inter font-normal text-[17px] leading-3 mb-4 dark:text-white">
        Event Registrations per month
      </h1>
      <div className="w-[75.753vw] h-[320px] flex flex-row items-center gap-3 sm:w-full sm:flex-col sm:h-[625px] sm:px-5 sm:gap-[21px]">
        <div className="w-[39.5vw] h-[320px] rounded-[5px] border p-10 gap-2 sm:w-[88.27vw] sm:h-[260px] sm:py-2.5 sm:pr-2 sm:pl-0 sm:rounded-sm dark:bg-[#484554]">
          <MonthlyBarChart />
        </div>
        <div className="relative w-[35.42vw] h-[320px] rounded-[5px] sm:w-[88.27vw] sm:h-[320px] sm:gap-2">
          {/* Slide Image */}
          <div className="relative w-[35.42vw] h-[320px] sm:w-full sm:rounded-md sm:h-[320px]">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              className="object-cover"
            />
          </div>
          {/* Slide Content */}
          <div className="absolute bottom-0 left-0 p-4 flex flex-col h-[115px] gap-2 bg-custom-gradient text-white sm:bottom-0  sm:w-full sm:h-[131px]">
            <h2 className="font-inter font-semibold text-xs text-white">
              {slides[currentIndex].title}
            </h2>
            <p className="font-inter font-normal text-xs text-white">
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Next and Previous Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 hover:bg-white/50 p-2 rounded-full"
          >
            <Image src={leftArrow} alt="Previous" width={24} height={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2  hover:bg-white/50 p-2 rounded-full"
          >
            <Image src={rightArrow} alt="Next" width={24} height={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-3 rounded-sm ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
