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
import Image, { StaticImageData } from "next/legacy/image";
import { ButtonSmallScreen } from "../components/ButtonSmallScreen";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Recommendation from "../components/Recommendation";

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
  instructor?: string;
  instructorOrg?: string;
  startsIn?: boolean;
  recommendation?: string;
}

interface ModalData {
  title: string;
  startDate: string;
  duration: string;
  language: string;
}

const WorkshopCard = ({
  title,
  description,
  startDate,
  duration,
  language,
  price,
  participants,
  imageUrl,
  ratings,
  reviews,
  instructor,
  instructorDesc,
  instructorOrg,
  startsIn,
  recommendation = "",
}: WorkshopCardProps) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const openModal = (data: ModalData) => {
    setModal(true);
    setModalData(data);
  };
  const closeModal = () => {
    setModal(false);
    setModalData(null);
  };
  return (
    <div className="border-box transition-all duration-300 bg-white font-nunito rounded-xl shadow-md flex flex-col md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.8fr_1.2fr] md:gap-6 w-full sm:w-[80%] md:w-full mx-auto md:px-4 lg:px-4 md:pb-4 md:pt-6  my-4">
      <div className="relative w-full aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl md:rounded-md w-full h-full"
        />

        {startsIn && (
          <div className="absolute top-4 left-4 flex flex-col bg-white px-2 py-1 rounded-md text-[10px]">
            Starts in: <span className="text-sm font-semibold">2 DAYS</span>
          </div>
        )}

        <button className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-white/30 p-2 rounded-full">
          <IoIosArrowBack size={20} />
        </button>
        <button className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-white/30 p-2 rounded-full">
          <IoIosArrowForward size={20} />
        </button>

        <div className="absolute bottom-6 left-4 text-white font-bold flex flex-col justify-start ">
          <div className="text-base">{instructor}</div>
          <div className="text-xs flex flex-col justify-start">
            <span>{instructorDesc}</span>
            <span>{instructorOrg}</span>
          </div>
        </div>

        <div className="absolute bottom-4 bg-white/20 rounded-full p-1 left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>

      <div className="px-4 md:pr-2 md:pl-0 flex flex-col gap-2 md:gap-3 pt-4 md:py-0">
        <div className="flex justify-between items-center">
          <h4 className="text-lg sm:text-2xl md:text-xl lg:text-2xl font-semibold">
            {title}
          </h4>
          {recommendation && (
            <div className="hidden md:block">
              <Recommendation text={recommendation} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Rating rating={ratings} />
          <span className="text-[#818184] font-semibold text-sm">
            {reviews} reviews
          </span>
        </div>
        <div className="hidden md:block">
          <p className="text-[#363636] text-base md:text-sm xl:text-base md:pr-4 lg:pr-2">
            {description}
          </p>
          <div className="flex gap-3 my-4">
            <SmallCards icon="calendar" text={startDate} para="StartDate" />
            <SmallCards icon="clock" text={duration} para="Duration" />
            <SmallCards icon="globe" text={language} para="Language" />
          </div>
          <h5 className="text-lg md:text-base lg:text-xl font-bold md:mb-2 lg:mb-4 text-[#363636]">
            ₹{price}
          </h5>
          <div className="flex items-center gap-4 rounded-xl">
            <Button
              text="Join the challenge"
              variant="primary"
              onClick={() =>
                openModal({ title, startDate, duration, language })
              }
            />
            <Button text="View Details" variant="secondary" />
          </div>
          <div className="text-sm text-gray-600 mt-4 flex items-center gap-2">
            <Image src={twoPerson} alt={title} width={20} height={20} />
            <span className="text-[#337ab7] text-base">
              {participants} have already joined
            </span>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-4 mt-2">
          <div className="flex items-center justify-around shadow-[0px_4px_20px_0px_#2B2B2B14] px-2 py-3 rounded-lg border border-slate-200 gap-3 text-sm sm:text-base">
            <div className="flex gap-2 items-center">
              <Image src={calender} alt="startDate" width={18} height={18} />
              {startDate}
            </div>
            <div className="h-6 border-l border-slate-400"></div>
            <div className="flex gap-2 items-center">
              <Image src={sandClock} alt="sandClock" width={18} height={18} />
              {duration}
            </div>
            <div className="h-6 border-l border-slate-400"></div>
            <div className="flex gap-2 items-center">
              <Image src={globe} alt="globe" width={18} height={18} />
              {language}
            </div>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">{description}</p>
          <div className="-mx-4 px-2 py-2 sm:py-4 rounded-b-xl shadow-[0px_-4px_20px_0px_#2B2B2B0F] w-[calc(100%+32px)] bg-white flex items-center justify-around">
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
      {modal && modalData && <Modal close={closeModal} {...modalData} />}
    </div>
  );
};
export default WorkshopCard;
