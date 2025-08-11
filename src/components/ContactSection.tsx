import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Star,
  Award,
  Shield
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Kontakt
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Začnime <span className="text-gradient">spoločne</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Máte projekt na práškové lakovanie? Kontaktujte nás a spoločne 
            nájdeme najlepšie riešenie pre vaše potreby.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="glass-strong p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Získajte bezplatnú ponuku</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Meno a priezvisko *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass border-primary/20 focus:ring-primary"
                      placeholder="Vaše celé meno"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass border-primary/20 focus:ring-primary"
                      placeholder="vas@email.sk"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefón
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="glass border-primary/20 focus:ring-primary"
                      placeholder="+421 XXX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Typ projektu
                    </label>
                    <Input
                      id="project"
                      name="project"
                      type="text"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="glass border-primary/20 focus:ring-primary"
                      placeholder="Napr. zábradlie, nábytok..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Správa *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass border-primary/20 focus:ring-primary min-h-32"
                    placeholder="Popíšte váš projekt, požiadavky a očakávania..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-modern group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Odosielam...
                    </>
                  ) : (
                    <>
                      Odoslať ponuku
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8 animate-scale-in">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ďakujeme za váš záujem!</h3>
                <p className="text-muted-foreground">
                  Vaša správa bola úspešne odoslaná. Ozveme sa vám do 24 hodín.
                </p>
              </div>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up stagger-1">
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="glass p-6 magnetic">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefón</h4>
                    <p className="text-muted-foreground">+421 XXX XXX XXX</p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 magnetic">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@billik.sk</p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 magnetic">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Adresa</h4>
                    <p className="text-muted-foreground">Nitra, Slovensko</p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 magnetic">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Otváracie hodiny</h4>
                    <p className="text-muted-foreground">Po-Pi: 7:00 - 16:00</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Why Choose Us */}
            <Card className="glass-strong p-8">
              <h3 className="text-xl font-bold mb-6">Prečo si vybrať Billik?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span>10+ rokov skúseností v odbore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>99.8% spokojnosť zákazníkov</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>10-ročná záruka na všetky práce</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Ekologické a bezpečné procesy</span>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="glass bg-primary/5 p-6 border-primary/20">
              <h4 className="font-bold mb-2">Urgentný projekt?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Pre náhlivé projekty nás kontaktujte priamo telefonicky.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Phone className="w-4 h-4 mr-2" />
                Zavolať teraz
              </Button>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="glass-strong p-8 mt-16 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-4">Naša poloha</h3>
          <div className="w-full h-64 bg-background-secondary rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Interaktívna mapa bude dostupná</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;