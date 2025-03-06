'use client';
import { useState } from 'react';

import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        'This app has transformed the way we run campaigns. Highly recommended!',
      author: 'John Doe',
    },
    {
      quote:
        'The analytics dashboard is a game-changer. It’s so easy to track ROI!',
      author: 'Jane Smith',
    },
    {
      quote: 'Collaboration tools are fantastic. Our team loves it!',
      author: 'Mike Johnson',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              Campaign-Demo
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#features"
                className="text-gray-700 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
            <button className="md:hidden focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            Launch Your Campaigns with Ease
          </h1>
          <p className="text-xl mb-8">
            Empower your marketing efforts with our intuitive campaign
            management tools.
          </p>
          <Link
            href="#features"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Easy Campaign Creation</h3>
              <p className="text-gray-600">
                Create and manage campaigns in minutes with our user-friendly
                interface.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Track your campaign performance with real-time data and
                insights.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Collaboration Tools</h3>
              <p className="text-gray-600">
                Work seamlessly with your team using built-in collaboration
                features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="relative">
            {/* Carousel Slides */}
            <div className="overflow-hidden relative">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full flex-shrink-0 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                      <p className="font-bold">{testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to learn more? Reach out to us!
          </p>
          <form className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2023 Campaign-Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
