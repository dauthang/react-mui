import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectApp = () => {
  const [value, setValue] = useState(10);
  const [label] = useState("Age");
  const [listItem] = useState([
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {listItem.map((i) => {
            return <MenuItem value={i.value}>{i.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectApp;
