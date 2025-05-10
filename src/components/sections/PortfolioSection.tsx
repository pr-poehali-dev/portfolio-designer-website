
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Ребрендинг Astra Coffee",
    year: "2023",
    description: "Разработка новой айдентики для сети кофеен, включая логотип, упаковку и маркетинговые материалы.",
    image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Брендинг"
  },
  {
    id: 2,
    title: "Каталог выставки современного искусства",
    year: "2022",
    description: "Дизайн и верстка каталога для ежегодной выставки современного искусства «Новые имена».",
    image: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Печатный дизайн"
  },
  {
    id: 3,
    title: "Сайт для студии архитектуры «Модерн»",
    year: "2023",
    description: "Разработка веб-дизайна и прототипов для студии архитектуры, с фокусом на демонстрацию проектов.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Веб-дизайн"
  },
  {
    id: 4,
    title: "Фирменный стиль Nova Tech",
    year: "2022",
    description: "Создание системы визуальной идентификации для технологического стартапа.",
    image: "https://images.unsplash.com/photo-1534670007418-bc50e48fe71e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Айдентика"
  }
];

const PortfolioSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Портфолио</h2>
          <p className="text-lg font-light mt-4 max-w-2xl mx-auto text-gray-700">
            Избранные проекты, которые демонстрируют мой подход к дизайну и решению задач клиентов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cursor-pointer group"
              onClick={() => openDialog(item)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transition-opacity duration-300">
                    Смотреть проект
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="text-sm font-light text-red-600">{item.category} / {item.year}</span>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="font-light text-gray-700 mt-2 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
          {selectedItem && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 bg-black">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/3 p-6 flex flex-col">
                <button 
                  onClick={() => setIsDialogOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <span className="text-sm font-light text-red-600">{selectedItem.category} / {selectedItem.year}</span>
                <h3 className="text-2xl font-bold mt-1">{selectedItem.title}</h3>
                <p className="font-light text-gray-700 mt-4 flex-grow">{selectedItem.description}</p>
                
                <a 
                  href="#contact" 
                  className="mt-6 inline-block border-2 border-black px-4 py-2 text-center text-black hover:bg-black hover:text-white transition-colors duration-300 font-light"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Обсудить похожий проект
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
