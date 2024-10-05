import { FaHeart } from "react-icons/fa";

interface recommendationProp {
  text: string;
}
const Recommendation = ({ text }: recommendationProp) => {
  return (
    <div className="bg-[#337AB71A] text-[#337AB7] shadow-sm rounded-md px-2 py-1 flex items-center gap-1 md:text-xs lg:text-sm">
      <span>
        <FaHeart />
      </span>
      {text}
    </div>
  );
};
export default Recommendation;
