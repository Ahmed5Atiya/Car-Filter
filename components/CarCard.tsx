"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utlis";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import CardDetails from "./CardDetails";
function CarCard({ car }: CarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h3 className="car-card__content-title">
          {make} {model}
        </h3>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$ </span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 object-contain my-3">
        <Image
          src={generateCarImageUrl(car)}
          alt={model}
          priority
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="car-card__icon-container">
          <div className="car-card__icon mt-4">
            <Image src="/steering-wheel.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon mt-4">
            <Image src="/tire.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon mt-4">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container w-full">
          <CustomButton
            title="View More"
            containerStyle="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white font-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handelClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>
      <CardDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
