import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

export default function Assessment() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [emotional, setEmotional] = useState([5]);
  const [focus, setFocus] = useState([5]);
  const [clarity, setClarity] = useState([5]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    toast({
      title: "Assessment Completed",
      description: "Your personalized meditation is ready.",
    });
  };

  return (
    <div className="container px-4 py-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
          <Activity className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
          {t('assessment.title')}
        </h1>
      </motion.div>

      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground">Rate yourself on a scale of 1-10</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">
                    {t('assessment.emotional')}
                  </label>
                  <span className="text-sm font-bold text-primary">{emotional[0]}/10</span>
                </div>
                <Slider
                  value={emotional}
                  onValueChange={setEmotional}
                  min={1}
                  max={10}
                  step={1}
                  className="[&_[role=slider]]:bg-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">
                    {t('assessment.focus')}
                  </label>
                  <span className="text-sm font-bold text-primary">{focus[0]}/10</span>
                </div>
                <Slider
                  value={focus}
                  onValueChange={setFocus}
                  min={1}
                  max={10}
                  step={1}
                  className="[&_[role=slider]]:bg-primary"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">
                    {t('assessment.clarity')}
                  </label>
                  <span className="text-sm font-bold text-primary">{clarity[0]}/10</span>
                </div>
                <Slider
                  value={clarity}
                  onValueChange={setClarity}
                  min={1}
                  max={10}
                  step={1}
                  className="[&_[role=slider]]:bg-primary"
                />
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold py-6"
              >
                {t('assessment.submit')}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Check className="h-5 w-5" />
                {t('assessment.meditation')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-background/50 rounded-lg p-8 text-center">
                <div className="mb-6">
                  <div className="mx-auto w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center animate-glow">
                    <Check className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Based on your assessment, here's your personalized meditation.
                </p>
                <div className="space-y-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-gradient-gold"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('assessment.completed')} ✅
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/10">
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground italic">
                {t('assessment.reminder')}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
