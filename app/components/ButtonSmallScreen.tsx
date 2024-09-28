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
    "px-4 py-4 rounded-xl transition-colors text-base font-semibold";
  const variantClasses =
    variant === "primarySmall"
      ? "bg-sky-600 text-white hover:bg-sky-700 "
      : "bg-white text-sky-600 ";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {variant === "primarySmall" ? `${text} 900` : text}
    </button>
  );
};
