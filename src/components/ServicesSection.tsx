import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Factory, 
  Home, 
  Building, 
  Palette, 
  ArrowRight, 
  Star,
  Shield,
  Timer,
  Award
} from 'lucide-react';

const services = [
  {
    id: 'industrial',
    icon: Factory,
    title: 'Priemyselné lakovanie',
    description: 'Špecializujeme sa na lakovanie ťažkých strojov, výrobných liniek a priemyselných zariadení s maximálnou odolnosťou.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/praskove-lakovanie-velkej-kovovej-konstrukcie-nitra.jpg',
    features: ['Vysoká odolnosť', 'Anti-korózia', 'Dlhá životnosť'],
    price: 'Od 15€/m²',
    rating: 4.9
  },
  {
    id: 'furniture',
    icon: Home,
    title: 'Nábytok a interiéry',
    description: 'Obnova a lakovanie nábytku, kovových stolov, stoličiek a interiérových prvkov s dokonalým finišom.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/nalakovany-hlinikovy-disk-praskove-lakovanie-nitra.jpg',
    features: ['Moderný dizajn', 'Hladký povrch', 'Farebné varianty'],
    price: 'Od 8€/m²',
    rating: 4.8
  },
  {
    id: 'architectural',
    icon: Building,
    title: 'Architektonické prvky',
    description: 'Lakovanie zábradlí, brán, plotov a architektonických konštrukcií s dôrazom na estetiku a funkčnosť.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-premenovane/praskove-lakovanie-zabradlia-v-kabine-nitra.jpg',
    features: ['Vonkajšia odolnosť', 'UV ochrana', 'Estetický vzhľad'],
    price: 'Od 12€/m²',
    rating: 4.9
  },
  {
    id: 'custom',
    icon: Palette,
    title: 'Vlastné farby RAL',
    description: 'Široká paleta RAL farieb a možnosť vytvorenia vlastných farebných odtieňov podľa vašich požiadaviek.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovna-fotky-z-iphonu/detail-praskoveho-nateru-disku-nitra.jpg',
    features: ['500+ RAL farieb', 'Vlastné odtiene', 'Farebné vzorky'],
    price: 'Individuálne',
    rating: 5.0
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('industrial');

  return (
    <section className="py-24 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Naše služby
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Kompletné <span className="text-gradient">riešenia</span><br />
            práškového lakovania
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Od priemyselných strojov až po dekoratívne prvky - poskytujeme 
            komplexné služby s najvyššou kvalitou a spolehlivosťou.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`card-modern cursor-pointer transition-all duration-500 animate-fade-in-up ${
                activeService === service.id ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveService(service.id)}
            >
              <div className="space-y-6">
                {/* Icon and Rating */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>

                {/* Service Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-lg font-bold text-primary">{service.price}</div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary/10 group"
                    >
                      Viac info
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in-up stagger-3">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Ekologické lakovanie</h3>
            <p className="text-muted-foreground text-sm">
              100% bez VOC látok, šetrné k životnému prostrediu
            </p>
          </div>

          <div className="text-center animate-fade-in-up stagger-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Timer className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Rýchle dodanie</h3>
            <p className="text-muted-foreground text-sm">
              Štandardné projekty do 7 pracovných dní
            </p>
          </div>

          <div className="text-center animate-fade-in-up stagger-5">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Záruka kvality</h3>
            <p className="text-muted-foreground text-sm">
              10-ročná záruka na všetky naše práce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;