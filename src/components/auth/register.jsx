import React from "react";
import TextInput from "../text-input/text-input";
import { Col, Row } from "react-bootstrap";
import ButtonApp from "../button/button";
import { connect } from "react-redux";

const RegisterApp = (props) => {
  const handleChildClicked = () => {
    console.log("test");
  };
  const handleUsername = (event) => {
    console.log(event);
  };
  const handlePassword = (event) => {
    console.log(event);
  };
  const {} = props;
  const [userState, setUserState] = userState();
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
            label="Register"
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
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (useState) => {
      console.log(useState);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterApp);
