import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: '15+', key: 'about_exp' },
    { icon: Users, value: '500+', key: 'about_students' },
    { icon: TrendingUp, value: '95%', key: 'about_results' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
          >
            {t('about_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed mb-16"
          >
            {t('about_desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/15 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{t(stat.key)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
