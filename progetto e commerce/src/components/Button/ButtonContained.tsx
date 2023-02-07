import React from "react";
import Button from "@mui/material/Button";
const ButtonContained = ({ text }: { text: string }) => {
  return <Button variant="contained">{text}</Button>;
};

export default ButtonContained;
