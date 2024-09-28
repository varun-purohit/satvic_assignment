import React from "react";
import calender from "../img/calender.png";
import sandClock from "../img/sandClock.png";
import globe from "../img/globe.png";
import IconText from "./IconText";
import { StaticImageData } from "next/image";

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
    <div className="shadow-md md:p-3 lg:p-4 border rounded-lg gap-1">
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
