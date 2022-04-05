import React, { useState } from "react";
import TextInput from "../text-input/text-input";
import { Col, Row } from "react-bootstrap";
import ButtonApp from "../button/button";
import { connect, useDispatch } from "react-redux";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
import { Navigate } from "react-router-dom";
import BlockUI from "../block-ui/block-ui-app";
const LoginApp = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChildClicked = () => {
    setLoading(true);
    dispatch(LoginAuthAction({ username, password }));
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  if (localStorage.getItem("auth")) {
    return <Navigate to="/" push={true} />;
  }
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
      <BlockUI blocking={loading} />
    </div>
  );
};

const styleButton = {
  marginTop: "10px",
  backgroundColor: "#f00",
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);
