import styles from "./Logo.module.css";

interface logoProps {
  className: string;
}

const Logo = ({ className }: logoProps) => {
  return (
    <p
      className={`${styles.logoText} ${className} text-[#545454] tracking-[1.5px] cursor-pointer whitespace-nowrap`}
    >
      SATVIC MOVEMENT
    </p>
  );
};
export default Logo;
