import React from "react";
import Image from "next/image";
import bgImage from "../img/image 18.jpg";
import bgImage2 from "../img/image19.jpg";
import bgTear from "../img/Vector.png";

const Background = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <div className="md:hidden">
          <Image
            src={bgImage2}
            layout="responsive"
            width={1920}
            height={1080}
            alt="Background image for smaller screens"
          />
        </div>

        <div className="hidden md:block">
          <Image
            src={bgImage}
            layout="responsive"
            width={1920}
            height={1080}
            alt="Background image for larger screens"
          />
        </div>
      </div>

      <div className="w-full -mt-[1.75%]">
        <Image
          src={bgTear}
          layout="responsive"
          width={1920}
          height={200}
          alt="Tear overlay"
        />
      </div>
    </div>
  );
};

export default Background;
