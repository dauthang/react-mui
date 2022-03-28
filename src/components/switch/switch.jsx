import React, { useState } from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const SwitchApp = () => {
  const [label] = useState("Label");
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label={label} />
      </FormGroup>
    </div>
  );
};

export default SwitchApp;
