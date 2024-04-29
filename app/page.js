import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container ">
      <div className="sidebar">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="div-content"></div>
    </div>
  );
}
