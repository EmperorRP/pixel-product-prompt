const AchievementsSection = () => {
  const achievements = [
    {
      title: "ETHIndia'22 Winner",
      description: "Top 12 out of 461 projects at India's largest Ethereum hackathon",
      icon: "🏆",
      category: "Competition"
    },
    {
      title: "AWS Triple Certified",
      description: "Machine Learning – Associate, AI Practitioner, and Cloud Practitioner",
      icon: "☁️",
      category: "Certification"
    },
    {
      title: "Research Publication",
      description: "30+ citations, 550+ downloads on LLM code documentation research",
      icon: "📄",
      category: "Academic"
    },
    {
      title: "Director's Achievement Scholarship",
      description: "$20,000 scholarship for academic excellence at Boston University",
      icon: "🎓",
      category: "Academic"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-purple-primary rounded-full mr-3 pulse-circle"></div>
            <span className="text-sm text-text-secondary uppercase tracking-wider">Achievements</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Recognition & Milestones
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Key achievements and recognitions that highlight my journey in technology, 
            product management, and academic excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-surface-elevated border border-border rounded-2xl p-6 hover:border-purple-primary transition-all duration-300 group fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {achievement.description}
              </p>
              <span className="px-3 py-1 bg-background text-text-secondary text-xs rounded-full border border-border">
                {achievement.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;