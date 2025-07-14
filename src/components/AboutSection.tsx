import aboutImage from '@/assets/profile-about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6 bg-surface-elevated">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="fade-in">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-purple-primary rounded-full mr-3"></div>
            <span className="text-sm text-text-secondary uppercase tracking-wider">About Me</span>
          </div>
          
          <h2 className="text-5xl font-bold text-foreground mb-8">
            About Me
          </h2>
          
          <p className="text-text-secondary leading-relaxed mb-8">
            I specialize in turning complex problems into elegant solutions. My approach blends creativity with 
            strategic thinking to deliver products that not only look great but work seamlessly. Ready to start your 
            next project?
          </p>
          
          {/* Statistics */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center mr-4">
                <span className="text-xl">📈</span>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground">120%</div>
                <p className="text-sm text-text-secondary">
                  Average increase in user engagement in the first 6 months
                </p>
              </div>
            </div>
          </div>
          
          {/* Key Points */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white text-xs">+</span>
              </div>
              <p className="text-text-secondary">
                With 5+ years of experience, I specialize in creating intuitive, user-focused products that 
                solve real-world problems and deliver seamless digital experiences.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-white text-xs">+</span>
              </div>
              <p className="text-text-secondary">
                I thrive on working closely with cross-functional teams, blending technical expertise with strategic 
                vision to bring innovative product ideas to life through thoughtful, impactful solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Images */}
        <div className="slide-left">
          <div className="relative">
            {/* Main image */}
            <div className="relative mb-6">
              <img
                src={aboutImage}
                alt="About me"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center">
                <span className="text-2xl">→</span>
              </div>
            </div>
            
            {/* Secondary image placeholder */}
            <div className="relative w-48 h-48 bg-surface-hover rounded-2xl overflow-hidden border border-border">
              <img
                src={aboutImage}
                alt="Additional about image"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;