import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Rui Sun</h1>
          <h2 className="text-2xl text-gray-600 mb-8">
            Senior Backend Engineer
            <span className="block text-xl mt-2">
              Distributed Systems & Telecom Infrastructure
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Expert in C++, Erlang, and High-Performance Computing
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => (window.location.href = '/projects')}
            >
              View Projects
            </button>
            <button
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
              onClick={() => {
                /* 添加简历下载逻辑 */
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
