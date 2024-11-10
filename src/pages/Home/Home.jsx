// src/pages/Home/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/HeroSection/HeroSection';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ray Sun | Senior Backend Engineer</title>
        <meta
          name="description"
          content="Ray Sun's portfolio - Senior Backend Engineer specializing in C++ and Golang"
        />
      </Helmet>

      <div className="flex flex-col">
        <section id="home" className="min-h-screen flex items-center">
          <HeroSection />
        </section>

        <section id="skills" className="min-h-screen bg-gray-50 py-20">
          <SkillsSection />
        </section>

        <section id="experience" className="min-h-screen py-20">
          <ExperienceSection />
        </section>

        <section id="projects" className="min-h-screen bg-gray-50 py-20">
          <ProjectsSection />
        </section>
      </div>
    </>
  );
};

export default Home;
