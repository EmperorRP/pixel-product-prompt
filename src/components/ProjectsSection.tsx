import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: "E-commerce Analytics Platform",
      description: "Built a comprehensive analytics dashboard that increased user retention by 40%",
      tags: ["Product Strategy", "Data Analytics", "User Research"],
      image: "🛒",
      year: "2023"
    },
    {
      title: "Mobile Banking App",
      description: "Led the design and development of a secure mobile banking solution",
      tags: ["Fintech", "Mobile UX", "Security"],
      image: "💳",
      year: "2023"
    },
    {
      title: "AI-Powered Recruitment Tool",
      description: "Developed an ML-driven platform that reduced hiring time by 60%",
      tags: ["AI/ML", "Automation", "HR Tech"],
      image: "🤖",
      year: "2022"
    },
    {
      title: "SaaS Project Management",
      description: "Created a collaborative workspace that improved team productivity",
      tags: ["SaaS", "Collaboration", "Productivity"],
      image: "📊",
      year: "2022"
    },
    {
      title: "Healthcare Data Platform",
      description: "Built HIPAA-compliant platform for medical data management",
      tags: ["Healthcare", "Data Security", "Compliance"],
      image: "🏥",
      year: "2021"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= projects.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? projects.length - 3 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-purple-primary rounded-full mr-3"></div>
          <span className="text-sm text-text-secondary uppercase tracking-wider">Projects</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Featured Work
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A selection of products I've built and managed, showcasing the intersection 
          of technology and user-centered design.
        </p>
      </div>
      
      {/* Project Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(projects.length * 100) / 3}%`
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="w-full px-4 flex-shrink-0"
                style={{ width: `${100 / projects.length}%` }}
              >
                <div className="bg-surface-elevated border border-border rounded-2xl p-8 hover:border-purple-primary transition-all duration-300 group cursor-pointer h-80">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{project.image}</div>
                    <span className="text-sm text-text-secondary">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-background text-text-secondary text-sm rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="w-10 h-10 p-0 border-border hover:border-purple-primary hover:bg-surface-hover"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="w-10 h-10 p-0 border-border hover:border-purple-primary hover:bg-surface-hover"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: projects.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* View All Projects Link */}
      <div className="text-center mt-12">
        <a 
          href="/projects" 
          className="inline-flex items-center text-purple-primary purple-underline font-medium"
        >
          View All Projects
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;