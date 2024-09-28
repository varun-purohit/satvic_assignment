import { BsGlobe } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoPersonCircle } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Icon = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer ">
      <GoSearch />
      <BsGlobe />
      <IoPersonCircle className="text-xl" />
      <HiOutlineShoppingBag className="text-xl" />
    </div>
  );
};
export default Icon;
