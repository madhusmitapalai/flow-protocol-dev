"use client";
import React, { useState } from "react";
import { Card, Dropdown, Menu, Space, Select } from "antd";
import {
  DownOutlined,
  RadarChartOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import styles from "../../Styles/Dashboard.module.scss";
import Image from "next/image";
import optionImg1 from "../../assets/option1.png";
import optionImg2 from "../../assets/option2.png";
import FromCard from "./FromCard";
import ToCard from "./ToCard";
import Calculation from "./Calculation";
const { Option } = Select;
const Dashboard = () => {
  const items = [
    { key: "1", value: "ETH Mainnet", image: optionImg2 },
    { key: "2", value: "Base", image: optionImg1 },
    // Add more items as needed
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={styles.dashboardContainer}>
      <FromCard items={items} setSelectedItem={setSelectedItem} />
      <div className={styles.arrow_Div}>
        <ArrowDownOutlined />
      </div>
      <ToCard items={items} setSelectedItem={setSelectedItem} />
      <Calculation />
      
    </div>
  );
};

export default Dashboard;
