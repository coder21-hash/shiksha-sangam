import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">
              {t('footer_brand')}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{t('footer_phone')}: +91 96240 52715</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{t('footer_location_label')}: {t('footer_address')}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} {t('footer_brand')}. {t('footer_rights')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
