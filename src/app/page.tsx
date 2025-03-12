'use client';
import { useState } from 'react';
import {
  Navbar,
  Hero,
  Features,
  Contact,
  Footer,
  Carousel,
} from './components';
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
      <Navbar />
      <Hero />
      <Features />
      <Carousel testimonials={testimonials} />
      <Contact />
      <Footer />
    </div>
  );
}
