import { Calendar, Clock, Star } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 max-w-sm">
      {/* Event Image */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="rounded-lg w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg">
          <span className="font-semibold">{event.month}</span>
          <br />
          <span className="text-lg font-bold">{event.date}</span>
        </div>
      </div>

      {/* Tag */}
      <span
        className={`inline-block px-3 py-1 text-xs font-semibold mt-3 rounded-lg ${event.tagColor}`}
      >
        {event.tag}
      </span>

      {/* Event Title */}
      <h3 className="text-lg font-semibold text-gray-900 mt-2">
        {event.title}
      </h3>

      {/* Event Date & Time */}
      <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
        <Calendar className="w-4 h-4" />
        <span>{event.dateText}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
        <Clock className="w-4 h-4" />
        <span>{event.time}</span>
      </div>

      {/* Join Event */}
      <div className="flex items-center mt-2 text-blue-600 font-medium text-sm cursor-pointer">
        <Star className="w-4 h-4 text-yellow-500 mr-1" />
        <span>Join others in this event</span>
      </div>

      {/* Button */}
      <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center space-x-2">
        <span>Event Details</span>
      </button>
    </div>
  );
};

export default EventCard;
