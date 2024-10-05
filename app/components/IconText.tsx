import Image, { StaticImageData } from "next/legacy/image";

interface IconTextProps {
  iconSrc: StaticImageData;
  text: string;
  alt: string;
  para?: string;
  height?: number;
  width?: number;
}

const IconText = ({
  iconSrc,
  text,
  alt,
  para,
  height = 20,
  width = 20,
}: IconTextProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={iconSrc} alt={alt} width={width} height={height} />
      <div className="flex flex-col">
        <span className=" md:text-xs lg:text-sm text-[#363636]">{text}</span>
        {para && (
          <span className="md:text-[11px] lg:text-xs text-[#818184]">
            {para}
          </span>
        )}
      </div>
    </div>
  );
};
export default IconText;
