import React from "react";
import "./app.css";
import Header from "./Components/Header/index";
import Headline from "./Components/Headling/index";

function App() {
  const tempArr = [
    {
      fName: "Bob",
      lName: "Jack",
      email: "bobjack@gmail.com",
      age: 21,
      onlineStatus: false,
    },
  ];

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
