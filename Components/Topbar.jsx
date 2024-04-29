import Link from "next/link";
import React from "react";
import Image from "next/image";
import bridge from "../assets/bridge.svg";
import explorer from "../assets/explorer.svg";
import liquidity from "../assets/liquidity.svg";
const Topbar = () => {
  return (
    <div className="topbar">
      <Link href="/" className="link">
        <Image src={bridge} alt="bridge" /> <span> Bridge</span>
      </Link>
      <Link href="/explorer" className="link">
        <Image src={explorer} alt="bridge" /> <span>Explorer</span>
      </Link>
      <Link href="/liquidity" className="link">
        <Image src={liquidity} alt="bridge" /> <span>Liquidity</span>
      </Link>
    </div>
  );
};

export default Topbar;
