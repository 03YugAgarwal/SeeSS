import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`${styles.input} props.className`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
