import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const STANDARDS = [
  'std_5', 'std_6', 'std_7', 'std_8', 'std_9', 'std_10',
  'std_11_com', 'std_12_com',
];

const MEDIUMS = ['med_eng', 'med_guj'];

const ContactForm = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    standard: '',
    medium: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.studentName.trim() || !formData.phone.trim() || !formData.standard || !formData.medium) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Validate phone
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        student_name: formData.studentName.trim(),
        parent_name: formData.parentName.trim() || 'N/A',
        phone: formData.phone.trim(),
        email: formData.email.trim() || 'N/A',
        standard: t(formData.standard),
        medium: t(formData.medium),
        message: formData.message.trim() || 'N/A',
        to_email: 'akshatshah187@gmail.com',
        subject: 'New Enquiry - Yash Personal Tution'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitted(true);
      toast.success(t('form_success'));
      setFormData({ parentName: '', studentName: '', phone: '', email: '', standard: '', medium: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      toast.error(t('form_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              {t('contact_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              {t('contact_subtitle')}
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-card shadow-card space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Student Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t('form_student_name')} *</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder={t('form_student_name')}
                />
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t('form_parent_name')}</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder={t('form_parent_name')}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t('form_phone')} *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={15}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t('form_email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Standard */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t('form_standard')} *</label>
                <select
                  name="standard"
                  value={formData.standard}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                >
                  <option value="">{t('form_standard')}</option>
                  {STANDARDS.map(std => (
                    <option key={std} value={std}>{t(std)}</option>
                  ))}
                </select>
              </div>

              {/* Medium */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t('form_medium')} *</label>
                <select
                  name="medium"
                  value={formData.medium}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                >
                  <option value="">{t('form_medium')}</option>
                  {MEDIUMS.map(med => (
                    <option key={med} value={med}>{t(med)}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t('form_message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                placeholder={t('form_message')}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  {t('form_success')}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('form_submit')}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
