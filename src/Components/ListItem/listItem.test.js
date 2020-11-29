import { shallow } from "enzyme";
import { checkProps, findTestbyAttr } from "../../Utils";
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    const expectedProps = {
      title: "Text",
      desc: "Text",
    };
    it("Should not throw Error", () => {
      let propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("should be Rendered", () => {
    let component;
    const props = {
      title: "Text",
      desc: "Text",
    };
    beforeEach(() => {
      component = shallow(<ListItem {...props} />);
    });

    it("should render without any error", () => {
      const wrapper = findTestbyAttr(component, "listItemComponent");
      expect(wrapper.length).toBe(1);
    });
    it("should render a title", () => {
      const wrapper = findTestbyAttr(component, "componentTitle");
      expect(wrapper.length).toBe(1);
    });
    it("should render without any error", () => {
      const wrapper = findTestbyAttr(component, "componentDesc");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("should not render", () => {
    let component;
    const props = {
      desc: "Text",
    };
    beforeEach(() => {
      component = shallow(<ListItem {...props} />);
    });

    it("component is NOT rendered", () => {
      const wrapper = findTestbyAttr(component, "listItemComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
