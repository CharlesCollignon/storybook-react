import * as React from "react";
import Button from "@mui/material/Button";

type ButtonMuiProps = {
  text: string;
  variant: "text" | "contained" | "outlined";
};

const ButtonMui = (props: ButtonMuiProps) => {
  const { text, variant } = props;
  return <Button variant={variant}>{text}</Button>;
};

export default ButtonMui;
