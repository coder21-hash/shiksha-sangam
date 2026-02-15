import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'gu';

interface Translations {
  [key: string]: {
    en: string;
    gu: string;
  };
}

const translations: Translations = {
  // Navbar
  nav_home: { en: 'Home', gu: 'હોમ' },
  nav_about: { en: 'About', gu: 'અમારા વિશે' },
  nav_classes: { en: 'Classes', gu: 'વર્ગો' },
  nav_why_us: { en: 'Why Us', gu: 'અમને શા માટે?' },
  nav_contact: { en: 'Contact', gu: 'સંપર્ક' },
  nav_lang: { en: 'ગુજરાતી', gu: 'English' },

  // Hero
  hero_title: { en: 'Unlock Your Child\'s True Potential', gu: 'તમારા બાળકની સાચી ક્ષમતા અનલૉક કરો' },
  hero_subtitle: { en: 'Personalized coaching that transforms learning into a joyful journey. Expert guidance for every student, every subject.', gu: 'વ્યક્તિગત કોચિંગ જે શીખવાને આનંદદાયક પ્રવાસમાં ફેરવે છે. દરેક વિદ્યાર્થી, દરેક વિષય માટે નિષ્ણાત માર્ગદર્શન.' },
  hero_cta: { en: 'Enroll Now', gu: 'હમણાં નોંધણી કરો' },
  hero_cta2: { en: 'Learn More', gu: 'વધુ જાણો' },

  // About
  about_title: { en: 'About Our Coaching', gu: 'અમારા કોચિંગ વિશે' },
  about_desc: { en: 'With years of dedicated teaching experience, we provide personalized attention to every student. Our mission is to build strong fundamentals and help students achieve academic excellence through patient, one-on-one guidance.', gu: 'વર્ષોના સમર્પિત શિક્ષણ અનુભવ સાથે, અમે દરેક વિદ્યાર્થીને વ્યક્તિગત ધ્યાન આપીએ છીએ. અમારું ધ્યેય મજબૂત પાયા બનાવવાનું અને ધીરજપૂર્ણ, વ્યક્તિગત માર્ગદર્શન દ્વારા વિદ્યાર્થીઓને શૈક્ષણિક ઉત્કૃષ્ટતા પ્રાપ્ત કરવામાં મદદ કરવાનું છે.' },
  about_exp: { en: 'Years of Experience', gu: 'વર્ષોનો અનુભવ' },
  about_students: { en: 'Students Taught', gu: 'ભણાવેલ વિદ્યાર્થીઓ' },
  about_results: { en: 'Success Rate', gu: 'સફળતા દર' },

  // Classes
  classes_title: { en: 'Classes We Offer', gu: 'અમે આપતા વર્ગો' },
  classes_subtitle: { en: 'Comprehensive coaching for all standards', gu: 'બધા ધોરણો માટે વ્યાપક કોચિંગ' },
  class_primary: { en: 'Primary (1-5)', gu: 'પ્રાથમિક (૧-૫)' },
  class_primary_desc: { en: 'Building strong foundations in Mathematics, English, Science and Gujarati with fun, interactive methods.', gu: 'મજા અને ઇન્ટરેક્ટિવ પદ્ધતિઓ સાથે ગણિત, અંગ્રેજી, વિજ્ઞાન અને ગુજરાતીમાં મજબૂત પાયા બનાવવો.' },
  class_middle: { en: 'Middle School (6-8)', gu: 'માધ્યમિક (૬-૮)' },
  class_middle_desc: { en: 'Strengthening concepts in all core subjects with structured study plans and regular assessments.', gu: 'સંરચિત અભ્યાસ યોજનાઓ અને નિયમિત મૂલ્યાંકન સાથે બધા મુખ્ય વિષયોમાં ખ્યાલો મજબૂત કરવા.' },
  class_high: { en: 'High School (9-10)', gu: 'ઉચ્ચ માધ્યમિક (૯-૧૦)' },
  class_high_desc: { en: 'Board exam preparation with focused coaching, previous year papers, and performance tracking.', gu: 'કેન્દ્રિત કોચિંગ, પાછલા વર્ષના પેપર્સ અને પ્રદર્શન ટ્રેકિંગ સાથે બોર્ડ પરીક્ષાની તૈયારી.' },
  class_higher: { en: 'Higher Secondary (11-12)', gu: 'ઉચ્ચતર માધ્યમિક (૧૧-૧૨)' },
  class_higher_desc: { en: 'Specialized coaching for Science and Commerce streams with competitive exam guidance.', gu: 'સ્પર્ધાત્મક પરીક્ષા માર્ગદર્શન સાથે વિજ્ઞાન અને વાણિજ્ય પ્રવાહ માટે વિશેષ કોચિંગ.' },

  // Why Us
  why_title: { en: 'Why Choose Us', gu: 'અમને શા માટે પસંદ કરો' },
  why1_title: { en: 'Personal Attention', gu: 'વ્યક્તિગત ધ્યાન' },
  why1_desc: { en: 'Small batch sizes ensuring every student gets individual attention and doubt clearing.', gu: 'દરેક વિદ્યાર્થીને વ્યક્તિગત ધ્યાન અને શંકા નિવારણ મળે તે માટે નાના બેચ સાઈઝ.' },
  why2_title: { en: 'Experienced Teaching', gu: 'અનુભવી શિક્ષણ' },
  why2_desc: { en: 'Proven teaching methodologies refined over years of experience for maximum understanding.', gu: 'મહત્તમ સમજણ માટે વર્ષોના અનુભવ સાથે પરિશુદ્ધ સાબિત શિક્ષણ પદ્ધતિઓ.' },
  why3_title: { en: 'Regular Tests', gu: 'નિયમિત પરીક્ષાઓ' },
  why3_desc: { en: 'Weekly tests and assessments to track progress and identify areas of improvement.', gu: 'પ્રગતિ ટ્રેક કરવા અને સુધારણાના ક્ષેત્રો ઓળખવા માટે સાપ્તાહિક પરીક્ષાઓ અને મૂલ્યાંકન.' },
  why4_title: { en: 'Affordable Fees', gu: 'પોસાય તેવી ફી' },
  why4_desc: { en: 'Quality education at reasonable fees. Education should be accessible to everyone.', gu: 'વાજબી ફી પર ગુણવત્તાયુક્ત શિક્ષણ. શિક્ષણ દરેક માટે સુલભ હોવું જોઈએ.' },

  // Contact Form
  contact_title: { en: 'Enquiry Form', gu: 'પૂછપરછ ફોર્મ' },
  contact_subtitle: { en: 'Have questions? Fill in the form and we\'ll get back to you shortly.', gu: 'પ્રશ્નો છે? ફોર્મ ભરો અને અમે ટૂંક સમયમાં તમને સંપર્ક કરીશું.' },
  form_parent_name: { en: 'Parent / Guardian Name', gu: 'વાલી / માતાપિતા નામ' },
  form_student_name: { en: 'Student Name', gu: 'વિદ્યાર્થીનું નામ' },
  form_phone: { en: 'Phone Number', gu: 'ફોન નંબર' },
  form_standard: { en: 'Select Standard', gu: 'ધોરણ પસંદ કરો' },
  form_message: { en: 'Your Message / Query', gu: 'તમારો સંદેશ / પ્રશ્ન' },
  form_submit: { en: 'Send Enquiry', gu: 'પૂછપરછ મોકલો' },
  form_success: { en: 'Your enquiry has been sent successfully via WhatsApp!', gu: 'તમારી પૂછપરછ WhatsApp દ્વારા સફળતાપૂર્વક મોકલવામાં આવી છે!' },

  // Standards for dropdown
  std_1: { en: 'Standard 1', gu: 'ધોરણ ૧' },
  std_2: { en: 'Standard 2', gu: 'ધોરણ ૨' },
  std_3: { en: 'Standard 3', gu: 'ધોરણ ૩' },
  std_4: { en: 'Standard 4', gu: 'ધોરણ ૪' },
  std_5: { en: 'Standard 5', gu: 'ધોરણ ૫' },
  std_6: { en: 'Standard 6', gu: 'ધોરણ ૬' },
  std_7: { en: 'Standard 7', gu: 'ધોરણ ૭' },
  std_8: { en: 'Standard 8', gu: 'ધોરણ ૮' },
  std_9: { en: 'Standard 9', gu: 'ધોરણ ૯' },
  std_10: { en: 'Standard 10', gu: 'ધોરણ ૧૦' },
  std_11_sci: { en: 'Standard 11 - Science', gu: 'ધોરણ ૧૧ - વિજ્ઞાન' },
  std_11_com: { en: 'Standard 11 - Commerce', gu: 'ધોરણ ૧૧ - વાણિજ્ય' },
  std_12_sci: { en: 'Standard 12 - Science', gu: 'ધોરણ ૧૨ - વિજ્ઞાન' },
  std_12_com: { en: 'Standard 12 - Commerce', gu: 'ધોરણ ૧૨ - વાણિજ્ય' },

  // Footer
  footer_rights: { en: 'All Rights Reserved', gu: 'સર્વ હક્ક અમારી પાસે રાખેલ છે' },
  footer_address: { en: 'Contact Us', gu: 'અમારો સંપર્ક' },
  footer_phone: { en: 'Phone', gu: 'ફોન' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'gu' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
