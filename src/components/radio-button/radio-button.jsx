import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const RadioButton = () => {
  const [listRadio] = useState([
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ]);
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {listRadio.map((i) => {
            return (
              <FormControlLabel
                value={i.value}
                control={<Radio />}
                label={i.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButton;
