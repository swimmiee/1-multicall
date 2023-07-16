# 1. Multicall

2023 Summer Blockchain Valley Frontend Session (23/07/2023)

# Objective
1. Web3를 위한 Frontend 기본 세팅
2. Multicall 이해하기

## 최종 Goal 
여러가지 체인에 있는 다양한 토큰에 대해서, 유저가 현재 가지고 있는 토큰의 양을 확인한다.


# Get Started

```bash
git clone https://github.com/swimmiee/1-multicall-recoil
npm i
```

or,

1. 프로젝트 생성

```bash
npm create vite@latest
```

`React`, `Typescript` 선택

2. 루트 폴더로 이동한 뒤, 아래 library 설치

```bash
npm i recoil tailwindcss ethers@5 axios
npm i -D typechain @typechain/ethers-v5
```

3. Tailwind css setup
   [Tailwind docs](https://tailwindcss.com/docs/guides/vite)

4. typechain setup
   `package.json`에서 `typechain` 스크립트 추가

   ```bash
   mkdir src/abi
   ```

   ```json
   "scripts": {
       ...
       "typechain": "typechain --target ethers-v5 --out-dir src/typechain src/abi/**/*.json"
   }
   ```

5. 쓸데없는 파일 삭제!

6. (optional) 절대경로 설정
   6-1. `tsconfig.json`에서

   ```json
   {
       "compilerOptions": {
           ...,
           "baseUrl": "./src"
       },
       ...
   }
   ```

   6-2. `vite.config.ts`에서

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tsconfigPaths from "vite-tsconfig-paths";

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react(), tsconfigPaths()],
   });
   ```

7. Metamask 사용 전 준비
   ```bash
   npm i -D @metamask/providers
   ```

   `src/vite-env.d.ts`에서
   ```ts
   /// <reference types="vite/client" />
   
   import { MetaMaskInpageProvider } from "@metamask/providers";
   
   declare global {
     interface Window {
       ethereum: MetaMaskInpageProvider;
     }
   }
   ```
