"use client";
import { Input, Modal } from "antd";
import React, { useState } from "react";
const { Search } = Input;
import styles from "../../Styles/Modal.module.scss";
import bitcoin from "../../assets/bitcoin.png";
import { GeistSans } from "geist/font/sans";
import wappedBitcoin from "../../assets/wrappedBit.png";
import qtum from "../../assets/qtum.png";
import stx from "../../assets/stx.png";
import icp from "../../assets/icp.png";
import { SearchOutlined } from "@ant-design/icons";
import ordi from "../../assets/ordi.png";

import Image from "next/image";
const AddTokenModal = ({ isOpen, setIsOpen }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    // Implement your search logic here
    console.log("Search value:", value);
    setSearchValue(value);
  };
  return (
    <Modal
      title="Select a Token"
      visible={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      className={styles.tokenModal}
      centered
    >
      <Search
        placeholder="Search tokens"
        allowClear
        // enterButton="Search"
        size="large"
        // onSearch={handleSearch}
        prefix={<SearchOutlined />}
        style={{ marginBottom: 16 }}
      />
      <div className={styles.token_container}>
        <h4 className={styles.header_text}>Your Token</h4>
        <div className={styles.token_cards}>
          <div className={styles.iner_token_card}>
            <div>
              <Image className={styles.coin_img} src={bitcoin} alt="ordi" />
            </div>
            <div>
              <h4 className={GeistSans.sub_head_text}>Bitcoin</h4>
              <span className={styles.token_span}>Bitcoin</span>
            </div>
          </div>
          <h3>0.9</h3>
        </div>
        <div className={styles.token_cards}>
          <div className={styles.iner_token_card}>
            <div>
              <Image
                className={styles.coin_img}
                src={wappedBitcoin}
                alt="ordi"
              />
            </div>
            <div>
              <h4 className={GeistSans.sub_head_text}>Wrapped Bitcoin</h4>
              <span className={styles.token_span}>Wrapped Bitcoin</span>
            </div>
          </div>
          <h3>0.9</h3>
        </div>

        <div className={styles.token_cards}>
          <div className={styles.iner_token_card}>
            <div>
              <Image className={styles.coin_img} src={ordi} alt="ordi" />
            </div>
            <div>
              <h4 className={GeistSans.sub_head_text}>Ordi</h4>
              <span className={styles.token_span}>Ordi</span>
            </div>
          </div>
          <h3>0.9</h3>
        </div>
      </div>

      {/* //all token */}
      <div className={styles.token_container}>
        <h4 className={styles.header_text}>All Token</h4>
        <div className={styles.all_token_card}>
          <div className={styles.iner_token_card}>
            <div>
              <Image className={styles.coin_img} src={qtum} alt="ordi" />
            </div>
            <div>
              <span className={styles.token_span}>Bitcoin</span>
            </div>
          </div>
          <h3>0.9</h3>
        </div>
        <div className={styles.all_token_card}>
          <div className={styles.iner_token_card}>
            <div>
              <Image className={styles.coin_img} src={stx} alt="ordi" />
            </div>
            <div>
              <span className={styles.token_span}>Wrapped Bitcoin</span>
            </div>
          </div>
          <h3>0.9</h3>
        </div>

        <div className={styles.all_token_card}>
          <div className={styles.iner_token_card}>
            <div>
              <Image className={styles.coin_img} src={icp} alt="ordi" />
            </div>
            <div>
              <span className={styles.token_span}>Ordi</span>
            </div>
          </div>
          <h3>0.9</h3>
        </div>
      </div>
    </Modal>
  );
};

export default AddTokenModal;
