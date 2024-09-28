"use client";
import Rating from "../components/Rating";
import SmallCards from "../components/SmallCards";
import twoPerson from "../img/two_person.png";
import Button from "../components/Button";
import Modal from "../components/Modal";
import calender from "../img/calender.png";
import sandClock from "../img/sandClock.png";
import globe from "../img/globe.png";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ButtonSmallScreen } from "../components/ButtonSmallScreen";

interface WorkshopCardProps {
  title: string;
  description: string;
  instructorDesc?: string;
  startDate: string;
  duration: string;
  language: string;
  price: number;
  participants: number;
  imageUrl: StaticImageData;
  ratings: string;
  reviews: number;
}

const WorkshopCard = ({
  title,
  description,
  instructorDesc,
  startDate,
  duration,
  language,
  price,
  participants,
  imageUrl,
  ratings,
  reviews,
}: WorkshopCardProps) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState<WorkshopCardProps | null>(null);
  const openModal = (data: WorkshopCardProps) => {
    setModal(true);
    setModalData(data);
  };
  const closeModal = () => {
    setModal(false);
    setModalData(null);
  };
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col gap-6 md:grid md:grid-cols-[35%_65%] lg:grid-cols-[40%_60%] md:gap-4 lg:gap-6 w-[90%] sm:w-[80%] md:w-full mx-auto md:px-3 lg:px-4 md:py-4 lg:py-6 my-4">
      <div className="rounded-t-xl md:rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          objectFit="cover"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Description part */}
      <div className="relative px-4 md:px-0 gap-6 flex-1 flex flex-col lg:gap-1 md:gap-3">
        <h4 className="text-3xl md:text-2xl lg:text-4xl font-semibold md:font-medium md:tracking-wide">
          {title}
        </h4>
        <div className="flex items-center gap-2">
          <Rating rating={ratings} />
          <span className="text-[#818184] font-semibold text-sm">
            {reviews} reviews
          </span>
        </div>
        <div className="hidden md:block">
          <p className=" text-gray-500 text-xl md:my-1 md:tracking-wide md:text-sm xl:text-base md:pr-4 lg:pr-2">
            {description}
          </p>
          <div className="flex gap-3 mb-2">
            <SmallCards icon="calendar" text={startDate} para="StartDate" />
            <SmallCards icon="clock" text={duration} para="Duration" />
            <SmallCards icon="globe" text={language} para="Language" />
          </div>
          <h5 className="text-lg md:text-base lg:text-xl font-bold mb-2 text-gray-600">
            ₹{price}
          </h5>
          <div className="flex items-center gap-4">
            <Button
              text="Join the challenge"
              variant="primary"
              onClick={() =>
                openModal({ title, startDate, duration, language })
              }
            />
            <Button text="View Details" variant="secondary" />
          </div>
          <div className="text-sm text-gray-600 mt-2 flex items-center gap-2 ">
            <Image src={twoPerson} alt={title} />{" "}
            <span className="text-sky-600">
              {participants} have already joined
            </span>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-4">
          <div className="flex items-center justify-around shadow-md p-2 rounded-lg border gap-3 mb-6 text-xl">
            <div className="flex gap-2 items-center">
              <Image src={calender} alt="startDate" width={20} height={20} />
              {startDate}
            </div>
            <div className="h-6 border-l border-slate-400 ml-2 "></div>
            <div className="flex gap-2 items-center">
              {" "}
              <Image src={sandClock} alt="sandClock" width={20} height={20} />
              {duration}
            </div>
            <div className="h-6 border-l border-slate-400 ml-2 "></div>
            <div className="flex gap-2 items-center">
              {" "}
              <Image src={globe} alt="globe" width={20} height={20} />
              {language}
            </div>
          </div>
          <p className=" text-gray-500 text-xl md:my-1 md:tracking-wide md:text-sm xl:text-base md:pr-2">
            {description}
          </p>
          <div className="-mx-4 px-4 py-6 rounded-b-lg shadow-inner w-[calc(100%+32px)] bg-white flex items-center justify-around">
            <ButtonSmallScreen text="View Details" variant="secondarySmall" />
            <ButtonSmallScreen
              text="Join the challenge"
              variant="primarySmall"
              onClick={() =>
                openModal({ title, startDate, duration, language })
              }
            />
          </div>
        </div>
      </div>
      {modal && <Modal close={closeModal} {...modalData} />}
    </div>
  );
};
export default WorkshopCard;
