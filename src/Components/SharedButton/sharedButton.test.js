import { shallow } from "enzyme";
import SharedButton from "./SharedButton";
import { checkProps } from "../../Utils/index";
import { findTestbyAttr } from "./../../Utils/index";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    const expectedProps = {
      buttonText: "Button Text",
      emitEvent: () => {},
    };
    it("Should not throw any Error", () => {
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let component;
    beforeEach(() => {
      component = shallow(<SharedButton />);
    });

    it("should render without any Errors", () => {
      const wrapper = findTestbyAttr(component, "buttonComponent");
      expect(wrapper.length).toBe(1);
    });
  });
});
