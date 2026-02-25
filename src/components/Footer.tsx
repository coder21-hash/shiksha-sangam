import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'nav_home', href: '#home' },
    { label: 'nav_about', href: '#about' },
    { label: 'nav_classes', href: '#classes' },
    { label: 'nav_why_us', href: '#why-us' },
    { label: 'nav_contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">{t('footer_brand')}</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">
              {t('footer_tagline')}
            </p>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t('footer_chat_whatsapp')}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">{t('footer_quick_links')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {t(link.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">{t('footer_contact_us')}</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{t('footer_address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 96240 52715</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{t('footer_email')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} {t('footer_brand')}. {t('footer_rights')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
