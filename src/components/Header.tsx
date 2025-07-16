import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Experience','Education','Projects','Publication','Skills','About','Resume','Contact'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-foreground">RP</div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-text-secondary hover:text-foreground purple-underline transition-colors duration-300">
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>
        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-2xl text-text-secondary">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-base text-foreground hover:text-purple-primary transition-colors">
                {item}
              </a>
            ))}
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;