import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  ExternalLink, 
  ArrowRight, 
  Calendar,
  MapPin,
  Star
} from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    category: 'Priemyselné',
    title: 'Lakovacia linka - Kompletná renovácia',
    description: 'Komplexná obnova priemyselnej lakovacej linky so zeleným rámom a modernými technológiami.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/lakovacia-linka-s-dopravnikovym-systemom-nitra.jpg',
    beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/oplachova-kabina-s-technologickymi-nadobami-nitra.jpg',
    location: 'Nitra',
    date: '2024',
    rating: 5.0,
    tags: ['Priemyselné zariadenia', 'Zelená farba', 'Modernizácia']
  },
  {
    id: 2,
    category: 'Architektonické',
    title: 'Kovové zábradlie - Biela elegancia',
    description: 'Moderné kovové zábradlie s dokonalou bielou povrchovou úpravou pre exteriérové použitie.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/cerne-praskove-lakovanie-zabradlia-nitra.jpg',
    beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/priprava-zabradlia-na-praskove-lakovanie-nitra.jpg',
    location: 'Nitra',
    date: '2024',
    rating: 4.9,
    tags: ['Zábradlie', 'Biela farba', 'Exteriér']
  },
  {
    id: 3,
    category: 'Nábytok',
    title: 'Kovový stôl - Sivá sofistikovanosť',
    description: 'Elegantný kovový stôl s kvalitnou sivou povrchovou úpravou pre moderné interiéry.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/ochranny-praskovy-nater-ramovej-konstrukcie-nitra.jpg',
    beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/praskove-lakovanie-pracovneho-stola-nitra.jpg',
    location: 'Nitra',
    date: '2024',
    rating: 4.8,
    tags: ['Nábytok', 'Sivá farba', 'Interiér']
  },
  {
    id: 4,
    category: 'Špecializované',
    title: 'Oceľový rebrík - Čierna odolnosť',
    description: 'Priemyselný oceľový rebrík s vysoce odolnou čiernou povrchovou úpravou.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/praskove-lakovanie-oceloveho-rebrika-nitra.jpg',
    beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/zaveseny-ocelovy-ram-na-praskovanie-nitra.jpg',
    location: 'Nitra',
    date: '2024',
    rating: 4.9,
    tags: ['Rebrík', 'Čierna farba', 'Odolnosť']
  },
  {
    id: 5,
    category: 'Farebné',
    title: 'Červené komponenty - Výrazný dizajn',
    description: 'Špecializované kovové komponenty v živej červenej farbe pre výrazný vizuálny dopad.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/praskova-farba-na-kovovy-plot-nitra.jpg',
    beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/cierne-praskove-lakovanie-kovovej-konstrukcie-nitra.jpg',
    location: 'Nitra',
    date: '2024',
    rating: 5.0,
    tags: ['Červená farba', 'Komponenty', 'Dizajn']
  },
  {
    id: 6,
    category: 'Priemyselné',
    title: 'Priemyselná pec - Zelená modernizácia',
    description: 'Kompletná renovácia priemyselnej pece s moderným zeleným dizajnom a funkcionalitou.',
    image: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/vysoka-priemyselna-vypalovacia-pec-s-kolajnicou-nitra.jpg',
    beforeImage: 'https://cdn.myshoptet.com/usr/www.billik.sk/user/documents/upload/priemyselna-susiaca-pec-so-zelenym-ramom-nitra.jpg',
    location: 'Nitra',
    date: '2024',
    rating: 4.9,
    tags: ['Pec', 'Zelená farba', 'Modernizácia']
  }
];

const categories = ['Všetko', 'Priemyselné', 'Architektonické', 'Nábytok', 'Farebné', 'Špecializované'];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Všetko');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'Všetko' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-24 bg-background-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Naše práce
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Portfólio <span className="text-gradient">projektov</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Prezrite si ukážky našich najlepších prác. Každý projekt odráža 
            našu vášeň pre kvalitu a precíznosť vo všetkých detailoch.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up stagger-1">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category 
                  ? 'bg-gradient-primary text-white shadow-glow' 
                  : 'hover:bg-primary/10'
              } transition-all duration-300`}
              onClick={() => setSelectedCategory(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="card-modern group cursor-pointer overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
            >
              <div className="relative">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="outline" className="glass text-white border-white/20">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="glass text-white border-white/20">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-white">
                    {item.category}
                  </Badge>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-xs font-medium">{item.rating}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary/20 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {selectedItem === item.id && (
                    <div className="space-y-4 animate-fade-in-up pt-4 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Pred úpravou</h4>
                          <img 
                            src={item.beforeImage}
                            alt="Pred úpravou"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Po úprave</h4>
                          <img 
                            src={item.image}
                            alt="Po úprave"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      
                      <Button className="w-full btn-modern group">
                        Viac detailov
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Card className="glass-strong p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Máte vlastný projekt?</h3>
            <p className="text-muted-foreground mb-6">
              Kontaktujte nás a spoločne vytvoríme niečo výnimočné. 
              Každý projekt pristupujeme individuálne s maximálnou starostlivosťou.
            </p>
            <Button className="btn-modern group">
              Začať projekt
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;