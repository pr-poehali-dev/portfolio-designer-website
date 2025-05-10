
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: 'Palette',
    title: 'Брендинг',
    description: 'Разработка айдентики бренда, логотипов и визуальных систем, которые выделяют ваш бизнес среди конкурентов.'
  },
  {
    icon: 'FileType',
    title: 'Печатный дизайн',
    description: 'Создание печатных материалов: от визиток и брошюр до плакатов и многостраничных изданий с вниманием к деталям.'
  },
  {
    icon: 'LayoutTemplate',
    title: 'Веб-дизайн',
    description: 'Проектирование адаптивных интерфейсов и визуальных решений для сайтов, которые отвечают целям вашего бизнеса.'
  },
  {
    icon: 'Package',
    title: 'Дизайн упаковки',
    description: 'Разработка эффективной упаковки, которая привлекает внимание на полке и отражает ценности вашего продукта.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Услуги</h2>
          <p className="text-lg font-light mt-4 max-w-2xl mx-auto text-gray-700">
            Предлагаю комплексные дизайн-решения для развития вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 md:p-8 border-2 border-gray-200 hover:border-black transition-colors duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white">
                  <Icon name={service.icon} size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="font-light text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block border-2 border-black px-6 py-3 text-black hover:bg-black hover:text-white transition-colors duration-300 font-light"
          >
            Обсудить проект
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
