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
          content="Ray Sun's portfolio - Senior Backend Engineer"
        />
        <meta
          name="keywords"
          content="Backend Engineer, C++, Golang, Distributed Systems"
        />
        {/* Social Media Meta Tags */}
        <meta property="og:title" content="Ray Sun | Senior Backend Engineer" />
        <meta property="og:description" content="Senior Backend Engineer" />
        <meta property="og:type" content="website" />
        {/* You can add more meta tags for SEO and social sharing */}
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* 后续会添加更多部分，如 ProjectsSection */}
      </main>
    </>
  );
};

export default Home;
