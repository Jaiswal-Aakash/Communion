import { useState } from "react";
import { useForm } from "react-hook-form";

const EventForm = ({ onEventCreate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  // const [location, setLocation] = useState("");

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    const newEvent = {
      id: Date.now(), // Unique event ID
      title: data.title,
      format: data.format,
      date: data.startDate,
      time: data.startTime,
      location: data.location,
      tag: data.type || "FREE",
      category: data.category || "Social",
      image: image || "/default-event.jpg", // Use a default image if none is uploaded
    };

    onEventCreate(newEvent); // Append to event list
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create an Event</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Event Title */}
        <div>
          <label className="block font-semibold">Event Title*</label>
          <input
            type="text"
            placeholder="Give your event a name"
            {...register("title", { required: "Event title is required" })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Event Format */}
        <div>
          <label className="block font-semibold">Event Format</label>
          <select
            {...register("format")}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="In-Person">Select Event Format</option>
            <option value="In-Person">In-Person</option>
            <option value="Online">Online</option>
            <option value="Online">Hybrid</option>
          </select>
        </div>
        {/* event link */}
        <div>
          <label className="block font-semibold">Online Event Link*</label>
          <input
            type="text"
            placeholder="e.g., https://zoom.us/j/1234567890"
            {...register("title", { required: "Event title is required" })}
            className="w-full p-2 border rounded mt-1"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        {/* Date and Time */}
        <div>
          <label className="block font-semibold">Start Date and Time*</label>
          <div className="flex space-x-2">
            <input
              type="date"
              {...register("startDate", { required: "Start date is required" })}
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="time"
              {...register("startTime", { required: "Start time is required" })}
              className="w-1/2 p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold">End Date and Time*</label>
          <div className="flex space-x-2">
            <input
              type="date"
              {...register("endDate", { required: "End date is required" })}
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="time"
              {...register("endTime", { required: "End time is required" })}
              className="w-1/2 p-2 border rounded"
            />
          </div>
        </div>

        {/* Timezone */}
        <div>
          <label className="block font-semibold">Timezone</label>
          <select
            {...register("timezone")}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="GMT+5:30">GMT+5:30 (India Standard Time)</option>
            <option value="GMT+0">GMT+0</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold">Location*</label>
          <input
            type="text"
            placeholder="Search for a location"
            {...register("location", { required: "Location is required" })}
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block font-bold text-lg mb-2">Event Detail*</label>
          <label className="block font-semibold">Event Type</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" value="Free" {...register("type")} />
              <span>Free</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" value="Paid" {...register("type")} />
              <span>Paid</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" value="Donation" {...register("type")} />
              <span>Donation</span>
            </label>
          </div>
        </div>

        {/* Event Capacity */}
        <div>
          <label className="block font-semibold">Event Capacity</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" value="Unlimited" {...register("capacity")} />
              <span>Unlimited</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" value="Limited" {...register("capacity")} />
              <span>Limited</span>
            </label>
          </div>
        </div>

        {/* Categories */}
        <div>
          <label className="block font-semibold">Categories*</label>
          <div className="flex flex-wrap gap-2">
            {[
              "Business",
              "Community",
              "Professional",
              "Workshops",
              "Volunteering",
            ].map((category) => (
              <label
                key={category}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                <input
                  type="checkbox"
                  {...register("categories")}
                  value={category}
                  className="mr-1"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            {...register("description")}
            className="w-full p-2 border rounded mt-1"
            placeholder="Describe your event..."
            rows="3"
          ></textarea>
        </div>

        {/* Event Image */}
        <div>
          <label className="block font-semibold">Event Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            className="w-full p-2 border rounded mt-1"
          />
          {image && (
            <img
              src={image}
              alt="Event Preview"
              className="mt-2 w-full h-32 object-cover rounded-md shadow-md"
            />
          )}
        </div>

        {/* Visibility Settings */}
        <div>
          <label className="block font-semibold">Visibility Settings</label>
          <select
            {...register("visibility")}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="Anyone">Anyone</option>
            <option value="Invite Only">Invite Only</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Create Event
          </button>
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded-lg"
          >
            Back to Events
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
