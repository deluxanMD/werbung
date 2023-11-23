import { Typography } from "@mui/material";
import React from "react";
import { FieldError } from "react-hook-form";

type WerHelperTextProps = {
  error: FieldError;
};

const WerHelperText = ({ error }: WerHelperTextProps) => {
  return <Typography variant="body2">{error?.message}</Typography>;
};

export default WerHelperText;
