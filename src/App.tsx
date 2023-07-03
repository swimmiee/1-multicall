import { TokenIcon } from "components/TokenIcon";
import { chainDataList } from "data/chains";
import { TokenDataList } from "data/tokens";
import { getTokenBalances } from "getTokenBalances";
import { useEffect, useState } from "react";

function App() {
  const userAddress = "0xAA289325d1afc4AA040281b10dD9f10A8560D296";
  const chain = chainDataList[0];
  const tokens = TokenDataList[chain.id];
  const [balances, setBalances] = useState<string[] | null>(null);

  useEffect(() => {
    getTokenBalances(chain, tokens, userAddress).then((balances) =>
      setBalances(balances)
    );
  }, []);

  return (
    <div className="px-8 py-2 flex flex-col gap-6 divide-y [&>div]:pt-4">
      {/* [ 1. Connect Wallet ] */}
      <div>
        <h2 className="font-bold text-2xl mb-2">1. Connect Wallet</h2>
        <button className="btn">Connect wallet</button>
      </div>

      {/* 2. Visualization */}
      <div>
        <h2 className="font-bold text-2xl mb-2">2. Visualization</h2>
        {tokens.map((token, i) => (
          <div className="flex">
            <TokenIcon token={token} size="md" key={i} />
            <p className="ml-2">
              {balances === null ? "loading..." : balances[i]} {token.symbol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
