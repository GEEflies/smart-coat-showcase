import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;
