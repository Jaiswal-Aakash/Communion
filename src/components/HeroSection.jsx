import React from "react";
import { IoArrowForward, IoArrowDown } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center text-center lg:text-left px-6 lg:px-16 py-10">
      {/* Left Side Content */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full">
          <img className="h-6" src="./verified.png" alt="" />
          <span>Unlimited Advantages</span>
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Unite, Innovate, <br />
          <span className="relative inline-block">
            Connect, Inspires
            <img
              src="https://communionhub.org/static/media/small-card-2.bd207a83f52c1a02bbc0.png"
              alt="user"
              className="absolute -top-7 -left-9 w-12 h-12 rounded-full border-2 border-white shadow-lg hidden sm:block"
            />
          </span>
          <br /> Together
        </h1>

        {/* People Group */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full mt-4">
          <div className="flex -space-x-2">
            <img
              src="https://communionhub.org/static/media/person-1.e3cb6d5f253e917b43c8.avif"
              alt="user1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://communionhub.org/static/media/team-2.4b6656565d465d4a4cf3.avif"
              alt="user2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://communionhub.org/static/media/person-3.5d139ff3b34954893cf3.avif"
              alt="user3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <span className="ml-3 text-gray-600 font-semibold">+8 peoples</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 max-w-lg mt-4 px-2 sm:px-0">
          Join us to be part of a community where spirituality meets innovation.
          Together, we'll build a world that's more inclusive, engaging, and
          connected than ever before!
        </p>

        {/* Button */}
        <Link to="/upcoming-events">
          <button className="group flex items-center gap-2 bg-black text-white font-semibold px-12 py-3 rounded-full mt-6 shadow-md transition-all duration-300 hover:bg-gray-600">
            Explore Events
            <span className="transition-transform duration-300 ease-in-out group-hover:rotate-[45deg]">
              <IoArrowForward className="group-hover:hidden" />
              <IoArrowDown className="hidden group-hover:inline" />
            </span>
          </button>
        </Link>
      </div>

      {/* Right Side Events */}
      <div className="flex flex-row items-center justify-center gap-6 mt-10 lg:mt-0 w-full lg:w-1/2">
        {/* Event 1 */}
        <div className="group relative bottom-[-70px] transition-all duration-300 hover:-translate-y-3">
          <img
            src="https://communionhub.org/static/media/hero-6.7d2a560b61405b8f97d2.avif"
            alt="Event 1"
            className="w-40 sm:w-52 md:w-56 h-60 sm:h-72 rounded-[40px] object-cover shadow-lg"
          />
        </div>

        {/* Event 2 */}
        <div className="group relative transition-all bottom-[-20px] duration-300 hover:-translate-y-3">
          <img
            src="https://communionhub.org/static/media/moments-3.71fa7813105dddf86c48.avif"
            alt="Event 2"
            className="w-40 sm:w-52 md:w-56 h-60 sm:h-72 rounded-[40px] object-cover shadow-lg"
          />
        </div>

        {/* Event 3 */}
        <div className="group relative top-[-30px] transition-all duration-300 hover:-translate-y-3">
          <img
            src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif"
            alt="Event 3"
            className="w-40 sm:w-52 md:w-56 h-60 sm:h-72 rounded-[40px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
