"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BrowserProvider } from "ethers";
import { Swapper } from "./lib";
import { useEffect } from "react";

export default async function Home() {
  async function init() {
    const provider = new BrowserProvider((window as any).ethereum);
    const jsonRPCSigner = await provider.getSigner();
    const swapper = new Swapper(jsonRPCSigner);
    //1 USDC -> USDT
    // const transactionHash = await swapper.swap("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","0xdAC17F958D2ee523a2206206994597C13D831ec7","1000000");
    // 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE -- Native token address, too small ETH is not work
    // const transactionHash = await swapper.swap("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","0x55d398326f99059ff775485246999027b3197955","100000000000000"); // BNB -> USDT
    const transactionHash = await swapper.swap("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","0x74afe449d1beffc90456cfebd700ab391abd7daf","100000000000000"); // BNB -> EG
    console.log("transactionHash", transactionHash);
  }
  return (
    <main className={styles.main}>
      <div>
        <div>
          <button onClick={init} className="px-5 py-5">Swap</button> 
        </div>
      </div>
    </main>
  );
}
