import React from "react";
import calender from "../img/calender.png";
import sandClock from "../img/sandClock.png";
import globe from "../img/globe.png";
import IconText from "./IconText";
import { StaticImageData } from "next/legacy/image";

interface SmallCardsProps {
  icon: "calendar" | "clock" | "globe";
  text: string;
  para: string;
}

const iconMap: Record<SmallCardsProps["icon"], StaticImageData> = {
  calendar: calender,
  clock: sandClock,
  globe: globe,
};

const SmallCards = ({ icon, text, para }: SmallCardsProps) => {
  const iconSrc = iconMap[icon];

  return (
    <div className="shadow-[0px_4px_20px_0px_rgba(43,43,43,0.08)] md:py-4 md:px-3 lg:py-5 lg:px-4 border rounded-lg gap-1">
      <IconText
        iconSrc={iconSrc}
        text={text}
        alt={icon}
        para={para}
        width={32}
        height={32}
      />
    </div>
  );
};

export default SmallCards;
