"use client";
import React, { useState } from "react";
import { Card, Dropdown, Menu, Space } from "antd";
import { DownOutlined, RadarChartOutlined } from "@ant-design/icons";
import styles from "../Styles/Dashboard.module.css";
// import style from "../Styles/Home.module.css";
// const Dashboard = () => {
// const items = [
//   { key: "1", value: "Item 1", icon: <RadarChartOutlined /> },
//   { key: "2", value: "Item 2", icon: <RadarChartOutlined /> },
//   // Add more items as needed
// ];

//   return (
//     <div className="dashboard_container">
//       <div className="group_card">
//         <Card className="single_card">
//           <Dropdown.Button
//             style={{ width: "380px" }}
//             icon={<DownOutlined />}
//             overlay={
//               <Menu>
//                 {items.map((item) => (
//                   <Menu.Item key={item.key}>
//                     {item.icon} {item.value}
//                   </Menu.Item>
//                 ))}
//               </Menu>
//             }
//           >
//             From
//           </Dropdown.Button>
//         </Card>
//         <Card className="single_card">Hello</Card>
//         <Card className="third_div">
//           <div className="card_div">
//             <span>Transfer Time</span>
//             <span>Est. Output</span>
//             <span>Fees</span>
//           </div>
//           <div className="card_div">
//             <span>~ 10 sec</span>
//             <span>0.009ETH</span>
//             <span>$ 2.06</span>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

const Dashboard = () => {
  const items = [
    { key: "1", value: "Item 1", icon: <RadarChartOutlined /> },
    { key: "2", value: "Item 2", icon: <RadarChartOutlined /> },
    // Add more items as needed
  ];
  // State to manage the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item selection
  const handleMenuClick = (e) => {
    const selectedItemKey = e.key;
    const selectedItem = items.find((item) => item.key === selectedItemKey);
    setSelectedItem(selectedItem);
  };

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.group_card}>
        <Card className={styles.single_card}>
          <Dropdown.Button
            style={{ width: "380px" }}
            overlay={
              <Menu onClick={handleMenuClick} style={{ minWidth: "150px" }}>
                {items.map((item) => (
                  <Menu.Item key={item.key}>
                    {item.icon} {item.value}
                  </Menu.Item>
                ))}
              </Menu>
            }
            icon={
              <>
                {selectedItem && selectedItem.icon} <DownOutlined />
              </>
            }
          >
            From
          </Dropdown.Button>
        </Card>
        <Card className={styles.single_card}>Hello</Card>
        <Card className={styles.third_div}>
          <div className={styles.card_div}>
            <span>Transfer Time</span>
            <span>Est. Output</span>
            <span>Fees</span>
          </div>
          <div className={styles.card_div}>
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
