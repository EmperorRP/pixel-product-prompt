const PublicationSection = () => {
  return (
    <section id="publication" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-purple-primary rounded-full mr-3 pulse-circle"></div>
          <span className="text-sm text-text-secondary uppercase tracking-wider">Publication</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Research & Insights
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface-elevated border border-border rounded-2xl p-8 hover:border-purple-primary transition-all duration-300 group">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-purple-primary transition-colors">
                "Data-Driven Product Management: From Insights to Impact"
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                A comprehensive guide on leveraging data analytics for product decision-making, 
                covering methodologies, tools, and real-world case studies from successful product launches.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {["Product Management", "Data Science", "Analytics", "Strategy"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background text-text-secondary text-sm rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="/research" 
                  className="inline-flex items-center text-purple-primary purple-underline font-medium"
                >
                  Read Publication
                  <span className="ml-2">→</span>
                </a>
                <a 
                  href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Yl4xUmoAAAAJ&citation_for_view=Yl4xUmoAAAAJ:u5HHmVD_uO8C" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-primary purple-underline font-medium"
                >
                  Google Scholar
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
            
            {/* Stats */}
            <div className="md:ml-12 flex md:flex-col space-x-8 md:space-x-0 md:space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">550+</div>
                <p className="text-sm text-text-secondary">Downloads</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">30+</div>
                <p className="text-sm text-text-secondary">Citations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;