// src/pages/Home/Home.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
};

export default Home;
