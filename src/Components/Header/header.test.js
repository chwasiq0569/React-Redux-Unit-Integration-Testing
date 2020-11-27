import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

// it() is same as test()

const setUp = (props = {}) => {
  //default parameter
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Testing Components", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Component have only one class named headerComponent", () => {
    const wrapper = component.find(`[data-test='headerComponent']`);
    expect(wrapper.length).toBe(1);
  });
  it("Should render a logo", () => {
    const wrapper = component.find(`[data-test='logoText']`);
    expect(wrapper.length).toBe(1);
  });
});

// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//////////////////////////////////////

// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
