import moxios from "moxios";
import { testStore } from "../store";
import { fetchPosts } from "../actions/index";

describe("fetchposts Action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
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
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState, // on dispatching we will get this response
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      //   console.debug(store.getState().postsReducer);
      //   console.debug(expectedState);
      const newState = store.getState().postsReducer;
      expect(newState).toBe(expectedState);
    });
  });
});
