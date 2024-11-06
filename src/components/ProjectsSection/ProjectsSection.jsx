import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      id: 'overload-protection',
      title: 'Overload Protection System',
      company: 'Ericsson',
      description: 'Distributed throttling system for 5G/4G networks',
      tech: ['C++', 'Distributed Systems'],
    },
    {
      id: 'sbi-optimization',
      title: 'SBI Interface Optimization',
      company: 'Ericsson',
      description: 'Performance optimization achieving 13% CPU improvement',
      tech: ['C++', 'Performance'],
    },
    {
      id: 'spectrum-sharing',
      title: 'Dynamic Spectrum Sharing',
      company: 'Huawei',
      description: 'Resource allocation system between LTE and NB-IoT',
      tech: ['C++', 'IoT'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            View All Projects
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-600 text-sm">{project.company}</p>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => navigate(`/projects/${project.id}#demo`)}
                  className="text-sm border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors"
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
