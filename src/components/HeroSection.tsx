import heroImage from '@/assets/profile-hero.jpg';
import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from 'react-icons/fa';
import '@fontsource/pacifico';

const HeroSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/saileelarahulpujari', icon: FaLinkedin },
    { name: 'GitHub', href: 'https://github.com/EmperorRP', icon: FaGithub },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Medium', href: '#', icon: FaMedium }
  ];

  return (
    <section className="min-h-screen flex items-center justify-between max-w-7xl mx-auto px-6 py-20 relative glass-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-transparent"></div>
      
      {/* Left Content */}
      <div className="flex-1 max-w-3xl fade-in relative z-10">
        {/* Large Title */}
        <h1 className="text-8xl md:text-9xl font-black text-foreground leading-none mb-8">
          Product<br />
          Manager
        </h1>
        
        {/* Description */}
        <p className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
          Ex-Software Engineer transitioning into Product Management & Data Science. 
          Building the bridge between technical excellence and user-centered solutions.
        </p>
        
        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-foreground hover:border-purple-primary transition-all duration-300 hover:scale-110"
              >
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Right Image */}
      <div className="flex-1 flex justify-end slide-left relative z-10">
        <div className="relative">
          {/* Orange background shape */}
          <div className="absolute inset-0 bg-hero-accent rounded-[3rem] -rotate-6 transform scale-110"></div>
          
          {/* Profile image container */}
          <div className="relative w-96 h-96 rounded-[3rem] overflow-hidden">
            <img
              src={heroImage}
              alt="Rahul Pujari - Product Manager"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Squiggly Arrow and Name */}
          <div className="absolute -top-16 -left-32 flex items-center">
            <svg 
              width="120" 
              height="60" 
              viewBox="0 0 120 60" 
              className="text-purple-primary mr-4"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                d="M10 30 Q 30 10, 50 30 T 90 30 L 85 25 M 90 30 L 85 35" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span 
              className="text-2xl text-purple-primary whitespace-nowrap"
              style={{ fontFamily: 'Pacifico, cursive' }}
            >
              Rahul Pujari
            </span>
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