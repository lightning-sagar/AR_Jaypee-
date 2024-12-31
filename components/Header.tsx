'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Demo', href: '#book-demo' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="h-0" />
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-5 left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-300 ${
          isScrolled ? 'transform -translate-y-2' : ''
        }`}
      >
        <nav className={`rounded-2xl backdrop-blur-md ${
          isScrolled 
            ? 'bg-black/80 shadow-lg shadow-black/20' 
            : 'bg-black/50'
        }`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                The VR Estate
              </motion.div>

              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>

            <motion.div
              initial={false}
              animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;