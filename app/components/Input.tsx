interface inputProps {
  value: string;
}

export const Input = ({ value }: inputProps) => {
  return (
    <div className="relative my-2 shadow-[0px_4px_20px_0px_#2B2B2B14] rounded-md">
      <input
        type="text"
        id={value}
        className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor={value}
        className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {value}
      </label>
    </div>
  );
};
