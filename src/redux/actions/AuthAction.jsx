import axios from "axios";
import qs from "qs";
const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const RegisterAuthAction = (useState) => {
  return async (dispatch) => {
    try {
      const data = await axios.get("");
      console.log(data);
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: "data" });
    } catch (error) {
      console.error();
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: {} });
    }
  };
};

const LoginAuthAction = (userState) => {
  return async (dispatch) => {
    await axios
      .post(
        "/login",
        qs.stringify({
          username: userState.username,
          password: userState.password,
        }),
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        console.log(res);
        dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: "data" });
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
      });
  };
};

export { RegisterAuthAction, LoginAuthAction, AuthActionType };
