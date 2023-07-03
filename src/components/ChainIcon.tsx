import { ChainData } from "../interfaces/data/chain-data.interface";
import { CoinIcon, CoinIconSize } from "./CoinIcon";
import type { FC } from "react";

interface ChainIconProps {
  chain: ChainData;
  /** xl(40) lg(32) md(24) ms(18) sm(16) xs(14)*/
  size: CoinIconSize;
  borderColor?: string | null;
}

export const ChainIcon: FC<ChainIconProps> = ({ chain, size, borderColor }) => {
  return (
    <CoinIcon
      alt={chain.name}
      size={size}
      imgSrc={chain.logoURI}
      borderColor={borderColor}
    />
  );
};
