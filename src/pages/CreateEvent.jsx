import { IoArrowForward } from "react-icons/io5";
import EventForm from "../components/EventForm";
import Events from "./Events";

export default function EventSection({ onEventCreate }) {
  // console.log("data", onEventCreate);
  return (
    <>
      <section className="flex flex-col md:flex-row items-start justify-between px-10 py-12">
        {/* Left Content */}
        <div className="max-w-[900px]">
          <h2 className="text-5xl font-bold text-black">Create a New Event</h2>
          <h3 className="text-5xl font-bold text-blue-500 mt-2">
            Fill in the details to create your event
          </h3>
          <p className="text-gray-600 mt-4 max-w-[750px] text-lg">
            Fill out the form below with the key details about your event,
            including date, location, and highlights. Make it engaging to
            attract your audience and ensure everything is set for a successful
            launch.
          </p>
        </div>

        {/* Right Content (Avatars & Button) */}
        <div className="flex flex-col items-start md:items-end mt-6 mr-20 md:mt-0">
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User 1"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="User 2"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="User 3"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
            <img
              src="https://randomuser.me/api/portraits/men/47.jpg"
              alt="User 4"
              className="w-10 h-10 rounded-full border-2 border-white shadow-md"
            />
          </div>
          {/* Trusted Text */}
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-semibold text-black">
              Trusted by Over 15k+
            </span>{" "}
            Individuals Worldwide.
          </p>
          {/* Button */}
          <button className="group flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full mt-4 shadow-md transition-all duration-300 hover:bg-gray-800">
            Explore Events
            <span className="transform transition-transform duration-300 ease-in-out group-hover:rotate-90">
              <IoArrowForward />
            </span>
          </button>
        </div>
      </section>
      <EventForm onEventCreate={onEventCreate} />
      <Events />
    </>
  );
}
