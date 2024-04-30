"use client";
import React, { useState } from "react";
import { Card, Dropdown, Menu, Space, Select } from "antd";
import { DownOutlined, RadarChartOutlined } from "@ant-design/icons";
import styles from "../Styles/Dashboard.module.css";

const { Option } = Select;
const Dashboard = () => {
  const items = [
    { key: "1", value: "Item 1", icon: <RadarChartOutlined /> },
    { key: "2", value: "Item 2", icon: <RadarChartOutlined /> },
    // Add more items as needed
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item selection
  const handleSelectChange = (value) => {
    const selectedItem = items.find((item) => item.key === value);
    setSelectedItem(selectedItem);
  };

  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.groupCard}>
        <div className={styles.singleCard}>
          <span className={styles.from}>From</span>
          <hr className={styles.hr} />
          <Select
            className={styles.selectOption}
            onChange={handleSelectChange}
            style={{ border: "none", boxShadow: "none" }}
            placeholder="Select an item"
          >
            {items.map((item) => (
              <Option key={item.key} value={item.key}>
                {item.icon}
                {item.value}
              </Option>
            ))}
          </Select>
        </div>
        <div className={styles.singleCard}>
          <Select
            className={styles.selectOption}
            onChange={handleSelectChange}
            // style={{ width: "350px", height: "40px" }}
            placeholder="Select an item"
          >
            {items.map((item) => (
              <Option key={item.key} value={item.key}>
                {item.icon}
                {item.value}
              </Option>
            ))}
          </Select>
          <hr className={styles.hr} />
          <span className={styles.from}>From</span>
        </div>
      </section>

      <Card className={styles.thirdDiv}>
        <div className="card_div">
          <span>Transfer Time</span>
          <span>Est. Output</span>
          <span>Fees</span>
        </div>
        <div className="card_div">
          <span>~ 10 sec</span>
          <span>0.009ETH</span>
          <span>$ 2.06</span>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
