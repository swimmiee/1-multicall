import { Signer, providers, utils } from "ethers";
import { ChainData } from "../interfaces/data/chain-data.interface";
import { chainDataList } from "../data/chains";

export const connectMetamask = async () => {
  if (!window.ethereum) return;

  const [account, currentChainId] = await Promise.all([
    // account
    window.ethereum
      .request({
        method: "eth_requestAccounts",
        params: [],
      })
      .then((_accounts) => {
        const accounts = _accounts as string[];
        if (accounts.length === 0) throw new Error("No accounts");
        return accounts[0];
      }),
    // chainId
    window.ethereum
      .request({
        method: "eth_chainId",
        params: [],
      })
      .then((chainId) => +(chainId as string)),
  ]).catch((e) => {
    console.log(e);
    throw Error(e);
  });

  let ok = true;

  return {
    account,
    chainId: currentChainId,
    ok,
  };
};

export const disconnectMetamask = () => {
  if (!window.ethereum) return;
};

const metamaskAddChain = async (chain: ChainData) => {
  const hexChainId = utils.hexStripZeros(utils.hexlify(chain.id));
  return window.ethereum?.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainName: chain.name,
        chainId: hexChainId,
        nativeCurrency: {
          name: chain.name,
          decimals: 18,
          symbol: chain.nativeToken.symbol,
        },
        rpcUrls: chain.metamask.rpcUrls,
      },
    ],
  });
};

export const metamaskSwitchChain = async (
  chainId: number
): Promise<{
  ok: boolean;
  signer: Signer | null;
}> => {
  const hexChainId = utils.hexStripZeros(utils.hexlify(chainId));
  try {
    await window.ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: hexChainId }],
    });
    return {
      ok: true,
      // @ts-ignore
      signer: new providers.Web3Provider(window.ethereum!).getSigner(),
    };
  } catch (err: any) {
    // This error code indicates that the chain has not been added to MetaMask

    if (err?.code === 4902) {
      try {
        const chain = chainDataList.find(c => c.id === chainId)!
        await metamaskAddChain(chain);
      } catch (err: any) {
        return { ok: false, signer: null };
      }
    }

    return { ok: false, signer: null };
  }
};
