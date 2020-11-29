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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Button Text",
        emitEvent: mockFunc,
      };
      component = shallow(<SharedButton {...props} />);
    });

    it("should render without any Errors", () => {
      const button = findTestbyAttr(component, "buttonComponent");
      expect(button.length).toBe(1);
    });
    it("should emit callback on click event", () => {
      const button = findTestbyAttr(component, "buttonComponent");

      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
