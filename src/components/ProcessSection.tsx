import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Droplets, 
  SprayCanIcon, 
  Flame, 
  CheckCircle, 
  ArrowRight,
  Play,
  Clock,
  Thermometer
} from 'lucide-react';

const processSteps = [
  {
    id: 1,
    icon: Droplets,
    title: 'Predúprava povrchu',
    description: 'Odmasťovanie, čistenie a chemická úprava povrchu pre dokonalú adhéziu náteru.',
    image: '/user/documents/upload/ocistenie-kovoveho-zabradlia-pred-lakovanim-nitra.jpg',
    duration: '30-60 min',
    temperature: '40-60°C',
    details: ['Alkalické čistenie', 'Odstraňovanie hrdze', 'Fosfátovanie', 'Konečné oplachovanie']
  },
  {
    id: 2,
    icon: SprayCanIcon,
    title: 'Aplikácia prášku',
    description: 'Elektrostatické nanášanie práškového laku v kontrolovanom prostredí pre rovnomerné pokrytie.',
    image: '/user/documents/upload/praskove-lakovanie-ocelovej-konstrukcie-v-peci-nitra.jpg',
    duration: '15-30 min',
    temperature: '20-25°C',
    details: ['Elektrostatický náboj', 'Rovnomerné nanášanie', 'Kontrola hrúbky', 'Kvalitná kontrola']
  },
  {
    id: 3,
    icon: Flame,
    title: 'Vypaľovanie',
    description: 'Tepelné spracovanie v priemyselnej peci pre vytvorenie tvrdého a odolného povrchu.',
    image: '/user/documents/upload/priemyselna-susiaca-pec-so-zelenym-ramom-nitra.jpg',
    duration: '20-40 min',
    temperature: '160-200°C',
    details: ['Presná teplota', 'Kontrolovaný čas', 'Rovnomerné vypaľovanie', 'Chladenie']
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Kontrola kvality',
    description: 'Finálna kontrola kvality, testovanie adhézie a príprava na expedíciu.',
    image: '/user/documents/upload/biela-praskova-povrchova-uprava-zabradlia-nitra.jpg',
    duration: '10-15 min',
    temperature: 'Izbová',
    details: ['Vizuálna kontrola', 'Test adhézie', 'Meranie hrúbky', 'Finálne balenie']
  }
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Náš proces
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            4 kroky k <span className="text-gradient">dokonalosti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Každý diel prechádza našim precíznym procesom, ktorý zaručuje 
            najvyššiu kvalitu a dlhodobú odolnosť povrchových úprav.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-border/30 rounded-full">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: isVisible ? `${(activeStep / processSteps.length) * 100}%` : '0%' 
              }}
            ></div>
          </div>

          {/* Step Indicators */}
          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`relative cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                  activeStep >= step.id 
                    ? 'bg-gradient-primary text-white scale-110 shadow-glow' 
                    : 'bg-background-secondary text-muted-foreground'
                }`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Step Info */}
                <div className="text-center">
                  <h3 className={`font-bold text-lg mb-2 transition-colors ${
                    activeStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground hidden lg:block">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Progress Line */}
                <div className="lg:hidden w-1 h-16 bg-border/30 mx-auto mt-4">
                  <div 
                    className={`w-full bg-gradient-primary transition-all duration-500 ${
                      activeStep >= step.id ? 'h-full' : 'h-0'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Step Image and Details */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="glass-strong p-8 magnetic">
              <img 
                src={processSteps[activeStep - 1].image}
                alt={processSteps[activeStep - 1].title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              {/* Process Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-background-secondary/50 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Čas</div>
                    <div className="font-semibold">{processSteps[activeStep - 1].duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background-secondary/50 rounded-lg">
                  <Thermometer className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Teplota</div>
                    <div className="font-semibold">{processSteps[activeStep - 1].temperature}</div>
                  </div>
                </div>
              </div>

              {/* Process Details */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Kľúčové operácie:</h4>
                {processSteps[activeStep - 1].details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Step Description */}
          <div className="space-y-8 animate-fade-in-up stagger-1">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  {(() => {
                    const IconComponent = processSteps[activeStep - 1].icon;
                    return <IconComponent className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Krok {activeStep}/4
                </Badge>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                {processSteps[activeStep - 1].title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {processSteps[activeStep - 1].description}
              </p>
            </div>

            {/* Process Navigation */}
            <div className="flex gap-4">
              {activeStep > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  Predchádzajúci
                </Button>
              )}
              
              {activeStep < processSteps.length && (
                <Button 
                  className="btn-modern group"
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  Ďalší krok
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>

            {/* Video CTA */}
            <Card className="glass p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold mb-1">Pozrite si náš proces v akcii</h4>
                  <p className="text-sm text-muted-foreground">
                    Krátke video ukážky z našej výroby
                  </p>
                </div>
                <Button variant="outline" size="sm" className="hover:bg-primary/10">
                  <Play className="w-4 h-4 mr-2" />
                  Prehrať
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;