import { ChainData } from "../interfaces/data/chain-data.interface";

export const chainDataList: ChainData[] = [
  {
    key: "eth",
    chainType: "EVM",
    name: "Ethereum",
    coin: "ETH",
    id: 1,
    mainnet: true,
    logoURI:
      "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum.svg",
    tokenlistUrl: "https://gateway.ipfs.io/ipns/tokens.uniswap.org",
    multicallAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
    metamask: {
      chainId: "0x1",
      blockExplorerUrls: ["https://etherscan.io/"],
      chainName: "Ethereum Mainnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      ],
    },
    nativeToken: {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 1,
      symbol: "ETH",
      decimals: 18,
      name: "ETH",
      priceUSD: "1957.7",
      logoURI:
        "https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png",
      coinKey: "ETH",
    },
  },
  {
    key: "pol",
    chainType: "EVM",
    name: "Polygon",
    coin: "MATIC",
    id: 137,
    mainnet: true,
    logoURI:
      "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon.svg",
    tokenlistUrl:
      "https://unpkg.com/quickswap-default-token-list@1.0.71/build/quickswap-default.tokenlist.json",
    faucetUrls: ["https://stakely.io/faucet/polygon-matic"],
    multicallAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
    metamask: {
      chainId: "0x89",
      blockExplorerUrls: [
        "https://polygonscan.com/",
        "https://explorer-mainnet.maticvigil.com/",
      ],
      chainName: "Matic(Polygon) Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: [
        "https://polygon-rpc.com/",
        // "https://rpc-mainnet.maticvigil.com/",
      ],
    },
    nativeToken: {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 137,
      symbol: "MATIC",
      decimals: 18,
      name: "MATIC",
      priceUSD: "0.672076",
      logoURI:
        "https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png",
      coinKey: "MATIC",
    },
  },
  {
    key: "bsc",
    chainType: "EVM",
    name: "BSC",
    coin: "BNB",
    id: 56,
    mainnet: true,
    logoURI:
      "https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc.svg",
    tokenlistUrl:
      "https://tokens.pancakeswap.finance/pancakeswap-extended.json",
    faucetUrls: ["https://stakely.io/faucet/bsc-chain-bnb"],
    multicallAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
    metamask: {
      chainId: "0x38",
      blockExplorerUrls: ["https://bscscan.com/"],
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-bsc.48.club"],
    },
    nativeToken: {
      address: "0x0000000000000000000000000000000000000000",
      chainId: 56,
      symbol: "BNB",
      decimals: 18,
      name: "BNB",
      priceUSD: "244.5",
      logoURI:
        "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
      coinKey: "BNB",
    },
  },
];
