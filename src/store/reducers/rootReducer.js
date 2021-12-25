import cartReducer from "./cartReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;