import React from 'react';

const Features: React.FC = () => {
  return (
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
              Track your campaign performance with real-time data and insights.
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
  );
};

export default Features;
