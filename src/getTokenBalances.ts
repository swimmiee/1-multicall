import { Contract, constants, ethers, providers } from "ethers";
import { Multicall2 } from "typechain";
import { ERC20Interface } from "typechain/ERC20";
import { Interface, formatUnits } from "ethers/lib/utils";
import { Multicall2Interface } from "typechain/Multicall2";
import { ChainData } from "interfaces/data/chain-data.interface";
import { TokenData } from "interfaces/data/token-data.interface";
import MULTICALL2_ABI from "abi/Multicall2.json";
import ERC20_ABI from "abi/ERC20.json";

// 여러 토큰의 잔액을 조회하는 함수를 작성합니다.
export const getTokenBalances = async (
  chain: ChainData,
  tokens: TokenData[],
  owner: string
): Promise<string[]> => {
  // 1. provider를 선언합니다
  // TIP
  const provider = new providers.FallbackProvider(
    chain.metamask.rpcUrls.map(
      (rpcUrl) => new ethers.providers.JsonRpcProvider(rpcUrl)
    )
  );

  // 2. multicall 컨트랙트 만들기
  const multicallContract = new Contract(
    chain.multicallAddress,
    MULTICALL2_ABI,
    provider
  ) as Multicall2;

  // 여러 토큰에 대해서 owner의 balance 구하기
  // ERC20의 balanceOf 함수를 호출하는 callData를 만들어야 합니다.
  const erc20Itf = new Interface(ERC20_ABI) as ERC20Interface;
  const multicallItf = new Interface(MULTICALL2_ABI) as Multicall2Interface;
  const { returnData } = await multicallContract.aggregate(
    tokens.map((token) =>
      token.address === constants.AddressZero // native token인 경우
        ? {
            target: chain.multicallAddress,
            callData: multicallItf.encodeFunctionData("getEthBalance", [owner]),
          }
        : {
            target: token.address,
            callData: erc20Itf.encodeFunctionData("balanceOf", [owner]),
          }
    )
  );

  console.log(
    returnData.map((balance, i) => formatUnits(balance, tokens[i].decimals))
  );

  return returnData.map((balance, i) =>
    formatUnits(balance, tokens[i].decimals)
  );
};
