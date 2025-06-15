
import React from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI-powered solutions? Let's discuss your next project.
          </p>
        </div>

        {/* Contact Information - centered and enhanced */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 sm:p-12 shadow-xl">
            <ContactInfo />
            <div className="mt-12 pt-8 border-t border-border/30">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-20 pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
          </div>
          <p className="text-muted-foreground text-lg font-medium">
            © 2024 Abdul Haseeb. Crafted with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
