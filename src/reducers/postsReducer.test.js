import { postsReducer } from "./postsReducer";
import { postActions, types } from "../actions/actionTypes";

describe("Testing PostsReducer", () => {
  it("Should return default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it("Should return new state if it recieves type", () => {
    const posts = [{ title: "Test1" }, { title: "Test2" }, { title: "Test3" }];
    const newState = postsReducer(undefined, {
      type: postActions().type,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
