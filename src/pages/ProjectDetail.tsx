import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Mock project data - in real app this would come from API
  const project = {
    id: 1,
    title: "Decentralized Journalism Platform (0xFethr)",
    description: "Led end-to-end product discovery for a blockchain-based journalism platform through user interviews, surveys (100+ responses), producing detailed personas and focus group discussions.",
    fullDescription: `
      0xFethr was an ambitious project to create a decentralized journalism platform that would revolutionize how news is created, verified, and consumed. As the Product Lead, I was responsible for the entire product discovery and strategy phase.

      ## Problem Statement
      Traditional journalism faces challenges with censorship, centralized control, and declining trust. Our goal was to create a blockchain-based platform that would enable:
      - Decentralized content creation and verification
      - Transparent funding mechanisms for journalists
      - Community-driven fact-checking
      - Immutable record of news articles

      ## Research & Discovery
      I conducted extensive user research including:
      - 100+ user surveys across journalists and news consumers
      - In-depth interviews with 25+ journalists from different backgrounds
      - Focus group discussions with readers across India
      - Competitive analysis of existing platforms

      ## Key Insights
      - Journalists valued editorial independence above monetary incentives
      - Readers wanted transparent sourcing and fact-checking
      - Both groups were concerned about misinformation
      - Technical complexity needed to be abstracted away

      ## Product Strategy
      Based on research insights, we developed a product strategy focusing on:
      1. User-friendly interface that hides blockchain complexity
      2. Reputation system for journalists and fact-checkers
      3. Token-based incentive mechanisms
      4. Integration with traditional journalism workflows

      ## Impact
      The comprehensive research and strategy work laid the foundation for development and helped secure initial funding for the project.
    `,
    image: "📰",
    tags: ["Blockchain", "Product Discovery", "User Research"],
    year: "2024",
    category: "Product",
    techStack: ["React", "Ethereum", "IPFS", "Figma"],
    links: {
      demo: "#",
      github: "#",
      case_study: "#"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      
      <main className="pt-20">
        {/* Back Button */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-6">
            <Link to="/projects">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12 fade-in">
              <div className="text-6xl mb-6">{project.image}</div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-surface-elevated text-text-secondary rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="default">
                  View Demo
                </Button>
                <Button variant="outline">
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 bg-surface-elevated">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: project.fullDescription.replace(/\n/g, '<br />').replace(/## /g, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">').replace(/<h2/g, '</p><h2').replace(/h2>/g, 'h2><p class="text-text-secondary leading-relaxed">') + '</p>'
                }}
              />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-primary/10 text-purple-primary rounded-full border border-purple-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;