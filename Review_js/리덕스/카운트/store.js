import { createStore } from "redux";
import cartReducer from "./CartReducer";

export const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
);
