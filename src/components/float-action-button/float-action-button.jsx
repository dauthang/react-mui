import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const FloatActionButton = () => {
  const [type, setType] = useState("add");
  return (
    <div>
      {type === "add" ? (
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      ) : (
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      )}
    </div>
  );
};

export default FloatActionButton;
