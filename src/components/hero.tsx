import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6">
          Launch Your Campaigns with Ease
        </h1>
        <p className="text-xl mb-8">
          Empower your marketing efforts with our intuitive campaign management
          tools.
        </p>
        <Link
          href="#features"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
