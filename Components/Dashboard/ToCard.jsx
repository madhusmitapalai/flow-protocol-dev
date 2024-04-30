import { Select } from "antd";
import Image from "next/image";
import React from "react";
import optionImg1 from "../../assets/option1.png";
import optionImg2 from "../../assets/option2.png";
import styles from "../../Styles/Dashboard.module.scss";
const { Option } = Select;
const ToCard = ({ items, setSelectedItem }) => {
  const handleSelectChange = (value) => {
    const selectedItem = items.find((item) => item.key === value);
    setSelectedItem(selectedItem);
  };
  return (
    <section className={styles.groupCard}>
      <div className={styles.singleCard}>
        <span className={styles.from}>To</span>
        <hr className={styles.hr} />
        <Select
          className={styles.selectOption}
          onChange={handleSelectChange}
          defaultValue="1"
          placeholder="Select an item"
        >
          {items.map((item) => (
            <Option key={item.key} value={item.key} className={styles.option}>
              <Image
                src={item.image}
                alt={item.value}
                className={styles.optionImage}
              />
              <span className={styles.select_span_option}> {item.value}</span>
            </Option>
          ))}
        </Select>
      </div>
    </section>
  );
};

export default ToCard;
