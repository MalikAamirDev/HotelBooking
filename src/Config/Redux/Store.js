import { createStore, applyMiddleware } from "redux";
import loginReducer from "../Redux/Reducer/loginreducer";
import signUpReducer from "../Redux/Reducer/signupreducer";
import AllUsersReducer from "../Redux/Reducer/AllUsersReducer";
import UserStatusReducer from "../Redux/Reducer/UserStatusReducer";
import hotelListReducer from "../Redux/Reducer/hotelListingReducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
  AllUsersReducer,
  loginReducer,
  signUpReducer,
  UserStatusReducer,
  hotelListReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
