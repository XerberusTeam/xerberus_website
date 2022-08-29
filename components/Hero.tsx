import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover xrb-bg-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"></div>
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold ">Wallet Watcher</h2>
        <p className="py-5 text-xl ">Your Risk Manager for Cardano Tokens</p>
        <Link href="https://discord.gg/zSDQNaH5">
          <a target="_blank">
            <button className="px-8 py-2 border w-full bg-white text-black text-2xl font-bold">
              Join the Discord
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
