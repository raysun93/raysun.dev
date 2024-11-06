import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Rui Sun</h1>

          <h2 className="text-2xl text-gray-800 mb-6">
            Senior Backend Engineer
          </h2>

          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mx-2 font-medium">
              C++
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mx-2 font-medium">
              Golang
            </span>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Specializing in high-performance distributed systems
            <br />
            with 5+ years of experience in telecom infrastructure
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
