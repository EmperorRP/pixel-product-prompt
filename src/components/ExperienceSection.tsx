const ExperienceSection = () => {
  const experiences = [
    {
      company: "CovalN - AI Drug Discovery (Startup), New Delhi, India",
      period: "June 2024 – Feb 2025",
      role: "Product & UX Engineer",
      description: "Led end-to-end UX strategy and frontend development using Figma, React, and Tailwind to build R&D tools for pharmaceutical researchers.",
      tags: ["Product Strategy", "UX Design", "React", "Tailwind"]
    },
    {
      company: "Maverick Partners (UK), Remote", 
      period: "March 2025 – July 2025",
      role: "AI Product Engineer",
      description: "Created and deployed an end-to-end serverless AI assistant using AWS Bedrock, Lambda, S3, Aurora Serverless, and Comprehend.",
      tags: ["AI/ML", "AWS", "Serverless", "Product Development"]
    },
    {
      company: "Google Developer Student Club (GDSC), IIIT Delhi",
      period: "Jan 2024 – May 2024", 
      role: "Blockchain Team Lead",
      description: "Organized Web3 events with 150+ attendees, handling end-to-end logistics, speaker coordination, and partnership building.",
      tags: ["Leadership", "Event Management", "Blockchain", "Community Building"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-16">
          {/* Left: Section Title */}
          <div className="fade-in">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-purple-primary rounded-full mr-3 pulse-circle"></div>
              <span className="text-sm text-text-secondary uppercase tracking-wider">Experiences</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground">
              My Professional<br />
              Journey
            </h2>
          </div>
          
          {/* Right: Job Description */}
          <div className="max-w-md slide-left">
            <p className="text-text-secondary leading-relaxed mb-6">
              Transitioning from Software Engineering to Product Management, 
              with hands-on experience in AI/ML, blockchain, and user-centered design.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-purple-primary purple-underline font-medium"
            >
              Let's Connect
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      
        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="fade-in border-b border-border pb-12 last:border-b-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="lg:flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-text-secondary mb-2">{exp.period}</p>
                </div>
                
                <div className="lg:flex-1 lg:ml-12">
                  <h4 className="text-lg font-medium text-purple-primary mb-2">
                    {exp.role}
                  </h4>
                  <p className="text-text-secondary mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;