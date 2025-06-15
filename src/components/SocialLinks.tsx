
import React from 'react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdul-haseeb-980075323/',
      color: 'hover:text-blue-600',
      description: 'Professional network'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/abdul-haseeb-0/',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
      description: 'Code repositories'
    }
  ];

  return (
    <div className="text-center">
      <h4 className="font-bold text-foreground mb-6 text-xl">Follow My Journey</h4>
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <social.icon className={`w-7 h-7 text-muted-foreground transition-colors ${social.color}`} />
            </div>
            <div className="mt-3">
              <p className="font-medium text-foreground text-sm">{social.label}</p>
              <p className="text-muted-foreground text-xs">{social.description}</p>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
        <div className="flex items-center justify-center gap-2 text-primary">
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm font-medium">Open to collaboration and new opportunities</span>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
