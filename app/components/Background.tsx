import Image from "next/legacy/image";
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
            alt="Background image for smaller screens"
            className=""
          />
        </div>

        <div className="hidden md:block">
          <Image src={bgImage} alt="Background image for larger screens" />
        </div>
      </div>

      <div className="w-full -mt-[6%] md:-mt-[1.75%]">
        <Image src={bgTear} alt="Tear overlay" />
      </div>
    </div>
  );
};

export default Background;
