import React from "react";
import "./app.css";
import Header from "./Components/Header/index";
import Headline from "./Components/Headling/index";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
      </section>
    </div>
  );
}

export default App;
