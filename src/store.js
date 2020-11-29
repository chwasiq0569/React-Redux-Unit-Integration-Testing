import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

export const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const testStore = (initialState) => {
  return createStore(
    rootReducer,
    applyMiddleware(...middlewares),
    initialState
  );
};
