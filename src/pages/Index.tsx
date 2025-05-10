
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
