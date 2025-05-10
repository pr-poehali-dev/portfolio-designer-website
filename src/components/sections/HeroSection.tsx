
import React from 'react';
import DotPattern from '@/components/DotPattern';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <DotPattern />
      
      <motion.div 
        className="z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="block">Имя Фамилия</span>
          <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-light">/ Графический дизайнер</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-xl mx-auto font-light text-gray-700 mt-8">
          Создаю визуальные решения, которые выделяются и запоминаются
        </p>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a 
            href="#portfolio" 
            className="inline-block border-2 border-black px-6 py-3 text-black hover:bg-black hover:text-white transition-colors duration-300 font-light"
          >
            Смотреть работы
          </a>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.div 
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center items-start p-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-black"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
