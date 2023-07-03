export interface ChainData {
  key: string;
  chainType: string;
  name: string;
  coin: string;
  id: number;
  mainnet: true;
  logoURI: string;
  tokenlistUrl: string;
  faucetUrls?: string[];
  multicallAddress: string;
  metamask: {
    chainId: string;
    blockExplorerUrls: string[];
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: string[];
  };
  nativeToken: {
    address: string;
    chainId: number;
    symbol: string;
    decimals: number;
    name: string;
    priceUSD: string;
    logoURI: string;
    coinKey: string;
  };
}
