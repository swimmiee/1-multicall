import { TokenIcon } from "components/TokenIcon";
import { getTokenBalances } from "getTokenBalances";
import { ChainData } from "interfaces/data/chain-data.interface";
import { TokenData } from "interfaces/data/token-data.interface";
import { useEffect, useState } from "react";

interface TokenBalancesProps {
  chain: ChainData;
  tokens: TokenData[];
  userAddress: string;
}

export const TokenBalances = ({
  chain,
  tokens,
  userAddress,
}: TokenBalancesProps) => {
  const [balancesList, setBalancesList] = useState<string[] | null>(null);
  const getBalancesList = async () => {
    const b = await getTokenBalances(chain, tokens, userAddress);
    setBalancesList(b);
  };

  useEffect(() => {
    getBalancesList();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-xl">{chain.name}</p>
      {balancesList?.map((balance, tokenIndex) => (
        <div className="flex" key={tokenIndex}>
          <TokenIcon token={tokens[tokenIndex]} size="md" key={tokenIndex} />
          <p className="ml-2">
            {balance} {tokens[tokenIndex].symbol}
          </p>
        </div>
      )) || "Loading..."}
    </div>
  );
};
