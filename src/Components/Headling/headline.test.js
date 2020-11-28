import { React } from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findTestbyAttr, checkProps } from "./../../Utils/index";
import { checkPropTypes } from "prop-types";
const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Test Headline Component", () => {
  describe("Have Passed Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Posts",
        desc: "Click the button to render posts!",
      };
      component = setUp(props);
    });

    it("It should not throw Error", () => {
      const expectedProps = {
        header: "Text",
        desc: "Text",
        tempArr: [
          {
            fName: "Bob",
            lName: "Jack",
            email: "bobjack@gmail.com",
            age: 21,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });

    it("should render without any errors", () => {
      const wrapper = findTestbyAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("should render a H1", () => {
      const h1 = findTestbyAttr(component, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findTestbyAttr(component, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("should not render", () => {
      const wrapper = findTestbyAttr(component, "headerComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
