import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Award, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl float-element"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-element"></div>
      </div>

      {/* Parallax Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,150,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,136,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-secondary/50 backdrop-blur-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Špičková kvalita od roku 2014</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                <span className="text-gradient">Revolučné</span><br />
                práškové<br />
                <span className="text-primary">lakovanie</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-up stagger-1">
                Kde sa moderná technológia stretáva s tradičným remeslom. 
                Transformujeme váše kovové diely do dokonalosti s najvyššou 
                kvalitou a odolnosťou.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-2">
              <Button 
                size="lg" 
                className="btn-modern group"
              >
                Získať ponuku
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass hover:bg-primary/10"
              >
                <Play className="w-5 h-5 mr-2" />
                Pozrieť proces
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up stagger-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Realizovaných projektov</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-muted-foreground">Spokojnosť zákazníkov</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Rokov skúseností</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up stagger-2">
            <div className="relative">
              {/* Glass Card with Image */}
              <div className="glass-strong rounded-3xl p-8 magnetic">
                <img 
                  src="https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovacia-linka-s-dopravnikovym-systemom-nitra.jpg"
                  alt="Moderná lakovacia linka s dopravníkovým systémom vo výrobe"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Floating Info Cards */}
                <div className="absolute -top-4 -left-4 glass rounded-2xl p-4 w-32 text-center animate-scale-in stagger-4">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">100% Bez VOC</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 w-32 text-center animate-scale-in stagger-5">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">RAL farby</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-primary rounded-3xl opacity-20"></div>
              <div className="absolute -z-20 top-16 left-16 w-full h-full bg-gradient-secondary rounded-3xl opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;