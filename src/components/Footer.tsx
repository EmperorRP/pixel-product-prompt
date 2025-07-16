const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold text-foreground mb-2">
              Product Manager Portfolio
            </div>
            <p className="text-text-secondary">
              Building products that connect users with meaningful experiences.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com/in/saileelarahulpujari' },
              { name: 'GitHub', href: 'https://github.com/EmperorRP' },
              { name: 'Medium', href: 'https://medium.com/@therahulpujari' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-text-secondary hover:text-purple-primary transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary text-sm">
          <p>© 2025 Rahul Pujari's Personal Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;