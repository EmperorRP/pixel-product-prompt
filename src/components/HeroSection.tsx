import heroImage from '@/assets/profile-hero.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-between max-w-7xl mx-auto px-6 py-20">
      {/* Left Content */}
      <div className="flex-1 max-w-3xl fade-in">
        {/* Large Title */}
        <h1 className="text-8xl md:text-9xl font-black text-foreground leading-none mb-8">
          Product<br />
          Manager
        </h1>
        
        {/* Description */}
        <p className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
          Welcome to a strategic journey that transcends features and roadmaps. 
          Discover the artistry of building products that connect users with meaningful experiences.
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4 mb-12">
          {[
            { name: 'LinkedIn', href: '#' },
            { name: 'GitHub', href: '#' },
            { name: 'Twitter', href: '#' },
            { name: 'Medium', href: '#' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-foreground hover:border-purple-primary transition-all duration-300"
            >
              {social.name.substring(0, 2)}
            </a>
          ))}
        </div>
        
        {/* Stats */}
        <div className="flex space-x-16">
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">+5</div>
            <p className="text-sm text-text-secondary">
              Years building products that<br />drive user engagement and growth
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-foreground mb-2">+15</div>
            <p className="text-sm text-text-secondary">
              Products launched, from concept<br />to market success
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="flex-1 flex justify-end slide-left">
        <div className="relative">
          {/* Orange background shape */}
          <div className="absolute inset-0 bg-hero-accent rounded-[3rem] -rotate-6 transform scale-110"></div>
          
          {/* Profile image container */}
          <div className="relative w-96 h-96 rounded-[3rem] overflow-hidden">
            <img
              src={heroImage}
              alt="Product Manager"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-background border border-border rounded-full flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;