
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Accountant",
      company: "Multiple Local Businesses",
      location: "Sutar Mandi, Faisalabad",
      period: "Mar 2024 – Present",
      type: "Full-time",
      description: "Working with multiple businesses in one of Asia's largest textile markets, providing comprehensive accounting services and implementing modern financial workflows.",
      achievements: [
        "Maintained accurate financial records and ledger books for multiple textile businesses",
        "Performed detailed reconciliations and created custom financial reports",
        "Collaborated with business owners to enhance accounting workflows using modern tools",
        "Implemented automated solutions to improve accuracy and efficiency"
      ],
      skills: ["Bookkeeping", "Financial Reporting", "Ledger Management", "Reconciliation", "Excel"]
    },
    {
      title: "AI Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Jan 2024 – Present",
      type: "Freelance",
      description: "Developing and deploying AI-powered applications with focus on financial automation and business intelligence solutions.",
      achievements: [
        "Built and deployed multiple AI applications including financial chatbots",
        "Integrated RAG (Retrieval-Augmented Generation) systems for document analysis",
        "Developed automated solutions for financial data processing and reporting",
        "Created AI-powered tools for business analysis and decision-making"
      ],
      skills: ["Python", "RAG Systems", "LLMs", "Chatbots", "AI Automation", "Cloud Apps"]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Financial Chatbot",
      description: "Developed an intelligent chatbot that can answer financial queries and generate reports",
      technologies: ["Python", "LLMs", "RAG", "Financial APIs"]
    },
    {
      title: "Automated Data Processing Pipeline",
      description: "Created automated workflows for cleaning and analyzing financial data",
      technologies: ["Python", "PostgreSQL", "Data Analysis", "Automation"]
    },
    {
      title: "Document Analysis System",
      description: "Built RAG-based system for analyzing and extracting insights from financial documents",
      technologies: ["RAG", "Document Processing", "AI", "Business Intelligence"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise at the intersection of traditional accounting and modern AI technology
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-foreground">{exp.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="font-semibold text-lg">{exp.company}</span>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">{project.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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

export default Experience;
