import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Topbar;
