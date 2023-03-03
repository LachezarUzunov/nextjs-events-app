import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <ul className={classes.list}>
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
