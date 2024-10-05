"use client";
import flag from "../img/india-flag-icon.svg";
import Image from "next/legacy/image";

export const PhoneNumberInput = () => {
  const selectedCountryCode = "+91";

  return (
    <div className="w-full shadow-[0px_4px_20px_0px_#2B2B2B14] py-1 rounded-xl mt-2 md:mt-4">
      <div className="relative mt-2">
        <div className="absolute top-1 left-0 flex items-center pl-3">
          <button className="h-full text-sm flex gap-1 justify-center items-center bg-transparent text-slate-700 focus:outline-none">
            <span>
              <Image src={flag} height={24} width={24} alt="flag" />
            </span>
            <span>{selectedCountryCode}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div className="h-6 border-l border-slate-400 ml-2 "></div>
          <div className="min-w-[150px] absolute left-0 w-full mt-10 bg-white rounded-md z-10"></div>
        </div>

        <input
          type="tel"
          className=" ml-6 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm rounded-xl pr-3 pl-20 py-2 focus:outline-none"
          placeholder="9999999999"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={12}
        />
      </div>
    </div>
  );
};
