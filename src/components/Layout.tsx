import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Brain, Activity, User, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/tiers', icon: TrendingUp, label: t('nav.tiers') },
    { path: '/training', icon: Brain, label: t('nav.training') },
    { path: '/assessment', icon: Activity, label: t('nav.assessment') },
    { path: '/profile', icon: User, label: t('nav.profile') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="EL VISION CAPITAL" className="h-10 w-10 transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              EL VISION CAPITAL
            </span>
          </Link>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 hover:bg-card"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase font-semibold">{language}</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center gap-1 px-3 py-1 transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-gold rounded-lg opacity-20"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <Icon 
                  className={`h-5 w-5 transition-colors relative z-10 ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                />
                <span className={`text-xs font-medium relative z-10 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50 backdrop-blur pb-20">
        <div className="container py-8 px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">{t('footer.philosophy')}</p>
          <p className="text-xs text-muted-foreground italic">{t('footer.tagline')}</p>
        </div>
      </footer>
    </div>
  );
}
