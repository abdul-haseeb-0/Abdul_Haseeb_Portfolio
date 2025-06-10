
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdulhaseebmirza69@gmail.com",
      href: "mailto:abdulhaseebmirza69@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 326 1087203",
      href: "tel:+923261087203"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Faisalabad, Pakistan",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abdul-haseeb",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/abdulhaseeb",
      href: "#"
    }
  ];

  const quickStats = [
    { label: "Years in Accounting", value: "1+" },
    { label: "AI Projects Completed", value: "10+" },
    { label: "Hackathons Participated", value: "5+" },
    { label: "Businesses Helped", value: "15+" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring innovative AI solutions to your financial workflows? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get In Touch</CardTitle>
                <p className="text-muted-foreground">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations in the intersection of finance and AI technology.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      contact.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Ready to Start a Project?</h3>
                  <p className="text-muted-foreground">
                    Whether you need accounting automation, AI-powered financial tools, 
                    or innovative solutions for your business challenges, I'm here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="mailto:abdulhaseebmirza69@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="#about">
                        Learn More About Me
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-2xl font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Currently Available</h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Open for new opportunities</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Actively seeking full-time positions in FinTech, AI development, 
                    or accounting automation roles.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Specializations</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Financial Process Automation</p>
                    <p>• AI-Powered Accounting Tools</p>
                    <p>• Data Analysis & Reporting</p>
                    <p>• Business Intelligence Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Abdul Haseeb. Built with modern web technologies and a passion for innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
