import { FaStar } from "react-icons/fa";

interface ratingProp {
  rating: string;
}

const Rating = ({ rating }: ratingProp) => {
  return (
    <div className="bg-green-500 text-white shadow-sm rounded-md px-1 py-[0.5px] flex items-center gap-1 text-sm">
      {rating}{" "}
      <span>
        <FaStar />
      </span>
    </div>
  );
};
export default Rating;
