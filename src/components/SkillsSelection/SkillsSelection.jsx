import React from 'react';

const SkillsSection = () => {
  const skills = {
    Core: [
      { name: 'C++', level: 'Expert' },
      { name: 'Golang', level: 'Proficient' },
      { name: 'Distributed Systems', level: 'Expert' },
    ],
    'Backend Development': [
      { name: 'High Concurrency', level: 'Expert' },
      { name: 'System Design', level: 'Expert' },
      { name: 'Performance Optimization', level: 'Expert' },
    ],
    'Tools & Technologies': [
      { name: 'Git', level: 'Proficient' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'Load Balancing', level: 'Expert' },
    ],
    'Other Skills': [
      { name: 'Erlang', level: 'Proficient' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'Technical Leadership', level: 'Proficient' },
    ],
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {category}
              </h3>
              <ul className="space-y-3">
                {skillList.map((skill, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <span
                      className={`text-sm px-2 py-1 rounded ${
                        skill.level === 'Expert'
                          ? 'bg-blue-100 text-blue-700'
                          : skill.level === 'Proficient'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
