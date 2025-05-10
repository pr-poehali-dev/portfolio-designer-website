
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">О себе</h2>
            
            <p className="text-lg font-light mb-6 text-gray-800">
              Я графический дизайнер с более чем 5-летним опытом работы в сфере брендинга и айдентики. Моя страсть — создавать визуальные решения, которые помогают бизнесу выделиться и запомниться аудитории.
            </p>
            
            <p className="text-lg font-light mb-8 text-gray-800">
              Мой подход основан на минимализме, точности и внимании к деталям. Я верю, что лучший дизайн тот, который решает конкретную задачу наиболее элегантным способом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Специализация</h3>
                <ul className="list-disc list-inside font-light text-gray-800">
                  <li>Брендинг и айдентика</li>
                  <li>Печатный дизайн</li>
                  <li>Типографика</li>
                  <li>Веб-дизайн</li>
                </ul>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Образование</h3>
                <p className="font-light text-gray-800">
                  Московский политехнический университет<br />
                  Факультет графического дизайна<br />
                  2015-2019
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-black transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Портрет дизайнера"
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
