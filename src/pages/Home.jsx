import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center">
      <div className="mt-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Join and explore faith-based events and community support.
        </p>
      </div>
      <HeroSection />
    </div>
  );
}
