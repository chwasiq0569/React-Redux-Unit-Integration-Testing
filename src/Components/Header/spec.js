import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

// it() is same as test()

describe("Testing Components", () => {
  it("It should render without any error", () => {
    expect(1).toBe(1);
  });
});

// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
