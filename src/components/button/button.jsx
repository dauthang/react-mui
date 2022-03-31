import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const ButtonApp = (props) => {
  const { onClick, loading } = props;
  return (
    <div>
      <LoadingButton
        size="small"
        onClick={onClick}
        loading={loading}
        variant="contained"
        style={style}
        type="button"
      >
        {props.label}
      </LoadingButton>
    </div>
  );
};

const style = {
  marginTop: "10px",
};

export default ButtonApp;
