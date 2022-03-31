import React, { useState } from "react";
import { TextField } from "@mui/material";

const TextInput = (props) => {
  const { handle, label, value } = props;
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        style={style}
        onChange={handle}
        value={value}
      />
    </div>
  );
};

const style = {
  marginTop: "10px",
};

export default TextInput;
