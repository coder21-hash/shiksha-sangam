import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, GraduationCap, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'nav_home', href: '#home' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_classes', href: '#classes' },
    { key: 'nav_why_us', href: '#why-us' },
    { key: 'nav_testimonials', href: '#testimonials' },
    { key: 'nav_contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground hidden sm:block">
              {language === 'en' ? 'Yash Personal Tuition' : 'યશ પર્સનલ ટ્યુશન'}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {t(item.key)}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {t('nav_lang')}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-accent/20 text-accent-foreground"
            >
              <Globe className="w-3.5 h-3.5" />
              {t('nav_lang')}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
