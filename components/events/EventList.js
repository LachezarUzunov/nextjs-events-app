import React from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <ul>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            location={event.location}
            date={event.date}
            image={event.image}
            id={event.id}
            title={event.title}
          ></EventItem>
        );
      })}
    </ul>
  );
};

export default EventList;
