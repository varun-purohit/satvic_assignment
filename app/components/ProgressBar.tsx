interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className=" bg-gray-200 w-full max-w-[45%] rounded-full h-1 mb-2">
      <div
        className={`${progress == 0 ? "" : "bg-sky-600"}  h-1 rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
