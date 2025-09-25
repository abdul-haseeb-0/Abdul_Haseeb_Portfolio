
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const SocialLinks = () => {
  return (
    <div className="text-center">
      <h4 className="font-bold text-foreground mb-6 text-xl">Follow My Journey</h4>
      <div className="flex justify-center gap-6">
        {SOCIAL_LINKS.filter(s => s.label !== 'Email').map((social, index) => (
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
