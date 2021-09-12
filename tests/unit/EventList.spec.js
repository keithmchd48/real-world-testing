import EventList from "@/views/EventList";
import { mount } from "@vue/test-utils";
import store from "@/store";
import router from "@/router";

describe("EventList", () => {
  test("it should render the events", () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Page Title", () => {
  test("title is rendered with correct text", () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    });
    const title = wrapper.find("[data-testid=event-list-title]");
    expect(title.exists()).toBe(true);
    expect(title.text()).toContain("Events for Good");
  });
});
