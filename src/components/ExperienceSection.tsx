const ExperienceSection = () => {
  const experiences = [
    {
      company: "TechCorp Solutions, San Francisco, USA",
      period: "March 2023 - Present",
      role: "Senior Product Manager",
      description: "Led cross-functional teams to deliver user-centric products",
      tags: ["Product Strategy", "Data Analysis", "User Research"]
    },
    {
      company: "InnovateLabs Inc, New York, USA", 
      period: "June 2021 - February 2023",
      role: "Product Manager",
      description: "Drove product roadmap and feature prioritization",
      tags: ["Roadmapping", "Stakeholder Management", "A/B Testing"]
    },
    {
      company: "StartupVenture, Austin, USA",
      period: "January 2020 - May 2021", 
      role: "Associate Product Manager",
      description: "Supported product development from ideation to launch",
      tags: ["Market Research", "Prototyping", "Analytics"]
    },
    {
      company: "DevSolutions Ltd, Boston, USA",
      period: "August 2018 - December 2019",
      role: "Software Developer",
      description: "Full-stack development with focus on user experience",
      tags: ["React", "Node.js", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-start mb-16">
        {/* Left: Section Title */}
        <div className="fade-in">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-purple-primary rounded-full mr-3"></div>
            <span className="text-sm text-text-secondary uppercase tracking-wider">Experiences</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground">
            Explore My Product<br />
            Journey
          </h2>
        </div>
        
        {/* Right: Job Description */}
        <div className="max-w-md slide-left">
          <p className="text-text-secondary leading-relaxed mb-6">
            Over the past 5+ years, I've had the opportunity to work on a 
            wide range of product initiatives, collaborating with diverse 
            teams and stakeholders to bring innovative solutions to market.
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
                      className="px-3 py-1 bg-surface-elevated text-text-secondary text-sm rounded-full border border-border"
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
    </section>
  );
};

export default ExperienceSection;