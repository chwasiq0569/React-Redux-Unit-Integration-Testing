import { types } from "../actions/actionTypes";
import { postActions } from "./../actions/actionTypes";

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case postActions().type:
      return action.payload;
    default:
      return state;
  }
};
