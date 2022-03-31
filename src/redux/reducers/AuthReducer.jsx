import { AuthActionType } from "../actions/AuthAction";

const authState = {
  isLoggedIn: false,
  user: {
    access_token: "",
    refresh_token: "",
  },
};

const authReducer = (state: authState, action) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      const newAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;
    case AuthActionType.LOGIN_FAIL:
      return {
        isLoggedIn: false,
        user: action.payload,
      };
    default:
      return state;
  }
  return state;
};

//
// const jwtLocalStorage = {
//   getAuthState: () => {
//     const auth = localStorage.getItem("auth")
//   }
// };

export default authReducer;
