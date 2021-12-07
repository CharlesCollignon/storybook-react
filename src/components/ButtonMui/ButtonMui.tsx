import * as React from "react";
import Button from "@mui/material/Button";

type ButtonMuiProps = {
  text: string;
  variantStyle: "text" | "contained" | "outlined";
};

const ButtonMui = (props: ButtonMuiProps) => {
  const { text, variantStyle } = props;
  return <Button variant={variantStyle}>{text}</Button>;
};

export default ButtonMui;
