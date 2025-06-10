
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Abdul <span className="text-primary">Haseeb</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              <span className="block">Accountant | AI Developer</span>
              <span className="block mt-2 text-lg sm:text-xl lg:text-2xl">Gen AI & Prompt Engineer</span>
            </div>
          </div>
          
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Bridging the gap between traditional finance and cutting-edge AI technology. 
            I specialize in automating accounting workflows and developing AI-powered solutions 
            for financial decision-making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[200px]" onClick={scrollToAbout}>
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:abdulhaseebmirza69@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
