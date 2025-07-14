const ContactSection = () => {
  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-purple-primary rounded-full mr-3"></div>
          <span className="text-sm text-text-secondary uppercase tracking-wider">Contact</span>
        </div>
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Let's Build Something<br />
          Amazing Together
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          Ready to discuss your next product opportunity? I'm always excited to explore 
          new challenges and collaborate on innovative solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Email */}
        <div className="text-center fade-in">
          <div className="w-16 h-16 bg-surface-elevated border border-border rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📧</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
          <a 
            href="mailto:hello@productmanager.dev" 
            className="text-text-secondary purple-underline hover:text-purple-primary transition-colors"
          >
            hello@productmanager.dev
          </a>
        </div>
        
        {/* LinkedIn */}
        <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="w-16 h-16 bg-surface-elevated border border-border rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💼</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
          <a 
            href="https://linkedin.com/in/productmanager" 
            className="text-text-secondary purple-underline hover:text-purple-primary transition-colors"
          >
            /in/productmanager
          </a>
        </div>
        
        {/* Schedule */}
        <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="w-16 h-16 bg-surface-elevated border border-border rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Schedule</h3>
          <a 
            href="#" 
            className="text-text-secondary purple-underline hover:text-purple-primary transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="text-center mt-12">
        <a 
          href="mailto:hello@productmanager.dev"
          className="inline-flex items-center px-8 py-4 bg-purple-primary text-white rounded-full hover:bg-purple-dark transition-colors font-medium"
        >
          Get in Touch
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;