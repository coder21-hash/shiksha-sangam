import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { UserCheck, Star, ClipboardCheck, IndianRupee } from 'lucide-react';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: UserCheck, title: 'why1_title', desc: 'why1_desc' },
    { icon: Star, title: 'why2_title', desc: 'why2_desc' },
    { icon: ClipboardCheck, title: 'why3_title', desc: 'why3_desc' },
    { icon: IndianRupee, title: 'why4_title', desc: 'why4_desc' },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground text-center mb-16"
        >
          {t('why_title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(reason.title)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(reason.desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
