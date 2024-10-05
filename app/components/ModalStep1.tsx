import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PhoneNumberInput } from "./MobileInput";

export const ModalStep1 = () => {
  return (
    <>
      <div className="my-1">
        <p className=" text-base md:text-2xl font-semibold">
          Your mobile number
        </p>
        <PhoneNumberInput />
      </div>
      <p className="text-gray-500 flex items-center gap-1 text-xs">
        <AiOutlineExclamationCircle /> You can access the workshop using this
        number
      </p>
    </>
  );
};
