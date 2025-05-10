
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { title: "Главная", href: "#hero" },
    { title: "О себе", href: "#about" },
    { title: "Портфолио", href: "#portfolio" },
    { title: "Услуги", href: "#services" },
    { title: "Контакты", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Десктопная навигация */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollPosition > 50 ? "bg-white shadow-sm py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="font-bold text-lg md:text-xl">
            ДИЗАЙНЕР
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black hover:text-red-600 transition-colors font-light"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Мобильное меню-бургер */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-20 pb-6 px-6 md:hidden">
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xl text-black hover:text-red-600 transition-colors font-light"
                onClick={() => {
                  toggleMenu();
                  setTimeout(() => {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}

      <main>{children}</main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="font-bold text-xl">ДИЗАЙНЕР</p>
              <p className="font-light mt-2 opacity-70">Графический дизайн. Брендинг. Айдентика.</p>
            </div>
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="font-light text-white hover:text-red-500 transition-colors">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/20 text-center font-light opacity-70 text-sm">
            <p>© {new Date().getFullYear()} Имя Фамилия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
