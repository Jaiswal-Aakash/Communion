import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const dummyEvents = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152742578?_a=BAMCkGfi0",
    month: "MAR",
    date: "15",
    title: "Christmas Charity Drive",
    dateText: "Saturday, March 15, 2025",
    time: "5:30 AM IST",
    tag: "DONATION",
    tagColor: "bg-blue-100 text-blue-600",
    category: "Charity",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266?_a=BAMCkGfi0",
    month: "MAR",
    date: "30",
    title: "Eid-ul-Fitr",
    dateText: "Sunday, March 30, 2025",
    time: "5:30 AM IST",
    tag: "FREE",
    tagColor: "bg-green-100 text-green-600",
    category: "Religious",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/www.easeindiatrip.com/blog/wp-content/uploads/2025/02/Holi-in-goa.jpg?fit=1024%2C592&ssl=1",
    month: "MAR",
    date: "14",
    title: "Holi Celebration",
    dateText: "Sunday, March 14, 2025",
    time: "7:30 AM IST",
    tag: "PAID",
    tagColor: "bg-red-100 text-red-600",
    category: "Religious",
  },

];

const categories = ["All", "Religious", "Social", "Charity"];

const Events = ({event =[]}) => {
  useEffect(() => {
    console.log("Updated events in Events.jsx:", event);
  }, [event]);
  console.log("events page",event);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState(dummyEvents);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    tag: "FREE",
    category: "Social",
  });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time) return;

    const eventDate = new Date(newEvent.date);
    const monthAbbrev = eventDate
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();

    setEvents((prevEvents) => [
      ...prevEvents,
      {
        ...newEvent,
        id: prevEvents.length + 1,
        image: "/default-event.jpg",
        month: monthAbbrev,
        date: newEvent.date.split("-")[2],
        dateText: eventDate.toDateString(),
        tagColor:
          newEvent.tag === "FREE"
            ? "bg-green-100 text-green-600"
            : "bg-blue-100 text-blue-600",
      },
    ]);

    setNewEvent({
      title: "",
      date: "",
      time: "",
      tag: "FREE",
      category: "Social",
    });
  };

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="container mx-auto p-5">
      <div className="text-center my-6">
        <h2 className="text-lg text-gray-700 font-medium">
          We Helped Communities Connect & Flourish
        </h2>
        <h1 className="text-2xl font-bold text-blue-700 flex items-center justify-center mt-2">
          <span className="text-blue-500 mx-2">✦</span> Upcoming Events
        </h1>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 my-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border text-gray-700 transition-all duration-200 ${
              selectedCategory === category
                ? "bg-gray-100 border-gray-400 font-semibold"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
