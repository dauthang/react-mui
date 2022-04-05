import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
const Home = (props) => {
  const auth = localStorage.getItem("auth");
  if (!auth || !props.user) {
    return <Navigate to="/login" />;
  } else {
    return <h1>Home</h1>;
  }
};
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (useState) => {
      dispatch();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
