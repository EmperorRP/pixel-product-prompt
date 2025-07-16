const EducationSection = () => {
  const education = [
    {
      institution: "Boston University",
      period: "Aug 2025 – Dec 2026",
      degree: "Masters of Science in Business Analytics (Co-op)",
      description: "Awarded the highly selective Director's Achievement Scholarship ($20,000)",
      tags: ["Business Analytics", "Data Analytics", "Machine Learning"]
    },
    {
      institution: "IIIT Delhi", 
      period: "Dec 2020 – May 2024",
      degree: "Bachelor of Technology in Computer Science and Design (HCI)",
      description: "Specialized in Human-Computer Interaction and product design",
      tags: ["Computer Science", "HCI", "Product Design"]
    }
  ];

  return (
    <section id="education" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
        {/* Left: Section Title */}
        <div className="fade-in">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-purple-primary rounded-full mr-3 pulse-circle"></div>
            <span className="text-sm text-text-secondary uppercase tracking-wider">Education</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground">
            Academic<br />
            Foundation
          </h2>
        </div>
        
        {/* Right: Description */}
        <div className="max-w-md mt-8 slide-left">
          <p className="text-text-secondary leading-relaxed mb-6">
            Strong technical foundation combined with business acumen, 
            providing the perfect blend for product management excellence.
          </p>
        </div>
      </div>
      
      {/* Education Timeline */}
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="fade-in border-b border-border pb-12 last:border-b-0"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
              <div className="lg:flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {edu.institution}
                </h3>
                <p className="text-text-secondary mb-2">{edu.period}</p>
              </div>
              
              <div className="lg:flex-1 lg:ml-12">
                <h4 className="text-lg font-medium text-purple-primary mb-2">
                  {edu.degree}
                </h4>
                <p className="text-text-secondary mb-4">
                  {edu.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag, tagIndex) => (
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

export default EducationSection;