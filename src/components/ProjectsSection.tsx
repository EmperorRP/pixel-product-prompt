import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  /* 1. Track how many slides to show (1 on <768px, 3 otherwise) */
  const [slidesToShow, setSlidesToShow] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setSlidesToShow(e.matches ? 1 : 3);

    handler(mq);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /* 2. Your project data */
  const projects = [
    {
      title: "Decentralized Journalism Platform (0xFethr)",
      description:
        "Led end-to-end product discovery for a blockchain-based journalism platform",
      tags: ["Blockchain", "Product Discovery", "User Research"],
      image: "📰",
      year: "2024",
    },
    {
      title: "Battery Swapping Protocol (ChargeSwap)",
      description:
        "ETHGlobal Finalist - Top 12 out of 461 projects for EV battery-swapping protocol",
      tags: ["Blockchain", "Product Strategy", "EV Tech"],
      image: "🔋",
      year: "2024",
    },
    {
      title: "AI Drug Discovery Platform (CovalN)",
      description:
        "Led UX strategy and frontend development for pharmaceutical R&D tools",
      tags: ["UX Design", "Healthcare", "Product Development"],
      image: "🧬",
      year: "2024",
    },
    {
      title: "RAG AI Assistant Chatbot",
      description: "Built end-to-end AI assistant using AWS Bedrock, Lambda, S3",
      tags: ["AI", "AWS"],
      image: "🤖",
      year: "2025",
    },
    {
      title: "LLM Code Documentation Research",
      description:
        "Co-authored ACM research paper with 30+ citations, 550+ downloads",
      tags: ["Research", "AI/ML", "Academic", "Analytics"],
      image: "📄",
      year: "2024",
    },
  ];

  /* 3. Geometry calculations */
  const slideWidth = 100 / slidesToShow;            // percent per slide
  const trackWidth = projects.length * slideWidth;  // total width percent
  const lastIndex = projects.length - slidesToShow; // last valid index

  const [currentIndex, setCurrentIndex] = useState(0);

  /* 4. Handlers */
  const nextSlide = () =>
    setCurrentIndex((i) => (i >= lastIndex ? 0 : i + 1));

  const prevSlide = () =>
    setCurrentIndex((i) => (i <= 0 ? lastIndex : i - 1));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ——— Heading ——— */}
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-purple-primary rounded-full mr-3 pulse-circle"></div>
            <span className="text-sm text-text-secondary uppercase tracking-wider">
              Projects
            </span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of products I've built and managed, showcasing the
            intersection of technology, product strategy, and user-centered
            design.
          </p>
        </div>

        {/* ——— Carousel ——— */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}%)`,
                width: `${trackWidth}%`,
              }}
            >
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="px-4 flex-shrink-0"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className="bg-surface-elevated border border-border rounded-2xl p-8 hover:border-purple-primary transition-all duration-300 group cursor-pointer h-50 hover:scale-104 hover:shadow-lg hover:shadow-purple-primary/10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl">{project.image}</div>
                      <span className="text-sm text-text-secondary">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={ti}
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

          {/* ——— Arrows ——— */}
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

          {/* ——— Dots ——— */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: lastIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-purple-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ——— “View All” Link ——— */}
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
