import { ArrowRight, Users, Atom, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
          Why Communion Rocks!
        </h2>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-lg leading-relaxed mb-6">
            Communion is not just another platform—it's a vibrant space that
            unites diverse faiths, beliefs, and traditions. By promoting
            collaboration and connection, we're fostering a world where
            differences become strengths and unity becomes the norm.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:underline"
          >
            Why Join Us? <ArrowRight size={20} />
          </a>
        </div>

        {/* Feature Cards - Responsive Layout */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch justify-center">
          <FeatureCard
            icon={<Users size={28} />}
            title="Unifying Communities"
            description="Communion bridges diverse religious communities, becoming the social..."
          />
          <FeatureCard
            icon={<Atom size={28} />}
            title="Innovative and Fun"
            description="Experience faith in a fresh way through our interactive features..."
          />
          <FeatureCard
            icon={<TrendingUp size={30} />}
            title="Promoting Unity"
            description="We foster understanding and harmony between different faith communities..."
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-start w-full max-w-md md:max-w-xs">
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <a
        href="#"
        className="mt-4 flex items-center gap-2 text-white font-semibold border border-white rounded-full px-4 py-2 hover:bg-gray-800"
      >
        Learn More <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default About;
