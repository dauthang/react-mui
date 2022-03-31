import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/AuthReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(authReducer, composedEnhancer);

export default store;
