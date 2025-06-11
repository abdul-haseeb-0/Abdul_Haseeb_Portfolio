
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Code, Database, Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Finance Chatbot",
      category: "AI Development",
      icon: Code,
      description: "A comprehensive AI-powered chatbot that helps businesses with financial queries, report generation, and data analysis. Built using advanced LLMs and RAG architecture for accurate and contextual responses.",
      features: [
        "Natural language financial query processing",
        "Automated report generation",
        "Real-time data analysis",
        "Integration with accounting systems"
      ],
      technologies: ["Python", "LLMs", "RAG", "FastAPI", "PostgreSQL"],
      status: "Production",
      impact: "Reduced query response time by 80% for client businesses"
    },
    {
      title: "RAG-based Document Analysis",
      category: "Document Processing",
      icon: Database,
      description: "An intelligent system for fast document analysis using Retrieval-Augmented Generation, including automated data extraction and insight generation from financial documents.",
      features: [
        "Fast document processing and analysis",
        "Smart information extraction",
        "Contextual insights generation",
        "Multi-format document support"
      ],
      technologies: ["Python", "RAG", "Document AI", "NLP", "Vector DBs"],
      status: "Production",
      impact: "Improved document processing speed by 90% and accuracy by 95%"
    },
    {
      title: "Ledger Matcher",
      category: "Financial Automation",
      icon: Briefcase,
      description: "An automated ledger management system that matches transactions, detects discrepancies, and maintains accurate financial records using machine learning algorithms.",
      features: [
        "Automated transaction matching",
        "Discrepancy detection and alerts",
        "Smart reconciliation algorithms",
        "Real-time financial reporting"
      ],
      technologies: ["Python", "Pandas", "ML Algorithms", "PostgreSQL", "Excel Integration"],
      status: "Production",
      impact: "Enables accurate ledger management for 10+ businesses"
    }
  ];

  const stats = [
    { label: "Businesses Helped", value: "10+" },
    { label: "Hackathons Participated", value: "Multiple" }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications that bridge traditional accounting with cutting-edge AI technology
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{project.category}</Badge>
                    </div>
                  </div>
                  <Badge variant={project.status === 'Production' ? 'default' : 'outline'}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Impact:</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start</h3>
          <p className="text-muted-foreground mb-6">
            I participated in multiple international hackathons and worked with multiple teams on innovative solutions.
          </p>
          <Button size="lg" onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
