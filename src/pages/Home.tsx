import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export default function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent"
        >
          {t('home.title')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-foreground/90 mb-4 italic"
        >
          "{t('home.tagline')}"
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('home.description')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => navigate('/tiers')}
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold px-8 py-6 text-lg shadow-gold transition-all hover:shadow-gold hover:scale-105"
          >
            {t('home.invest')}
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/training')}
            className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
          >
            {t('home.learn')}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
