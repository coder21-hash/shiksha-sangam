import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/5" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm mb-8"
          >
            <BookOpen className="w-4 h-4" />
            <span>Personal Coaching Classes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            {t('hero_title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              {t('hero_cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              {t('hero_cta2')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
