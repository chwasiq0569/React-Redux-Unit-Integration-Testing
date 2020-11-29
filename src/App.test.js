import { mount, shallow } from "enzyme";
import { testStore } from "./store";
import App from "./App";
import { store } from "./store";
import { findTestbyAttr } from "./Utils/index";
import { Provider } from "react-redux";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  console.log(wrapper.debug());
  return wrapper;
};

describe("App Component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Title 1",
          body: "Some Text",
        },
        {
          title: "Title 2",
          body: "Some Text",
        },
        {
          title: "Title 3",
          body: "Some Text",
        },
      ],
    };
    component = setUp(initialState);
  });
  it("Should run without any Error", () => {
    const wrapper = findTestbyAttr(component, "appComponent");
    expect(wrapper.length).toBe(1);
  });
  it("exampleState_hideBtn() should update state as exepected", () => {
    // const wrapper = component.
  });
});
