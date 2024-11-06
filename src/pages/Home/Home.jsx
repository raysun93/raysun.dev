// src/pages/Home/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="py-12">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Ray Sun</h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer & Cloud Engineer
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Featured Skills */}
        <div className="py-12">
          <h2 className="text-2xl font-bold mb-6">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard
              title="Frontend"
              items={['React', 'TailwindCSS', 'JavaScript']}
            />
            <SkillCard title="Backend" items={['Node.js', 'Python', 'Java']} />
            <SkillCard title="Cloud" items={['AWS', 'Docker', 'DevOps']} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ title, items }) => {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <h3 className="font-bold mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
