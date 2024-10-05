"use client";
interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ text, variant = "primary", onClick }: ButtonProps) => {
  const baseClasses =
    "px-7 py-2.5 md:rounded-lg lg:rounded-xl transition-colors md:text-xs lg:text-sm font-bold text-[18px]";
  const variantClasses =
    variant === "primary"
      ? "bg-[#337ab7] text-white hover:bg-sky-700"
      : "bg-white text-[#337ab7] border border-[#337ab7]";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
