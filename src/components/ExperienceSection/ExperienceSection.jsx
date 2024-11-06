import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Back-end Software Developer',
      organization: 'Ericsson Communication Technology',
      period: '2020.06 - 2024.8',
      highlights: [
        'Implementing key functions of Access Control and Flow Control in 5G-Cloud environment',
        'Drive the performance optimization of SBI interface',
        'Technical mentoring and interview conducting',
      ],
    },
    {
      type: 'work',
      title: 'Back-end Software Engineer',
      organization: 'Huawei Shanghai Research Institute',
      period: '2019.04 - 2020.05',
      highlights: [
        'LTE system wireless uplink software development',
        'Awarded as excellent new graduate employee (2019)',
        'Awarded as future star of Huawei (2020)',
      ],
    },
    {
      type: 'education',
      title: 'Master of Information Technology',
      organization: 'University of Melbourne',
      period: 'February 2017 - December 2018',
      highlights: [],
    },
    {
      type: 'education',
      title: 'Bachelor of Electrical and Electronic Engineering',
      organization: 'University of Liverpool',
      period: 'September 2013 - June 2016',
      highlights: [],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 h-full">
                <div
                  className={`w-4 h-4 rounded-full ${
                    item.type === 'work' ? 'bg-blue-500' : 'bg-green-500'
                  } -ml-2`}
                ></div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-300 ml-0"></div>
                )}
              </div>

              {/* Content */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p
                      className={`text-lg ${
                        item.type === 'work'
                          ? 'text-blue-600'
                          : 'text-green-600'
                      }`}
                    >
                      {item.organization}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm">{item.period}</span>
                </div>

                {item.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
