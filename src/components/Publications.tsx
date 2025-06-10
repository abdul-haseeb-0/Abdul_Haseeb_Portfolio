
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ExternalLink, Award, Users, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Automating Financial Workflows with AI: A Practical Guide",
      type: "Technical Article",
      platform: "Medium",
      date: "2024",
      description: "Deep dive into implementing AI-powered automation in traditional accounting processes, featuring real-world case studies from textile industry.",
      tags: ["AI", "Finance", "Automation", "Python"],
      link: "#",
      metrics: "1.2K reads"
    },
    {
      title: "RAG Systems for Financial Document Analysis",
      type: "Case Study",
      platform: "LinkedIn",
      date: "2024",
      description: "How I built a Retrieval-Augmented Generation system to analyze financial documents and generate insights for small businesses.",
      tags: ["RAG", "LLMs", "Document Processing"],
      link: "#",
      metrics: "850 views"
    },
    {
      title: "From Manual Ledgers to AI: Digital Transformation in Sutar Mandi",
      type: "Industry Report",
      platform: "GitHub",
      date: "2024",
      description: "Comprehensive analysis of digitizing accounting processes in one of Asia's largest textile markets.",
      tags: ["Digital Transformation", "Accounting", "Industry Analysis"],
      link: "#",
      metrics: "15 stars"
    }
  ];

  const achievements = [
    {
      title: "Multiple International Hackathons",
      description: "Participated in various AI and fintech hackathons",
      icon: Award,
      date: "2024"
    },
    {
      title: "SMIT AI Excellence",
      description: "Top performer in Agentic AI & Data Science program",
      icon: Users,
      date: "2024"
    },
    {
      title: "Community Speaker",
      description: "Regular speaker at local tech meetups on AI in Finance",
      icon: BookOpen,
      date: "2024"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4">Publications & Recognition</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Thought Leadership & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights and innovations at the intersection of finance and AI technology
          </p>
        </div>

        {/* Publications */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground">Technical Articles & Case Studies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <span className="text-sm text-muted-foreground">{pub.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {pub.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{pub.platform}</span>
                    <span>•</span>
                    <span>{pub.metrics}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group/btn" asChild>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground">Recognition & Speaking</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 
                    flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{achievement.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
