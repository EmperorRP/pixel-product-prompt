const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product",
      skills: [
        "Product Strategy", "User Research", "Market Analysis", "User Personas",
        "Product Roadmapping", "Feature Prioritization", "Stakeholder Management", "Product Analytics", "User Story Writing"
      ]
    },
    {
      title: "Data", 
      skills: [
        "SQL", "Python", "Apache Airflow DAGs", "Data Visualization", "Statistical Analysis",
       "Tableau", "Data Pipeline", "PowerBI"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Figma", "Notion", "Slack", "Miro", "ProductBoard", "GitHub", "Cursor", "Excel"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface-elevated">
      <div className=" max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-purple-primary rounded-full mr-3"></div>
          <span className="text-sm text-text-secondary uppercase tracking-wider">Skills</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Expertise & Tools
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A comprehensive toolkit spanning product management, data analysis, 
          and modern development practices.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.title}
            className="fade-in"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 bg-background text-text-secondary text-sm rounded-full border border-border hover:border-purple-primary hover:text-purple-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

export default SkillsSection;