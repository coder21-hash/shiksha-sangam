import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Award, Users } from 'lucide-react';
import fatherPhoto from '@/assets/father-photo.png';

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

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-8"
            >
              <Award className="w-4 h-4" />
              <span>{t('hero_badge')}</span>
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
              className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                {t('hero_cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+919624052715"
                className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +91 96240 52715
              </a>
            </motion.div>

            {/* Stats badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="px-4 py-2 rounded-lg border border-primary-foreground/20 text-primary-foreground/80 text-sm">
                {t('hero_stat1')}
              </span>
              <span className="px-4 py-2 rounded-lg border border-primary-foreground/20 text-primary-foreground/80 text-sm">
                {t('hero_stat2')}
              </span>
            </motion.div>
          </div>

          {/* Right - Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative bg-card rounded-2xl shadow-2xl p-4 sm:p-6 w-[280px] sm:w-[500px]">
              <div className="rounded-xl overflow-hidden bg-muted aspect-[3/4] mb-4 ">
                <img
                  src={fatherPhoto}
                  alt="Manish Shah - Director and Personal Tutor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-foreground">{t('hero_tutor_name')}</h3>
                <p className="text-muted-foreground text-sm mt-1">{t('hero_tutor_role')}</p>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
