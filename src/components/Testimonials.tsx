
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Business Owner",
      company: "Hassan Textiles, Sutar Mandi",
      image: "/api/placeholder/80/80",
      quote: "Abdul transformed our accounting system completely. His AI-powered solutions reduced our monthly reconciliation time from days to hours. Exceptional work!",
      initials: "AH"
    },
    {
      name: "Dr. Sarah Khan",
      role: "Program Director",
      company: "Saylani Mass IT Training",
      image: "/api/placeholder/80/80",
      quote: "One of our most dedicated students in AI development. Abdul's combination of domain expertise in accounting and technical skills is truly remarkable.",
      initials: "SK"
    },
    {
      name: "Fatima Ali",
      role: "Financial Consultant",
      company: "Independent Consultant",
      image: "/api/placeholder/80/80",
      quote: "Working with Abdul on automation projects has been incredible. He understands both the technical and business sides perfectly.",
      initials: "FA"
    },
    {
      name: "Muhammad Usman",
      role: "Tech Lead",
      company: "Local Startup",
      image: "/api/placeholder/80/80",
      quote: "Abdul's AI chatbot for financial queries exceeded our expectations. His ability to bridge finance and technology is outstanding.",
      initials: "MU"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            What Colleagues & Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Feedback from business owners, mentors, and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed text-center italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-foreground font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to work together or share your experience?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
