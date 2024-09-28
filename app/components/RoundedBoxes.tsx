interface roundedBoxesProp {
  text: string;
}

export const RoundedBoxes = ({ text }: roundedBoxesProp) => {
  return (
    <span className="p-2 border bg-gray-50 rounded-xl text-gray-500 text-[10px]">
      {text}
    </span>
  );
};
