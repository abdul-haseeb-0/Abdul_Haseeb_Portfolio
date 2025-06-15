
import React from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI-powered solutions? Let's discuss your next project.
          </p>
        </div>

        {/* Contact Information - now taking full width */}
        <div className="max-w-2xl mx-auto space-y-8">
          <ContactInfo />
          <SocialLinks />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Abdul Haseeb.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
