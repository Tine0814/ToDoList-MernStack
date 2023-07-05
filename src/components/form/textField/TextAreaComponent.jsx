import React from "react";
import Textarea from "@mui/joy/Textarea";

const TextAreaComponent = (props) => {
  const { placeholder, name, error } = props;
  let registerProps = {};
  if (props.register) {
    registerProps = { ...props.register(name) };
  }
  return (
    <Textarea
      color="info"
      minRows={2}
      placeholder={placeholder}
      {...registerProps}
      error={!!error}
      name={name}
    />
  );
};

export default TextAreaComponent;
