import axios from "axios";
import { postActions } from "./actionTypes";

export const fetchPosts = () => async (dispatch) =>
  await axios
    .get("http://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => {
      dispatch(postActions(res.data));
    })
    .catch((err) => {
      console.log("err: ", err);
    });
