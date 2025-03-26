
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import LastCTA from '@/components/LastCTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Show welcome toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "Bem-vindo à S&S Automação",
        description: "Especialistas em soluções completas de segurança eletrônica.",
        duration: 5000,
      });
    }, 2000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(timer);
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [toast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DifferentialsSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
        <LastCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
