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
  description: string;
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
      className={`fixed inset-0 z-50 flex items-end md:items-center justify-center ${
        step === 1
          ? "md:bg-black md:bg-opacity-80"
          : "bg-white md:bg-black md:bg-opacity-80"
      }`}
    >
      <div
        className={`bg-white relative p-6 rounded-t-lg md:rounded-lg w-full md:max-w-md ${
          step === 1 ? "h-1/2 md:h-[85%]" : "h-full md:h-[85%]"
        } overflow-auto transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center gap-2">
          <ProgressBar progress={100} />
          <ProgressBar progress={step === 2 ? 100 : 0} />
        </div>
        <h2>{title}</h2>
        <div className="flex text-sm gap-2 mt-4 text-slate-400">
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
        <div className="border rounded-md my-4">
          <p className="p-2">Session timings: 8 - 8:45 am (IST)</p>
          <p className="bg-blue-100 flex items-center gap-2 text-sm px-2 py-1 text-sky-600">
            <span>
              <GoDeviceCameraVideo />
            </span>
            Recording Available for 24 hours
          </p>
        </div>
        <hr />
        {step === 1 ? <ModalStep1 /> : <ModalStep2 />}
        <div className="p-4 shadow-inner absolute bottom-0 left-0 w-full z-100">
          <button
            onClick={handleClick}
            className="w-full p-2 bg-sky-600 text-white rounded-md font-semibold"
          >
            {step === 1 ? "Continue" : "Continue to payment"}
          </button>
        </div>
        <button
          className="absolute top-[10px] right-4 text-3xl"
          onClick={close}
        >
          <IoIosClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
