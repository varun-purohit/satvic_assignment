import Image, { StaticImageData } from "next/image";

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
        <span>{text}</span>
        {para && <span className="text-[11px] text-slate-500">{para}</span>}
      </div>
    </div>
  );
};
export default IconText;
