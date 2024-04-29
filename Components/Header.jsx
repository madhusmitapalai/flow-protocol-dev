import Image from "next/image";
import { Button } from "antd";
import React from "react";
import styles from "../Styles/Header.module.css";
import logo from "../assets/Logo.png";
import wallet from "../assets/wallet.png";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_div}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h3 className="header_title">Flow Protocol</h3>
      </div>
      <div className={styles.button_div}>
        <Button type="button" className={styles.collectBtn}>
          <Image src={wallet} alt="wallet-img" />
          Collect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Header;
