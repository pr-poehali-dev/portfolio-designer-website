
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { toast } from "@/hooks/use-toast";

const socialLinks = [
  { name: 'Behance', icon: 'Figma', url: 'https://behance.net' },
  { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
  { name: 'Dribbble', icon: 'Dribbble', url: 'https://dribbble.com' },
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Связаться со мной</h2>
          <p className="text-lg font-light mt-4 max-w-2xl mx-auto text-gray-700">
            Готовы обсудить ваш проект? Заполните форму ниже или напишите мне напрямую
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-light mb-2">Имя</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                  className="border-gray-300 focus:border-black focus:ring-black font-light"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-light mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="border-gray-300 focus:border-black focus:ring-black font-light"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-light mb-2">Сообщение</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о вашем проекте..."
                  required
                  className="min-h-[150px] border-gray-300 focus:border-black focus:ring-black font-light"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-red-600 text-white font-light transition-colors"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:pl-8"
          >
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            
            <div className="space-y-4 font-light">
              <p className="flex items-center">
                <Icon name="Mail" className="mr-3 text-red-600" size={20} />
                <a href="mailto:hello@designer.com" className="hover:text-red-600 transition-colors">
                  hello@designer.com
                </a>
              </p>
              
              <p className="flex items-center">
                <Icon name="Phone" className="mr-3 text-red-600" size={20} />
                <a href="tel:+79001234567" className="hover:text-red-600 transition-colors">
                  +7 (900) 123-45-67
                </a>
              </p>
              
              <p className="flex items-center">
                <Icon name="MapPin" className="mr-3 text-red-600" size={20} />
                <span>Москва, Россия</span>
              </p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-4">Социальные сети</h4>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 hover:border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 group"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <Icon name={link.icon} size={20} className="group-hover:text-white transition-colors" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
