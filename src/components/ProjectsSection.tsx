import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: "Decentralized Journalism Platform (0xFethr)",
      description: "Led end-to-end product discovery for a blockchain-based journalism platform",
      tags: ["Blockchain", "Product Discovery", "User Research"],
      image: "📰",
      year: "2024"
    },
    {
      title: "Battery Swapping Protocol (ChargeSwap)",
      description: "ETHGlobal Finalist - Top 12 out of 461 projects for EV battery-swapping protocol",
      tags: ["Blockchain", "Product Strategy", "EV Tech"],
      image: "🔋",
      year: "2024"
    },
    {
      title: "AI Drug Discovery Platform (CovalN)",
      description: "Led UX strategy and frontend development for pharmaceutical R&D tools",
      tags: ["AI/ML", "UX Design", "Healthcare"],
      image: "🧬",
      year: "2024"
    },
    {
      title: "Serverless AI Assistant",
      description: "Built end-to-end AI assistant using AWS Bedrock, reducing costs by 50%",
      tags: ["AI/ML", "AWS", "Serverless"],
      image: "🤖",
      year: "2025"
    },
    {
      title: "LLM Code Documentation Research",
      description: "Co-authored ACM research paper with 30+ citations, 550+ downloads",
      tags: ["Research", "AI/ML", "Academic"],
      image: "📄",
      year: "2024"
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-purple-primary rounded-full mr-3 pulse-circle"></div>
            <span className="text-sm text-text-secondary uppercase tracking-wider">Projects</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of products I've built and managed, showcasing the intersection 
            of technology, product strategy, and user-centered design.
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
                <div className="bg-surface-elevated border border-border rounded-2xl p-8 hover:border-purple-primary transition-all duration-300 group cursor-pointer h-80 hover:scale-105 hover:shadow-lg hover:shadow-purple-primary/10">
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
            className="inline-flex items-center text-purple-primary purple-underline font-medium hover:scale-105 transition-transform"
          >
            View All Projects
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;