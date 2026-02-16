import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, FlaskConical, Briefcase } from 'lucide-react';

const ClassesSection = () => {
  const { t } = useLanguage();

  const classes = [
    { icon: Calculator, title: 'class_middle', desc: 'class_middle_desc', color: 'bg-blue-500/10 text-blue-600' },
    { icon: FlaskConical, title: 'class_high', desc: 'class_high_desc', color: 'bg-amber-500/10 text-amber-600' },
    { icon: Briefcase, title: 'class_higher', desc: 'class_higher_desc', color: 'bg-purple-500/10 text-purple-600' },
  ];

  return (
    <section id="classes" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            {t('classes_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {t('classes_subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-xl ${cls.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <cls.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(cls.title)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(cls.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
