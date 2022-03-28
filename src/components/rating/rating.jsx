import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

const RatingApp = () => {
  const [value, setValue] = useState(0);
  const [label] = useState("Rating");
  return (
    <div>
      <Typography component="legend">{label}</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default RatingApp;
