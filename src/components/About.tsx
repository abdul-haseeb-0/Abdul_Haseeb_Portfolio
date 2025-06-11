
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Brain, Code2, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Financial Expertise",
      description: "Real-world accounting experience in Asia's largest textile market",
      color: "text-blue-600"
    },
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Developing intelligent solutions for financial automation",
      color: "text-purple-600"
    },
    {
      icon: Code2,
      title: "Technical Skills",
      description: "AI developer with focus on AI integration",
      color: "text-green-600"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Expert in database design and automated reporting",
      color: "text-orange-600"
    }
  ];

  const achievements = [
    "Participated in Multiple International Hackathons",
    "Automated financial workflows for textile businesses",
    "Built AI-powered applications for real-world business cases",
    "Enhanced operational efficiency through process automation"
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Bridging Finance & Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A unique combination of traditional accounting expertise and modern AI development, 
            creating innovative solutions for the future of finance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a detail-oriented <span className="font-semibold text-foreground">Accountant</span> with 
                extensive hands-on experience in bookkeeping, ledger management, and financial reporting. 
                My journey began in <span className="font-semibold text-foreground">Sutar Mandi</span> – 
                one of Asia's largest textile markets.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                What sets me apart is my passion for <span className="font-semibold text-foreground">
                applying cutting-edge AI technology</span> to traditional accounting workflows. I specialize 
                in automating financial processes and building intelligent systems that enhance accuracy 
                and operational efficiency.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Key Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-right">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 
                    flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
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
