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
  hero_badge: { en: 'Trusted by Parents for Personal Guidance', gu: 'વ્યક્તિગત માર્ગદર્શન માટે વાલીઓનો ભરોસો' },
  hero_title: { en: 'Personal Tuition That Builds Marks, Confidence and Discipline', gu: 'વ્યક્તિગત ટ્યુશન જે માર્ક્સ, આત્મવિશ્વાસ અને શિસ્ત બનાવે છે' },
  hero_subtitle: { en: 'Focused one-to-one coaching for Gujarati and English medium students with regular tests, personal tracking and parent updates.', gu: 'ગુજરાતી અને અંગ્રેજી માધ્યમના વિદ્યાર્થીઓ માટે નિયમિત ટેસ્ટ, વ્યક્તિગત ટ્રેકિંગ અને વાલી અપડેટ્સ સાથે કેન્દ્રિત વન-ટુ-વન કોચિંગ.' },
  hero_cta: { en: 'Start Inquiry', gu: 'પૂછપરછ શરૂ કરો' },
  hero_cta2: { en: 'Learn More', gu: 'વધુ જાણો' },
  hero_stat1: { en: '30+ years of teaching experience', gu: '૩૦+ વર્ષનો શિક્ષણ અનુભવ' },
  hero_stat2: { en: '500+ students mentored', gu: '૫૦૦+ વિદ્યાર્થીઓને માર્ગદર્શન' },
  hero_tutor_name: { en: 'Manish Shah', gu: 'મનીષ શાહ' },
  hero_tutor_role: { en: 'Director & Personal Tutor', gu: 'ડિરેક્ટર અને વ્યક્તિગત ટ્યુટર' },

  // About
  about_title: { en: 'About Our Coaching', gu: 'અમારા કોચિંગ વિશે' },
  about_desc: { en: 'With over 30 years of dedicated teaching experience, we provide personalized attention to every student. Our mission is to build strong fundamentals and help students achieve academic excellence through patient, one-on-one guidance. We offer coaching in both Gujarati and English medium.', gu: '૩૦ વર્ષથી વધુના સમર્પિત શિક્ષણ અનુભવ સાથે, અમે દરેક વિદ્યાર્થીને વ્યક્તિગત ધ્યાન આપીએ છીએ. અમારું ધ્યેય મજબૂત પાયા બનાવવાનું અને ધીરજપૂર્ણ, વ્યક્તિગત માર્ગદર્શન દ્વારા વિદ્યાર્થીઓને શૈક્ષણિક ઉત્કૃષ્ટતા પ્રાપ્ત કરવામાં મદદ કરવાનું છે. અમે ગુજરાતી અને અંગ્રેજી બંને માધ્યમમાં કોચિંગ આપીએ છીએ.' },
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
  class_higher_desc: { en: 'Specialized coaching for Commerce stream with expert guidance in Accounts, Economics, and Business Studies.', gu: 'એકાઉન્ટ્સ, ઇકોનોમિક્સ અને બિઝનેસ સ્ટડીઝમાં નિષ્ણાત માર્ગદર્શન સાથે કોમર્સ સ્ટ્રીમ માટે વિશેષ કોચિંગ.' },

  // Why Us
  why_title: { en: 'Why Choose Us', gu: 'અમને શા માટે પસંદ કરો' },
  why_subtitle: { en: 'We go beyond textbooks to build confident, disciplined and successful students.', gu: 'અમે આત્મવિશ્વાસુ, શિસ્તબદ્ધ અને સફળ વિદ્યાર્થીઓ બનાવવા પુસ્તકોથી આગળ જઈએ છીએ.' },
  why1_title: { en: 'Personal Attention', gu: 'વ્યક્તિગત ધ્યાન' },
  why1_desc: { en: 'Small batch sizes ensuring every student gets individual attention and doubt clearing.', gu: 'દરેક વિદ્યાર્થીને વ્યક્તિગત ધ્યાન અને શંકા નિવારણ મળે તે માટે નાના બેચ સાઈઝ.' },
  why2_title: { en: 'Experienced Teaching', gu: 'અનુભવી શિક્ષણ' },
  why2_desc: { en: 'Over 30 years of proven teaching methodologies refined for maximum understanding.', gu: '૩૦ વર્ષથી વધુના સાબિત શિક્ષણ પદ્ધતિઓ મહત્તમ સમજણ માટે પરિશુદ્ધ.' },
  why3_title: { en: 'Regular Test Series', gu: 'નિયમિત ટેસ્ટ સિરીઝ' },
  why3_desc: { en: 'Weekly tests and performance analysis to track progress and identify areas for improvement.', gu: 'પ્રગતિ ટ્રેક કરવા અને સુધારણાના ક્ષેત્રો ઓળખવા માટે સાપ્તાહિક ટેસ્ટ અને પ્રદર્શન વિશ્લેષણ.' },
  why4_title: { en: 'Affordable Fees', gu: 'પોસાય તેવી ફી' },
  why4_desc: { en: 'Quality education at reasonable fees. Education should be accessible to everyone.', gu: 'વાજબી ફી પર ગુણવત્તાયુક્ત શિક્ષણ. શિક્ષણ દરેક માટે સુલભ હોવું જોઈએ.' },
  why5_title: { en: 'Extra Support for Weak Students', gu: 'નબળા વિદ્યાર્થીઓ માટે વધારાનો ટેકો' },
  why5_desc: { en: 'Special focus on weak topics and students with low confidence. We build them up step by step.', gu: 'નબળા વિષયો અને ઓછા આત્મવિશ્વાસ ધરાવતા વિદ્યાર્થીઓ પર વિશેષ ધ્યાન. અમે તેમને પગલે પગલે આગળ લઈ જઈએ છીએ.' },
  why6_title: { en: 'Personalized Mentorship', gu: 'વ્યક્તિગત માર્ગદર્શન' },
  why6_desc: { en: 'Each student gets a tailored learning plan based on their strengths and areas to improve.', gu: 'દરેક વિદ્યાર્થીને તેમની શક્તિઓ અને સુધારણાના ક્ષેત્રો પર આધારિત અનુકૂળ અભ્યાસ યોજના મળે છે.' },
  why7_title: { en: 'Doubt-Solving Sessions', gu: 'શંકા-નિવારણ સત્રો' },
  why7_desc: { en: 'Dedicated doubt-clearing sessions so no question goes unanswered.', gu: 'સમર્પિત શંકા-નિવારણ સત્રો જેથી કોઈ પ્રશ્ન અનુત્તર ન રહે.' },
  why8_title: { en: 'Career Guidance', gu: 'કારકિર્દી માર્ગદર્શન' },
  why8_desc: { en: 'Career counseling and guidance to help students choose the right path after 10th and 12th.', gu: '૧૦મા અને ૧૨મા પછી યોગ્ય માર્ગ પસંદ કરવામાં વિદ્યાર્થીઓને મદદ કરવા કારકિર્દી માર્ગદર્શન.' },
  why9_title: { en: 'Parent-Teacher Interaction', gu: 'વાલી-શિક્ષક સંવાદ' },
  why9_desc: { en: 'Regular parent-teacher meetings to discuss student progress and areas of concern.', gu: 'વિદ્યાર્થીની પ્રગતિ અને ચિંતાના ક્ષેત્રોની ચર્ચા માટે નિયમિત વાલી-શિક્ષક બેઠકો.' },
  why10_title: { en: 'Digital Learning Support', gu: 'ડિજિટલ લર્નિંગ સપોર્ટ' },
  why10_desc: { en: 'Study notes, PDFs, and digital materials provided for revision and self-study.', gu: 'રિવિઝન અને સ્વ-અભ્યાસ માટે અભ્યાસ નોટ્સ, PDF અને ડિજિટલ સામગ્રી પ્રદાન.' },
  why11_title: { en: 'Limited Batch Size', gu: 'મર્યાદિત બેચ સાઈઝ' },
  why11_desc: { en: 'We keep batch sizes small to ensure maximum focus and personal engagement with every student.', gu: 'દરેક વિદ્યાર્થી સાથે મહત્તમ ધ્યાન અને વ્યક્તિગત સંલગ્નતા માટે બેચ સાઈઝ નાની રાખીએ છીએ.' },
  why12_title: { en: 'Both Mediums Available', gu: 'બંને માધ્યમ ઉપલબ્ધ' },
  why12_desc: { en: 'We offer coaching in both Gujarati and English medium. For 11th-12th, we specialize in Commerce stream only.', gu: 'અમે ગુજરાતી અને અંગ્રેજી બંને માધ્યમમાં કોચિંગ આપીએ છીએ. ૧૧-૧૨ માટે ફક્ત કોમર્સ સ્ટ્રીમ.' },

  // Contact Form
  contact_title: { en: 'Enquiry Form', gu: 'પૂછપરછ ફોર્મ' },
  contact_subtitle: { en: 'Have questions? Fill in the form and we\'ll get back to you shortly.', gu: 'પ્રશ્નો છે? ફોર્મ ભરો અને અમે ટૂંક સમયમાં તમને સંપર્ક કરીશું.' },
  form_parent_name: { en: 'Parent / Guardian Name', gu: 'વાલી / માતાપિતા નામ' },
  form_student_name: { en: 'Student Name', gu: 'વિદ્યાર્થીનું નામ' },
  form_phone: { en: 'Phone Number', gu: 'ફોન નંબર' },
  form_standard: { en: 'Select Standard', gu: 'ધોરણ પસંદ કરો' },
  form_message: { en: 'Your Message / Query', gu: 'તમારો સંદેશ / પ્રશ્ન' },
  form_submit: { en: 'Send Enquiry via WhatsApp', gu: 'WhatsApp દ્વારા પૂછપરછ મોકલો' },
  form_success: { en: 'Your enquiry has been sent successfully via WhatsApp!', gu: 'તમારી પૂછપરછ WhatsApp દ્વારા સફળતાપૂર્વક મોકલવામાં આવી છે!' },

  // Standards for dropdown (Commerce only for 11-12)
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
  std_11_com: { en: 'Standard 11 - Commerce', gu: 'ધોરણ ૧૧ - વાણિજ્ય' },
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
