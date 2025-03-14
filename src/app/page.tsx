'use client';

import {
  Navbar,
  Hero,
  Features,
  Contact,
  Footer,
  Carousel,
} from '../components';

export default function Home() {
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
