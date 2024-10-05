"use client";
interface ButtonSmallScreen {
  text: string;
  variant?: "primarySmall" | "secondarySmall";
  onClick?: () => void;
}

export const ButtonSmallScreen = ({
  text,
  variant = "primarySmall",
  onClick,
}: ButtonSmallScreen) => {
  const baseClasses =
    "px-4 py-1 sm:py-2 rounded-xl transition-colors text-sm sm:text-base flex items-center font-bold";
  const variantClasses =
    variant === "primarySmall"
      ? "bg-[#337ab7] text-white hover:bg-sky-700 "
      : "bg-white text-[#337ab7] ";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {variant === "primarySmall" ? (
        <>
          <span>{text}</span>
          <div className="h-8 border-l border-white mx-2"></div>
          <span>900</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};
