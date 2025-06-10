
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Code, Database, Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Financial Assistant",
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
      title: "Automated Ledger Management System",
      category: "Process Automation",
      icon: Database,
      description: "An intelligent system that automates traditional ledger management processes, including data entry, reconciliation, and error detection using machine learning algorithms.",
      features: [
        "Automated data entry from invoices",
        "Smart reconciliation algorithms",
        "Error detection and correction",
        "Real-time financial reporting"
      ],
      technologies: ["Python", "PostgreSQL", "Excel Integration", "OCR", "ML"],
      status: "Production",
      impact: "Improved accuracy by 95% and reduced manual work by 70%"
    },
    {
      title: "Business Intelligence Dashboard",
      category: "Data Analytics",
      icon: Briefcase,
      description: "A comprehensive dashboard that provides real-time insights into business performance, financial trends, and predictive analytics for textile businesses in Sutar Mandi.",
      features: [
        "Real-time performance metrics",
        "Predictive financial analysis",
        "Interactive data visualizations",
        "Custom report generation"
      ],
      technologies: ["Python", "Streamlit", "Plotly", "MongoDB", "AI Analytics"],
      status: "Development",
      impact: "Enables data-driven decisions for 15+ local businesses"
    }
  ];

  const hackathons = [
    {
      name: "Global AI Hackathon 2024",
      project: "FinTech AI Assistant",
      achievement: "Top 10 Finalist",
      description: "Developed an AI assistant for small businesses to automate financial workflows"
    },
    {
      name: "Pakistan Tech Summit 2024",
      project: "Smart Ledger AI",
      achievement: "Best Innovation Award",
      description: "Created an AI-powered solution for traditional accounting practices"
    },
    {
      name: "International FinTech Challenge",
      project: "Document Analysis AI",
      achievement: "Participant",
      description: "Built RAG-based system for financial document processing"
    }
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

        {/* Main Projects */}
        <div className="space-y-8 mb-16">
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

        {/* Hackathons */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">Hackathon Participation</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">{hackathon.name}</h4>
                      <p className="text-sm font-medium text-primary">{hackathon.project}</p>
                    </div>
                    <Badge variant={hackathon.achievement.includes('Award') ? 'default' : 'secondary'}>
                      {hackathon.achievement}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {hackathon.description}
                    </p>
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

export default Projects;
