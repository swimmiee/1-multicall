import type { FC } from "react";
import { cn } from "utils";

export type CoinIconSize = "xxl" | "xl" | "lg" | "md" | "ms" | "sm" | "xs";
export const iconSizeOf: { [size in CoinIconSize]: string } = {
  xxl: "w-12 h-12 p-[6px]",
  xl: "w-10 h-10 p-[5px]",
  lg: "w-8 h-8 p-[4px]",
  md: "w-6 h-6 p-[3px]",
  ms: "w-[18px] h-[18px] p-[2.25px]",
  sm: "w-4 h-4 p-[2px]",
  xs: "w-[14px] h-[14px] p-[1.75px]",
};

interface CoinIconProps {
  size: CoinIconSize;
  imgSrc: string;
  alt: string;
  borderColor?: string | null;
  className?: string
}
export const CoinIcon: FC<CoinIconProps> = ({
  size,
  imgSrc,
  alt,
  borderColor,
  className
}) => {
  const borderStyle = { borderColor: borderColor ?? "#CCCCCC" };
  return (
    
    <div
      style={borderStyle}
      className={cn(iconSizeOf[size], "border rounded-full", className)}
    >
      <img className="w-full h-full rounded-full" src={imgSrc} alt={alt} />
    </div>
  );
};
