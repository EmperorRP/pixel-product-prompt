import aboutImage from '@/assets/profile-about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-purple-primary rounded-full mr-3"></div>
              <span className="text-sm text-text-secondary uppercase tracking-wider">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A bit about me
            </h2>

            <p className="text-text-secondary leading-relaxed mb-6">
              Hey I’m Rahul! I started out in software engineering, but along the way, I realized I’m just as interested in <em>why</em> we build something as I am in <em>how</em>. Product Management felt like the natural next step — it lets me blend my love for design, business, and tech, while also giving me a good excuse to talk to people (which I genuinely enjoy).
            </p>

            <p className="text-text-secondary leading-relaxed mb-8">
              I listen first, experiment fast, and keep improving until the user’s happy.
            </p>

            {/* Fun Facts */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">🎙️</span>
                </div>
                <p className="text-text-secondary">Ran a podcast where I interviewed founders, scientists, and creators</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">🧳</span>
                </div>
                <p className="text-text-secondary">Lived in Japan for 2 months — craving 'em konbini egg sandwiches</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">♟️</span>
                </div>
                <p className="text-text-secondary">Big fan of chess, lifting weights, Brawlhalla, anime & building LEGO (not necessarily in that order)</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">💡</span>
                </div>
                <p className="text-text-secondary">Believer in micro improvements — until the user smiles :)</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative slide-left">
            <div className="relative mb-6">
              <img
                src={aboutImage}
                alt="Rahul Pujari in Yokohama"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
