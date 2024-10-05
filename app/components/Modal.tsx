"use client";
import React, { useState } from "react";
import calender from "../img/calender.png";
import sandClock from "../img/sandClock.png";
import globe from "../img/globe.png";
import IconText from "./IconText";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { ProgressBar } from "./ProgressBar";
import { ModalStep1 } from "./ModalStep1";
import ModalStep2 from "./ModalStep2";

interface ModalProps {
  close: () => void;
  title: string;
  startDate: string;
  duration: string;
  language: string;
}

const Modal = ({ close, title, startDate, duration, language }: ModalProps) => {
  const [step, setStep] = useState(1);

  function handleClick() {
    if (step === 1) {
      setStep(2);
    }
  }

  const iconTextData = [
    {
      iconSrc: calender,
      text: startDate,
      alt: "calendar",
    },
    {
      iconSrc: sandClock,
      text: duration,
      alt: "duration",
    },
    {
      iconSrc: globe,
      text: language,
      alt: "language",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end md:items-center justify-center transition-all duration-300 ease-in-out ${
        step === 1
          ? "bg-black bg-opacity-80"
          : "bg-white md:bg-black md:bg-opacity-80"
      }`}
    >
      <div
        className={`bg-[#f8f8f8] flex flex-col rounded-t-2xl md:rounded-xl w-full md:max-w-md relative transition-all duration-300 ease-in-out
           ${step === 1 ? "h-[60%] md:h-[80%]" : "h-full md:h-[85%]"}`}
      >
        <div className="flex-grow overflow-auto pt-6 px-7">
          <div className="flex items-center gap-2 mb-2">
            <ProgressBar progress={100} />
            <ProgressBar progress={step === 2 ? 100 : 0} />
          </div>
          <h2 className="text-base text-[#363636] font-semibold mb-2 ">
            {title}
          </h2>
          <div className="flex text-sm gap-2 mb-4 text-slate-400">
            {iconTextData.map((item, index) => (
              <IconText
                key={index}
                iconSrc={item.iconSrc}
                text={item.text}
                alt={item.alt}
                width={20}
                height={20}
              />
            ))}
          </div>
          <div className="border rounded-md mb-4 shadow-[0px_4px_20px_0px_#2B2B2B14]">
            <p className="pt-2 pb-1 px-3 text-sm font-semibold">
              Session timings: 8 - 8:45 am (IST)
            </p>
            <p className="bg-[#337ab71a] flex gap-2.5 items-center text-xs px-3 py-1.5 text-[#337ab7]">
              <span>
                <GoDeviceCameraVideo />
              </span>
              Recording Available for 24 hours
            </p>
          </div>
          <hr className="mb-4" />
          {step === 1 ? <ModalStep1 /> : <ModalStep2 />}
        </div>
        <div className="px-12 py-7 mt-auto bg-white rounded-b-md shadow-[0px_-4px_20px_0px_#2B2B2B0F] w-full md:rounded-b-lg lg:rounded-b-xl">
          <button
            onClick={handleClick}
            className="w-full p-2 bg-[#337ab7] text-base font-bold text-white rounded-xl"
          >
            {step === 1 ? "Continue" : "Continue to payment"}
          </button>
        </div>
        <button className="absolute top-2.5 right-4 text-3xl" onClick={close}>
          <IoIosClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
