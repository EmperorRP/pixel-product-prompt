import heroImage from '@/assets/profile-hero.jpg';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import '@fontsource/pacifico';

const HeroSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/saileelarahulpujari', icon: FaLinkedin },
    { name: 'GitHub', href: 'https://github.com/EmperorRP', icon: FaGithub },
    { name: 'Medium', href: 'https://medium.com/@therahulpujari', icon: FaMedium }
  ];

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
      {/* Left Content */}
      <div className="flex-1 max-w-3xl fade-in relative z-10">
        {/* Responsive Title */}
        <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-tight mb-6">
          Product Oriented
        </h3>
        {/* Description */}
        <p className="text-base sm:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
          Hey! I'm Rahul Pujari! I'm an Engineer-turned-Product Person passionate about AI, UX, Data and impact. Open to product roles where curiosity meets execution.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-foreground hover:border-purple-primary transition-all duration-300 hover:scale-110"
              >
                <IconComponent size={18} />
              </a>
            );
          })}
        </div>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-center md:justify-end slide-left relative z-10 mt-12 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-hero-accent rounded-[3rem] -rotate-6 transform scale-110"></div>
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden">
            <img src={heroImage} alt="Rahul Pujari - Product Manager" className="w-full h-full object-cover" />
          </div>
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