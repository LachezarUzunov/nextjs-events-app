const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Black and White Photography in 2020",
    description:
      "An exhibition and masterclass course of a notorious black and white photographer who is going to show you the ins and outs of making outstanding photos",
    location: "Napoleon street 25, 12345 Paris",
    date: "2023-06-12",
    image: "images/black-white-photography.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "The New Alfa Romeo Giulia",
    description:
      "Alfa Romeo is back with facelifted Giulia and 612HP V12 engine that will leave you speechless and breathless. Reserver your sport for the test drive of your life! Hurry up, only few spots left!",
    location: "New Street 5, 765 Geneva",
    date: "2023-03-30",
    image: "images/alfa-romeo.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Hack Budget Travelling",
    description:
      "You probably also have a friend who is on a regular paying job and despite this seems to travel abroad all the time. Come and find out the secrets of the budget travellers revealed",
    location: "My Street 12, 115 Travellers City",
    date: "2023-04-16",
    image: "images/budget-traveller.jpg",
    isFeatured: true,
  },
];

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
