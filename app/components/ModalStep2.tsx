import React from "react";
import { Input } from "./Input";
import { RoundedBoxes } from "./RoundedBoxes";

const ModalStep2 = () => {
  const conditions = [
    "Thyroid imbalance",
    "Excess weight",
    "High BP",
    "Diabetes type 2",
    "PCOD",
    "Asthma",
  ];

  return (
    <div className="flex flex-col">
      <Input value="Name" />
      <Input value="Email" />
      <Input value="Enter your city" />
      <div className="text-xs">
        <p>This workshop can help you heal the following:</p>
        <div className="mt-1 overflow-x-auto pb-2">
          <div className="flex gap-2 w-max">
            {conditions.map((condition, index) => (
              <RoundedBoxes key={index} text={condition} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs">
        <p>However, it will not be sufficient for the following conditions:</p>
        <div className="mt-1 overflow-x-auto pb-2">
          <div className="flex gap-2 w-max">
            {conditions.map((condition, index) => (
              <RoundedBoxes key={index} text={condition} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStep2;
