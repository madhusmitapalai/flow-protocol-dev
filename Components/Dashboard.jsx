import React from "react";
import { Card, Dropdown, Menu } from "antd";
// import style from "../Styles/Home.module.css";
const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="group_card">
        <Card className="single_card">Hello</Card>
        <Card className="single_card">Hello</Card>
        <Card className=" third_div">
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
    </div>
  );
};

export default Dashboard;
