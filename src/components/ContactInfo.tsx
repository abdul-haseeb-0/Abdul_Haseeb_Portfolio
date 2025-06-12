
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdulhaseebmirza69@gmail.com',
      href: 'mailto:abdulhaseebmirza69@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 123 456 7890',
      href: 'tel:+92123456789'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: null
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
        <p className="text-muted-foreground mb-8">
          I'm always interested in discussing new opportunities and innovative projects. 
          Whether you need AI development, financial automation, or data analysis solutions, 
          I'm here to help bring your ideas to life.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">{item.label}</p>
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
