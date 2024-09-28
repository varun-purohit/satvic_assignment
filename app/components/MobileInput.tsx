"use client";
import { useState, useEffect, useRef } from "react";
import flag from "../img/india-flag-icon.svg";
import Image from "next/image";

export const PhoneNumberInput = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const countryOptions = [{ code: "+91", label: "India" }];

  // Toggle the dropdown visibility
  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Update the country code when an option is selected
  const handleCountrySelect = (code: string) => {
    setSelectedCountryCode(code);
    setIsDropdownOpen(false);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Ensure only numeric values for the phone number input
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "").slice(0, 12);
    setPhoneNumber(numericValue);
  };

  return (
    <div className="w-full shadow-[0px_4px_20px_0px_#2B2B2B14] py-1 rounded-md mt-4">
      <div className="relative mt-2">
        <div className="absolute top-2 left-0 flex items-center pl-3">
          <button
            onClick={toggleDropdown}
            className="h-full text-sm flex gap-1 justify-center items-center bg-transparent text-slate-700 focus:outline-none"
          >
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

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
              ref={dropdownMenuRef}
              className="min-w-[150px] absolute left-0 w-full mt-10 bg-white rounded-md z-10"
            >
              <ul>
                {countryOptions.map((option) => (
                  <li
                    key={option.code}
                    className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                    onClick={() => handleCountrySelect(option.code)}
                  >
                    {option.label} ({option.code})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <input
          type="tel"
          className=" ml-6 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm rounded-md pr-3 pl-20 py-2 transition duration-300 ease focus:outline-none"
          placeholder="9999999999"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={12}
        />
      </div>
    </div>
  );
};
