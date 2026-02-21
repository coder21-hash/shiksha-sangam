import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote_en: "My daughter's grades improved dramatically after joining Manish sir's Tuition. The personal attention and structured approach made all the difference. Highly recommended!",
    quote_gu: "મનીષ સરના ટ્યુશનમાં જોડાયા પછી મારી દીકરીના ગ્રેડ નાટ્યાત્મક રીતે સુધર્યા. વ્યક્તિગત ધ્યાન અને વ્યવસ્થિત અભિગમે બધો ફરક પાડ્યો.",
    name: 'Priya Mehta',
    role_en: 'Parent – Class 10 • Maninagar',
    role_gu: 'વાલી – ધોરણ ૧૦ • મણિનગર',
  },
  {
    quote_en: "Manish Sir’s guidance has made a remarkable difference in my son’s academic journey. His personal attention and disciplined teaching approach helped my son secure 92% in board exams. We are truly thankful for his continuous support.",
    quote_gu: "મનીષ સરના માર્ગદર્શનથી મારા દીકરાની શૈક્ષણિક યાત્રામાં નોંધપાત્ર સુધારો થયો છે. તેમનું વ્યક્તિગત ધ્યાન અને શિસ્તબદ્ધ શિક્ષણ અભિગમે મારા દીકરાને બોર્ડની પરીક્ષામાં ૯૨% મેળવવામાં મદદ કરી. અમે તેમના સતત સમર્થન માટે ખરેખર આભારી છીએ.",
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
    quote_en: "What I love most is the regular feedback. Manish sir always keeps us updated about our child's progress. It feels like a genuine partnership.",
    quote_gu: "મને સૌથી વધુ ગમે છે નિયમિત ફીડબેક. મનીષ સર હંમેશા અમારા બાળકની પ્રગતિ વિશે અપડેટ રાખે છે.",
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
              ? "Feedback that reflects the learning experience at Yash Personal Tuition."
              : "યશ પર્સનલ ટ્યુશનમાં મળતા શિક્ષણના અનુભવને દર્શાવતું પ્રતિસાદ."}
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

        {/* "And many more" indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-3">
            {/* Stacked avatar circles */}
            {['🧑', '👩', '👨', '👧', '🧒'].map((emoji, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-base"
                style={{ marginLeft: i > 0 ? '-10px' : '0', zIndex: 5 - i }}
              >
                {emoji}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            {language === 'en'
              ? '…and 500+ more happy families trust Manish sir.'
              : '…અને ૫૦૦+ થી વધુ ખુશ પરિવારો મનીષ સર પર ભરોસો કરે છે.'}
          </p>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}

            <span className="ml-2 text-sm text-muted-foreground">
              {language === 'en' ? '4.9 average rating' : '૪.૯ સરેરાશ રેટિંગ'}
            </span>
          </div>
        </motion.div>

      </div>
    </section>

  );
};

export default TestimonialsSection;
