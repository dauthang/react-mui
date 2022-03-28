import React, { useState } from "react";
import { TextField } from "@mui/material";

const TextInput = () => {
  const [label] = useState("label");
  return (
    <div>
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </div>
  );
};

export default TextInput;
