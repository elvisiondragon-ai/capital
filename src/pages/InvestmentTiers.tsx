import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Shield, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const tiers = [
  {
    id: 1,
    icon: Shield,
    returnKey: 'tiers.return1',
    descKey: 'tiers.desc1',
  },
  {
    id: 2,
    icon: TrendingUp,
    returnKey: 'tiers.return2',
    descKey: 'tiers.desc2',
  },
  {
    id: 3,
    icon: Crown,
    returnKey: 'tiers.return3',
    descKey: 'tiers.desc3',
  },
];

export default function InvestmentTiers() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="container px-4 py-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
          {t('tiers.title')}
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {tiers.map((tier, index) => {
          const Icon = tier.icon;
          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-gold group cursor-pointer h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:animate-glow">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    {t(`tiers.tier${tier.id}`)}
                  </CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground mt-2">
                    {t(tier.returnKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{t(tier.descKey)}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-card/50 border border-primary/20 rounded-lg p-6 mb-8"
      >
        <p className="text-center text-muted-foreground leading-relaxed">
          {t('tiers.note')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          size="lg"
          className="bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold shadow-gold"
          onClick={() => {
            // In production, this would open investment form
            alert('Investment form would open here');
          }}
        >
          {t('tiers.investBtn')}
        </Button>
        
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
          onClick={() => navigate('/training')}
        >
          {t('tiers.trainingBtn')}
        </Button>
      </motion.div>
    </div>
  );
}
