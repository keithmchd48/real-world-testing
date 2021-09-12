import EventCard from "@/components/EventCard";
import { mount } from "@vue/test-utils";

describe("EventCard", () => {
  test("renders the event's data successfully", () => {
    const event = {
      id: 1,
      time: "12:00PM",
      date: "September 29th, 2022",
      title: "Coaching little league"
    };
    const wrapper = mount(EventCard, {
      props: {
        event
      }
    });
    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toContain(event.date);
    expect(wrapperHtml).toContain(event.title);
    expect(wrapperHtml).toContain(event.time);
  });
});
