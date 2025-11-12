import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, Play, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Training() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
          <Brain className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
          {t('training.title')}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t('training.description')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Card className="bg-gradient-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Play className="h-5 w-5" />
              {t('training.meditation')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background/50 rounded-lg p-8 text-center">
              <div className="mb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center animate-glow">
                  <Play className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                2-minute guided meditation session
              </p>
              <Button 
                className="bg-gradient-gold text-primary-foreground hover:opacity-90"
                onClick={() => {
                  // In production, this would play audio
                  alert('Meditation audio would play here');
                }}
              >
                Begin Meditation
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <Card className="bg-card/50 border-primary/10 relative overflow-hidden">
          <div className="absolute top-4 left-4 text-primary/20">
            <Quote className="h-12 w-12" />
          </div>
          <CardContent className="pt-12 pb-8 text-center relative z-10">
            <p className="text-xl md:text-2xl text-foreground/90 italic mb-4 font-light">
              "{t('training.quote')}"
            </p>
            <p className="text-primary font-semibold">
              {t('training.quoteAuthor')}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <Button
          size="lg"
          className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold px-12 shadow-gold"
          onClick={() => navigate('/assessment')}
        >
          {t('training.start')}
        </Button>
      </motion.div>
    </div>
  );
}
