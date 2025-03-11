import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center px-4 sm:px-8">
      <div className="mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mt-4">
          Join and explore faith-based events and community support.
        </p>
      </div>
      <HeroSection />
    </div>
  );
}
