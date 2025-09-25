
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Accounting & Finance",
      icon: "💼",
      skills: [
        { name: "Bookkeeping & Ledger Management", level: 95 },
        { name: "Financial Reporting", level: 90 },
        { name: "Excel & Google Sheets", level: 92 },
        { name: "Manual Ledgers", level: 88 },
        { name: "Financial Analysis", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Generative AI", level: 90 },
        { name: "Large Language Models (LLMs)", level: 88 },
        { name: "RAG Systems", level: 85 },
        { name: "Prompt Engineering", level: 92 },
        { name: "AI Chatbots", level: 87 }
      ]
    },
    {
      title: "Programming & Development",
      icon: "💻",
      skills: [
        { name: "Python", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "Cloud Applications", level: 82 },
        { name: "AI Automation Tools", level: 88 },
        { name: "Database Management", level: 83 }
      ]
    },
    {
      title: "Data Science & Analysis",
      icon: "📊",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 82 },
        { name: "OpenCV", level: 78 },
        { name: "Data Preprocessing", level: 87 },
        { name: "Automated Data Analysis", level: 88 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Diploma in Agentic AI & Data Science",
      provider: "Saylani Mass IT Training (SMIT)",
      status: "Ongoing",
      focus: "AI Agents, Automation, Cloud Apps, Traditional DBs, REST APIs"
    },
    {
      title: "Generative AI & Prompt Engineering",
      provider: "Multiple Providers",
      status: "Completed",
      focus: "Large Language Models (LLMs), RAG-based Applications, AI in Business",
      link: "https://drive.google.com/file/d/1ov-Pfn_-fv6COlfqFGctQxcwmGAT0_mD/view?usp=sharing"
    },
    {
      title: "Intermediate in Computer Science (ICS)",
      provider: "Superior College City Campus",
      status: "Completed",
      focus: "Achieved 83.17% (998/1200)"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of traditional accounting expertise and modern AI development skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">Education & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-foreground leading-tight">
                        {cert.link ? (
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            {cert.title}
                          </a>
                        ) : (
                          cert.title
                        )}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'Ongoing' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{cert.provider}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.focus}</p>
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

export default Skills;
