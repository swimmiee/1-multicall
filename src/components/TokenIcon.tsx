import { CoinIcon, CoinIconSize } from "./CoinIcon";
import { Token } from "modules/Token";
import type { FC } from "react";

interface TokenIconProps {
  token: Token;
  size: CoinIconSize;
  borderColor?: string | null;
}

export const TokenIcon: FC<TokenIconProps> = ({ token, size, borderColor }) => {
  if (!token) return null;
  const chain = token.getChain();
  return (
    <div className="relative mr-1.5 rounded-full bg-white">
      <CoinIcon
        alt={token.symbol}
        imgSrc={token.imgUrl}
        size={size}
        borderColor={borderColor}
      />
      <div className="absolute -right-1.5 -bottom-px">
        <CoinIcon
          className="z-10 bg-white"
          alt={chain.name}
          imgSrc={chain.imgUrl}
          size={size === "xl" || size === "xxl" ? "md" : "sm"}
          borderColor="#ddd"
        />
      </div>
    </div>
  );
};
