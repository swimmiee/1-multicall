import { chainDataList } from "data/chains";
import { TokenDataList } from "data/tokens";
import { getTokenBalances } from "getTokenBalances";
import { useEffect } from "react";

function App() {
  const userAddress = "0xAA289325d1afc4AA040281b10dD9f10A8560D296";

  useEffect(() => {
    const chain = chainDataList[0];
    getTokenBalances(chain, TokenDataList[chain.id], userAddress)
  }, []);

  return (
    <div className="px-8 py-2 flex flex-col gap-6 divide-y [&>div]:pt-4">
      {/* [ 1. Connect Wallet ] */}
      <div>
        <h2 className="font-bold text-2xl mb-2">1. Connect Wallet</h2>
        <button className="btn">Connect wallet</button>
      </div>
    </div>
  );
}

export default App;
