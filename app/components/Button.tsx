"use client";
interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ text, variant = "primary", onClick }: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded-lg transition-colors text-sm font-semibold";
  const variantClasses =
    variant === "primary"
      ? "bg-sky-600 text-white hover:bg-sky-700"
      : "bg-white text-sky-600 border border-sky-600";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
