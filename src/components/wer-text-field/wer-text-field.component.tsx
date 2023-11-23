import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import WerHelperText from "../wer-helper-text/wer-helper-text.component";

type WerTextFieldProps = {
  name: string;
  defaultValue: string;
} & TextFieldProps;

const WerTextField = ({
  size = "small",
  name,
  defaultValue,
}: WerTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          size={size}
          error={!!error}
          helperText={!!error && <WerHelperText error={error} />}
          fullWidth
          data-testid={`WerTextField.${name}`}
          {...field}
        />
      )}
    />
  );
};

export default WerTextField;
