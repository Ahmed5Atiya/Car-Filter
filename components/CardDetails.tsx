"use client";

import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utlis";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

export interface CardDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

function CardDetails({ isOpen, closeModel, car }: CardDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black fixed inset-0 bg-opacity-30" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center text-center p-4">
              <Transition.Child
                as={Fragment}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-track-light  relative p-6 bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-xl  text-left shadow-xl transition-all flex flex-col gap-4">
                  <button
                    type="button"
                    onClick={closeModel}
                    className=" top-2 right-2 p-2 z-10 absolute bg-red-600 text-white"
                  >
                    <Image
                      src="/close.svg"
                      alt="closeModel"
                      width={20}
                      height={20}
                      className="object-contain text-white"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="w-full relative h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car model"
                        priority
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 w-full h-24 relative bg-primary-blue-100 rounded-lg p-2">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car model"
                          priority
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 relative bg-primary-blue-100 rounded-lg p-2">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car model"
                          priority
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 relative bg-primary-blue-100 rounded-lg p-2">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car model"
                          priority
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="uppercase font-semibold">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex w-full justify-between gap-4 text-right bg-gray-50 p-3"
                          key={key}
                        >
                          <h4 className="text-gray-700 uppercase">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-green-600">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CardDetails;
