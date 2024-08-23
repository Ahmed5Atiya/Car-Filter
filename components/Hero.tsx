"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handelScroll = () => {};
  return (
    <div className="hero">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -Quickly and easily/
        </h1>
        <p className="hero__subtitle">
          Streamine your car rental experience with our effortiess booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          handelClick={handelScroll}
          containerStyle="bg-primary-blue text-white px-5 py-4 rounded-full mt-10 text-white"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            fill
            className="object-contain"
            alt="Car Image"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
