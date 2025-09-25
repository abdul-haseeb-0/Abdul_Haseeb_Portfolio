import { Github, Linkedin, Mail } from 'lucide-react';

export const CV_URL = "https://drive.google.com/file/d/18Z0UdZUvNh6BCNQZ11FfSlh8CyPbPShe/view?usp=sharing";

export const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:abdulhaseebmirza69@gmail.com',
    color: 'hover:text-red-500',
    description: 'Send me an email'
  },
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