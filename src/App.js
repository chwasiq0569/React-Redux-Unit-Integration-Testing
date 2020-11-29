import React, { useState } from "react";
import "./app.css";
import Header from "./Components/Header/index";
import Headline from "./Components/Headling/index";
import { fetchPosts } from "./actions/index";
import { connect } from "react-redux";
import SharedButton from "./Components/SharedButton/SharedButton";
import { postsReducer } from "./reducers/postsReducer";
import ListItem from "./Components/ListItem/ListItem";

function App(props) {
  const tempArr = [
    {
      fName: "Bob",
      lName: "Jack",
      email: "bobjack@gmail.com",
      age: 21,
      onlineStatus: false,
    },
  ];

  const fetch = () => {
    props.fetchPosts();
    exampleState_hideBtn();
  };

  const configButton = {
    buttonText: "GET_POSTS",
    emitEvent: fetch,
  };

  const exampleState_hideBtn = () => {
    setHideBtn(!hideBtn);
  };
  const [hideBtn, setHideBtn] = useState(false);

  return (
    <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
        {!hideBtn && <SharedButton {...configButton} />}
        {props.posts.length > 0 && (
          <div>
            {props.posts.map((post, index) => {
              const configListItems = {
                title: post.title,
                desc: post.body,
              };
              return <ListItem key={index} {...configListItems} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
