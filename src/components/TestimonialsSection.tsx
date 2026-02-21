import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote_en: "My daughter's grades improved dramatically after joining Yash sir's tuition. The personal attention and structured approach made all the difference. Highly recommended!",
    quote_gu: "યશ સરના ટ્યુશનમાં જોડાયા પછી મારી દીકરીના ગ્રેડ નાટ્યાત્મક રીતે સુધર્યા. વ્યક્તિગત ધ્યાન અને વ્યવસ્થિત અભિગમે બધો ફરક પાડ્યો.",
    name: 'Priya Mehta',
    role_en: 'Parent – Class 10 • Maninagar',
    role_gu: 'વાલી – ધોરણ ૧૦ • મણિનગર',
  },
  {
    quote_en: "Three generations of our family have been taught by Yash sir. His dedication and commitment to each student is unmatched. My son secured 92% in board exams.",
    quote_gu: "અમારા પરિવારની ત્રણ પેઢીઓને યશ સરે ભણાવ્યા છે. દરેક વિદ્યાર્થી પ્રત્યેનું તેમનું સમર્પણ અજોડ છે. મારા દીકરાએ બોર્ડ પરીક્ષામાં ૯૨% મેળવ્યા.",
    name: 'Rajesh Patel',
    role_en: 'Parent – Class 12 Commerce • Isanpur',
    role_gu: 'વાલી – ધોરણ ૧૨ વાણિજ્ય • ઇસનપુર',
  },
  {
    quote_en: "Sir not only taught us academics but also values and discipline. The foundation he built helped me throughout engineering. Forever grateful!",
    quote_gu: "સરે અમને માત્ર અભ્યાસ જ નહીં પણ મૂલ્યો અને શિસ્ત પણ શીખવ્યા. તેમણે બનાવેલ પાયો એન્જિનિયરિંગ દરમ્યાન મને મદદ કરતો રહ્યો.",
    name: 'Anjali Shah',
    role_en: 'Former Student – Now Engineer • Vatva',
    role_gu: 'ભૂતપૂર્વ વિદ્યાર્થી – હવે એન્જિનિયર • વટવા',
  },
  {
    quote_en: "What I love most is the regular feedback. Yash sir always keeps us updated about our child's progress. It feels like a genuine partnership.",
    quote_gu: "મને સૌથી વધુ ગમે છે નિયમિત ફીડબેક. યશ સર હંમેશા અમારા બાળકની પ્રગતિ વિશે અપડેટ રાખે છે.",
    name: 'Kiran Joshi',
    role_en: 'Parent – Class 8 • Naroda',
    role_gu: 'વાલી – ધોરણ ૮ • નરોડા',
  },
  {
    quote_en: "The small batch size means my son actually gets his doubts cleared every class. I've seen other coaching centres where students just sit and listen. Here it's different.",
    quote_gu: "નાના બેચ સાઈઝનો મતલબ એ છે કે મારા દીકરાની દરેક ક્લાસમાં શંકાઓ દૂર થાય છે. અહીં અલગ જ છે.",
    name: 'Deepak Trivedi',
    role_en: 'Parent – Class 11 Commerce • Nikol',
    role_gu: 'વાલી – ધોરણ ૧૧ વાણિજ્ય • નિકોલ',
  },
  {
    quote_en: "Both my children study here and both have shown remarkable improvement. The Gujarati medium option is a big advantage for us. Excellent environment!",
    quote_gu: "મારા બંને બાળકો અહીં ભણે છે અને બંનેમાં નોંધપાત્ર સુધારો થયો છે. ગુજરાતી માધ્યમનો વિકલ્પ અમારા માટે મોટો ફાયદો છે.",
    name: 'Sunita Desai',
    role_en: 'Parent – Class 6 & 9 • Bapunagar',
    role_gu: 'વાલી – ધોરણ ૬ અને ૯ • બાપુનગર',
  },
];

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide uppercase"
          >
            {language === 'en' ? 'Testimonials' : 'પ્રશંસાપત્રો'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            {language === 'en' ? 'What Parents & Students Say' : 'વાલીઓ અને વિદ્યાર્થીઓ શું કહે છે'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {language === 'en'
              ? "Real words from real families who have trusted Yash Personal Tuition with their children's education."
              : 'સાચા પરિવારોના સાચા શબ્દો જેમણે તેમના બાળકોના શિક્ષણ માટે યશ પર્સનલ ટ્યુશન પર ભરોસો કર્યો છે.'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all border border-border/50 group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                "{language === 'en' ? item.quote_en : item.quote_gu}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {language === 'en' ? item.role_en : item.role_gu}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
