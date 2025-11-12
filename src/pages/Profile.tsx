import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, TrendingUp, Flame, LogOut, ArrowUpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Profile() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Mock data
  const userData = {
    name: 'Investor Name',
    tier: 2,
    meditationStreak: 7,
  };

  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="mx-auto mb-4 p-6 bg-gradient-gold rounded-full w-fit">
          <User className="h-12 w-12 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{userData.name}</h1>
        <p className="text-muted-foreground">
          {t('profile.tier')}: <span className="text-primary font-semibold">Tier {userData.tier}</span>
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-card border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {t('profile.returns')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">12%</span>
                  <span className="text-muted-foreground">annual</span>
                </div>
                <div className="h-32 bg-background/50 rounded-lg flex items-end p-4 gap-2">
                  {[40, 60, 55, 75, 70, 85, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="flex-1 bg-gradient-gold rounded-t"
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-card border-primary/20 h-full">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Flame className="h-5 w-5" />
                {t('profile.streak')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="mb-4">
                  <Flame className="h-16 w-16 text-primary mx-auto animate-glow" />
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-foreground">{userData.meditationStreak}</span>
                  <span className="text-xl text-muted-foreground">{t('profile.days')}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Keep going!</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <Button
          className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold"
          size="lg"
          onClick={() => navigate('/tiers')}
        >
          <ArrowUpCircle className="mr-2 h-5 w-5" />
          {t('profile.upgrade')}
        </Button>

        <Button
          className="w-full border-primary text-primary hover:bg-primary/10"
          variant="outline"
          size="lg"
          onClick={() => navigate('/tiers')}
        >
          {t('profile.investMore')}
        </Button>

        <Button
          className="w-full"
          variant="ghost"
          size="lg"
          onClick={() => {
            // In production, handle logout
            alert('Logout functionality');
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {t('profile.logout')}
        </Button>
      </motion.div>
    </div>
  );
}
