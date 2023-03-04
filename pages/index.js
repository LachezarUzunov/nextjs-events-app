import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default Home;
