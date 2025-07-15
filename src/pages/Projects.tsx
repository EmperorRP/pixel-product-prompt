import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filterTag, setFilterTag] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "Decentralized Journalism Platform (0xFethr)",
      description: "Led end-to-end product discovery for a blockchain-based journalism platform through user interviews, surveys (100+ responses), producing detailed personas and focus group discussions.",
      image: "📰",
      tags: ["Blockchain", "Product Discovery", "User Research"],
      year: "2024",
      category: "Product"
    },
    {
      id: 2,
      title: "Battery swapping protocol – ETHGlobal Finalist (ChargeSwap)",
      description: "Owned product roadmap and design for a decentralized EV battery-swapping protocol, enabling station discovery, validation, and payments. Finished in the Top 12 out of 461 projects.",
      image: "🔋",
      tags: ["Blockchain", "Product Strategy", "EV Tech"],
      year: "2024",
      category: "Product"
    },
    {
      id: 3,
      title: "AI Drug Discovery Platform (CovalN)",
      description: "Led UX strategy and frontend development for pharmaceutical R&D tools. Designed MVP that enabled successful seed funding and built molecule visualization tools.",
      image: "🧬",
      tags: ["AI/ML", "UX Design", "Healthcare"],
      year: "2024",
      category: "Product"
    },
    {
      id: 4,
      title: "Serverless AI Assistant (Maverick Partners)",
      description: "Created end-to-end serverless AI assistant using AWS Bedrock, Lambda, S3, Aurora Serverless. Cut backend costs by 50% with optimized vector search infrastructure.",
      image: "🤖",
      tags: ["AI/ML", "AWS", "Serverless"],
      year: "2025",
      category: "Engineering"
    },
    {
      id: 5,
      title: "LLM Code Documentation Research",
      description: "Co-authored ACM research paper evaluating 5 LLMs for auto-generating documentation. 30+ citations, 550+ downloads.",
      image: "📄",
      tags: ["Research", "AI/ML", "Academic"],
      year: "2024",
      category: "Research"
    }
  ];

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  const filteredProjects = filterTag === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filterTag));

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 glass-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center fade-in">
              <h1 className="text-6xl font-bold text-foreground mb-6">
                Featured Projects
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                A collection of products, research, and technical projects showcasing 
                the intersection of technology, design, and user-centered innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-surface-elevated">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={filterTag === tag ? "default" : "outline"}
                  onClick={() => setFilterTag(tag)}
                  className="rounded-full"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-surface-elevated border border-border rounded-2xl p-8 hover:border-purple-primary transition-all duration-300 h-full">
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;