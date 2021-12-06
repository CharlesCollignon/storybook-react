import React from "react";
import "./Button.scss";

type ButtonProps = {
  label: string;
};

const Button = (props: ButtonProps) => {
  const { label } = props;

  return <button>{label}</button>;
};

export default Button;
