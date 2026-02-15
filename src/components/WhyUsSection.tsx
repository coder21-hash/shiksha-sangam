import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  UserCheck, Star, ClipboardCheck, IndianRupee,
  HeartHandshake, Brain, BookOpenCheck, MessageCircleQuestion,
  Compass, Users, Laptop, LayoutGrid
} from 'lucide-react';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: UserCheck, title: 'why1_title', desc: 'why1_desc' },
    { icon: Star, title: 'why2_title', desc: 'why2_desc' },
    { icon: ClipboardCheck, title: 'why3_title', desc: 'why3_desc' },
    { icon: IndianRupee, title: 'why4_title', desc: 'why4_desc' },
    { icon: HeartHandshake, title: 'why5_title', desc: 'why5_desc' },
    { icon: Brain, title: 'why6_title', desc: 'why6_desc' },
    { icon: MessageCircleQuestion, title: 'why7_title', desc: 'why7_desc' },
    { icon: Compass, title: 'why8_title', desc: 'why8_desc' },
    { icon: Users, title: 'why9_title', desc: 'why9_desc' },
    { icon: Laptop, title: 'why10_title', desc: 'why10_desc' },
    { icon: LayoutGrid, title: 'why11_title', desc: 'why11_desc' },
    { icon: BookOpenCheck, title: 'why12_title', desc: 'why12_desc' },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground text-center mb-6"
        >
          {t('why_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          {t('why_subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
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
