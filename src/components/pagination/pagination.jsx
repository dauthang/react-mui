import React, { useState } from "react";
import { Pagination } from "@mui/lab";

const PaginationApp = () => {
  const [count] = useState(10);
  return (
    <div>
      <Pagination count={count} color="primary" />
    </div>
  );
};

export default PaginationApp;
