import React from "react";
import TextField from "@mui/material/TextField";

function InputComponent(props) {
  const { id, label, type, value, variant, onChange, name, error, inputProps } =
    props;

  let registerProps = {};
  if (props.register) {
    registerProps = { ...props.register(name) };
  }

  return (
    <TextField
      id={id}
      label={label}
      type={type}
      value={value}
      name={name}
      inputProps={inputProps}
      onChange={onChange}
      variant={variant}
      {...registerProps}
      error={!!error}
      helperText={error?.message}
      className={`w-full`}
      color="secondary"
    />
  );
}

export default InputComponent;
