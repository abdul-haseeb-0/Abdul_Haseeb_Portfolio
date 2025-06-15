
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdulhaseebmirza69@gmail.com',
      href: 'mailto:abdulhaseebmirza69@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 123 456 7890',
      href: 'tel:+92123456789',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: null,
      description: 'Remote & on-site available'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '24 hours',
      href: null,
      description: 'Average response time'
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities and innovative projects. 
          Whether you need AI development, financial automation, or data analysis solutions, 
          I'm here to help bring your ideas to life.
        </p>
      </div>

      {/* Contact Details Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-lg mb-1">{item.label}</p>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-lg mb-2 block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium text-lg mb-2">{item.value}</p>
                )}
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
