import { Button } from "antd";
import React, { useState } from "react";
import styles from "../../Styles/Dashboard.module.scss";
import ethLogo from "../../assets/ethLogo.png";
import Image from "next/image";
import {
  DownOutlined,
  RadarChartOutlined,
  ArrowDownOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import AddTokenModal from "./AddTokenModal";
const Calculation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  return (
    <div className={styles.calucation_div}>
      <div className={styles.reciept_btn_div}>
        <Button className={styles.receipt_btn}>
          <PlusCircleOutlined />
          Add Receipt
        </Button>
      </div>
      <div className={styles.brige_btn_div}>
        <Button
          type="primary"
          className={styles.bridge_btn}
          onClick={showModal}
        >
          Bridge
        </Button>
      </div>
      <div className={styles.thirdDiv}>
        <div className={styles.card_div}>
          <span>Transfer Time</span>
          <span>~ 10 sec</span>
        </div>
        <div className={styles.card_div}>
          <span>Receiving Address</span>
          <span>
            <a href="">0x81E...9B8</a>
            <Image src={ethLogo} alt="eth_logo" />
          </span>
        </div>
        <div className={styles.card_div}>
          <span>Est. Output</span>
          <span>0.009ETH</span>
        </div>
        <div className={styles.card_div}>
          <span>Fees (Estimated)</span>
          <span>$ 2.06</span>
        </div>
      </div>
      <AddTokenModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Calculation;
