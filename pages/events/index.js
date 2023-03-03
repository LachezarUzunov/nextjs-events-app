import { getAllEvents } from "@/dummy-data";

const Events = () => {
  const events = getAllEvents();
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};

export default Events;
