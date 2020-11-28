import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findTestbyAttr } from "../../Utils/index";
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
    const wrapper = findTestbyAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
  it("Should render a logo", () => {
    const wrapper = findTestbyAttr(component, "logoText");
    expect(wrapper.length).toBe(1);
  });
});
