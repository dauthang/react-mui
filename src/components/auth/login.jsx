import React, { useState } from "react";
import TextInput from "../text-input/text-input";
import { Col, Row } from "react-bootstrap";
import ButtonApp from "../button/button";
import { connect, useDispatch } from "react-redux";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
import { Navigate } from "react-router-dom";

const LoginApp = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [routerHome, setRouterHome] = useState(false);
  const dispatch = useDispatch();

  const handleChildClicked = () => {
    dispatch(LoginAuthAction({ username, password }));
    setRouterHome(true);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // if (routerHome) {
  //   console.log("ok ");
  //   return <Navigate to="/" push={true} />;
  // }
  return (
    <div>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput label="Username" handle={handleUsername} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput label="Password" handle={handlePassword} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonApp
            style={styleButton}
            label="Login"
            loading={false}
            onClick={handleChildClicked}
          />
        </Col>
      </Row>
    </div>
  );
};

const styleButton = {
  marginTop: "10px",
  backgroundColor: "#f00",
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);
