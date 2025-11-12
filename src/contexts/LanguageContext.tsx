import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', id: 'Beranda' },
  'nav.tiers': { en: 'Investment Tiers', id: 'Tingkat Investasi' },
  'nav.training': { en: 'Investor Training', id: 'Pelatihan Investor' },
  'nav.assessment': { en: 'Assessment', id: 'Penilaian' },
  'nav.profile': { en: 'Profile', id: 'Profil' },
  
  // Home Page
  'home.title': { en: 'EL VISION CAPITAL', id: 'EL VISION CAPITAL' },
  'home.tagline': { en: 'High Return Begins With Inner Stability', id: 'Keuntungan Tinggi Dimulai dari Ketenangan Batin' },
  'home.description': { 
    en: 'EL VISION CAPITAL manages wealth through diversity and mental clarity. Our hedge fund merges psychology and finance for true stability.',
    id: 'EL VISION CAPITAL mengelola kekayaan melalui diversitas dan kejernihan mental. Dana lindung nilai kami menggabungkan psikologi dan keuangan untuk stabilitas sejati.'
  },
  'home.invest': { en: 'Invest Now', id: 'Investasi Sekarang' },
  'home.learn': { en: 'Learn How It Works', id: 'Pelajari Cara Kerjanya' },
  
  // Investment Tiers
  'tiers.title': { en: 'Investment Tiers', id: 'Tingkat Investasi' },
  'tiers.tier1': { en: 'Tier 1', id: 'Tingkat 1' },
  'tiers.tier2': { en: 'Tier 2', id: 'Tingkat 2' },
  'tiers.tier3': { en: 'Tier 3', id: 'Tingkat 3' },
  'tiers.return1': { en: '8% per year', id: '8% per tahun' },
  'tiers.return2': { en: '12% per year', id: '12% per tahun' },
  'tiers.return3': { en: '15% per year', id: '15% per tahun' },
  'tiers.desc1': { en: 'Safe, stable annual growth', id: 'Pertumbuhan tahunan yang aman dan stabil' },
  'tiers.desc2': { en: 'Balanced growth, moderate risk', id: 'Pertumbuhan seimbang, risiko sedang' },
  'tiers.desc3': { en: 'High return, elite investor access', id: 'Keuntungan tinggi, akses investor elit' },
  'tiers.note': { 
    en: 'Although returns are high, success depends on investor alignment — calm mind, clear vision, and emotional balance.',
    id: 'Meskipun keuntungan tinggi, kesuksesan bergantung pada keselarasan investor — pikiran tenang, visi jelas, dan keseimbangan emosional.'
  },
  'tiers.investBtn': { en: 'Invest Now', id: 'Investasi Sekarang' },
  'tiers.trainingBtn': { en: 'Join Training First', id: 'Ikuti Pelatihan Dulu' },
  
  // Training
  'training.title': { en: 'Investor Training', id: 'Pelatihan Investor' },
  'training.description': { 
    en: 'Before investing, every investor joins short mental training. We believe stress, doubt, or fear directly reduce success probability. Calm focus amplifies return.',
    id: 'Sebelum berinvestasi, setiap investor mengikuti pelatihan mental singkat. Kami percaya stres, keraguan, atau ketakutan secara langsung mengurangi probabilitas kesuksesan. Fokus tenang memperbesar keuntungan.'
  },
  'training.meditation': { en: 'Daily Meditation', id: 'Meditasi Harian' },
  'training.quote': { 
    en: 'Investment success is 80% psychology, 20% mechanics.',
    id: 'Kesuksesan investasi adalah 80% psikologi, 20% mekanik.'
  },
  'training.quoteAuthor': { en: '— Ray Dalio', id: '— Ray Dalio' },
  'training.start': { en: 'Start Training Now', id: 'Mulai Pelatihan Sekarang' },
  
  // Assessment
  'assessment.title': { en: 'Investor Assessment', id: 'Penilaian Investor' },
  'assessment.emotional': { en: 'Emotional Stability', id: 'Stabilitas Emosional' },
  'assessment.focus': { en: 'Focus & Presence', id: 'Fokus & Kehadiran' },
  'assessment.clarity': { en: 'Financial Intent Clarity', id: 'Kejelasan Niat Finansial' },
  'assessment.submit': { en: 'Complete Assessment', id: 'Selesaikan Penilaian' },
  'assessment.meditation': { en: 'Personalized Meditation', id: 'Meditasi Personalisasi' },
  'assessment.reminder': { 
    en: 'When your mind is calm, your capital grows harmoniously.',
    id: 'Ketika pikiran Anda tenang, modal Anda tumbuh dengan harmonis.'
  },
  'assessment.completed': { en: 'Meditation Completed', id: 'Meditasi Selesai' },
  
  // Profile
  'profile.title': { en: 'Profile', id: 'Profil' },
  'profile.tier': { en: 'Current Tier', id: 'Tingkat Saat Ini' },
  'profile.returns': { en: 'Investment Returns', id: 'Keuntungan Investasi' },
  'profile.streak': { en: 'Meditation Streak', id: 'Rangkaian Meditasi' },
  'profile.days': { en: 'days', id: 'hari' },
  'profile.upgrade': { en: 'Upgrade Tier', id: 'Tingkatkan Level' },
  'profile.investMore': { en: 'Invest More', id: 'Investasi Lebih' },
  'profile.logout': { en: 'Logout', id: 'Keluar' },
  
  // Footer
  'footer.philosophy': { en: 'We manage both the fund — and the human behind it.', id: 'Kami mengelola dana — dan manusia di baliknya.' },
  'footer.tagline': { en: 'Calm investor. Strong project. Stable return.', id: 'Investor tenang. Proyek kuat. Keuntungan stabil.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
