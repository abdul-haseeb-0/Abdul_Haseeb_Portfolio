
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdul-haseeb-980075323/',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/abdul-haseeb-0/',
      color: 'text-gray-700 hover:text-gray-900'
    }
  ];

  return (
    <div>
      <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
      <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 bg-background rounded-lg flex items-center justify-center border hover:border-primary/50 transition-all duration-200 ${social.color}`}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
