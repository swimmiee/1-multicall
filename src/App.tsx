import { chainDataList } from "data/chains";
import { TokenDataList } from "data/tokens";
import { TokenBalances } from "TokenBalances";

function App() {
  const userAddress = "0xAA289325d1afc4AA040281b10dD9f10A8560D296";

  return (
    <div className="px-8 py-2 flex flex-col gap-6 divide-y [&>div]:pt-4">
      {/* [ 1. Connect Wallet ] */}
      <div className="mb-6">
        <h2 className="font-bold text-2xl mb-2">1. Connect Wallet</h2>
        <button className="btn">Connect wallet</button>
      </div>

      {/* 2. Visualization */}
      <div className="mt-8">
        <h2 className="font-bold text-2xl mb-2">2. Visualization</h2>

        <div className="flex gap-8">
          {chainDataList.map((c) => (
            <TokenBalances
              key={c.id}
              chain={c}
              tokens={TokenDataList[c.id]}
              userAddress={userAddress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
