
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Briefcase, Code, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Unique Background",
      description: "Combining traditional accounting expertise with modern AI development skills"
    },
    {
      icon: Briefcase,
      title: "Real-World Experience",
      description: "Hands-on accounting experience in Sutar Mandi, one of Asia's largest textile markets"
    },
    {
      icon: Code,
      title: "AI Innovation",
      description: "Developed AI-powered applications for financial automation and business intelligence"
    },
    {
      icon: Database,
      title: "Process Automation",
      description: "Specialized in automating data cleaning, analysis, and financial reporting workflows"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A detail-oriented professional who bridges traditional finance with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a detail-oriented <strong>Accountant</strong> with extensive hands-on experience in bookkeeping, 
                ledger management, and financial reporting. My journey began in <strong>Sutar Mandi</strong> – one of 
                Asia's largest textile markets – where I gained practical expertise in real-world financial operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets me apart is my passion for <strong>applying modern AI technology</strong> to traditional 
                accounting workflows. I specialize in automating financial processes, enhancing accuracy, and 
                improving operational efficiency through innovative AI solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a <strong>Gen AI & Prompt Engineer</strong>, I've developed several AI-powered applications 
                that solve real-world business problems, particularly in financial analysis and reporting.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Key Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Participated in Multiple International Hackathons
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated data cleaning and financial analysis workflows
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed AI-powered applications for real-world business use cases
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enhanced accounting workflows for businesses in Sutar Mandi
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
