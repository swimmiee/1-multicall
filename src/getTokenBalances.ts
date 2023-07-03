import { Contract, ethers, providers } from "ethers";
import { ChainData } from "interfaces/data/chain-data.interface";
import { Multicall2 } from "typechain";
import { ERC20Interface } from "typechain/ERC20";
import { Interface } from "ethers/lib/utils";
import MULTICALL2_ABI from "abi/Multicall2.json";
import ERC20_ABI from "abi/ERC20.json";

// 여러 토큰의 잔액을 조회하는 함수를 작성합니다.
export const getTokenBalances = async (
  chain: ChainData,
  tokenAddresses: string[],
  owner: string
) => {
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

  const result = await multicallContract.aggregate([
    {
        target: tokenAddresses[0],
        callData: erc20Itf.encodeFunctionData("balanceOf", [owner]),
    }
    // { target: "0x1", callData: "balanceOf()" },
    // { target: "0x2", callData: "balanceOf()" },
    // { target: "0x3", callData: "balanceOf()" },
  ]);

  console.log(result)
};
