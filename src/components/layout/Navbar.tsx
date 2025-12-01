import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink } from '../../types';
import { navLinks } from '../../data';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const renderNavLinks = (links: NavLink[], mobile: boolean = false) => {
    return links.map((link) => {
      const hasSubLinks = link.subLinks && link.subLinks.length > 0;
      const isHashLink = link.path.startsWith('#') || link.path.startsWith('/#');
      
      return (
        <li key={link.name} className={`${mobile ? 'py-3' : 'relative group flex items-center'}`}>
          {hasSubLinks ? (
            <>
              <button
                className={`flex items-center transition-colors ${mobile ? 'w-full justify-between' : 'px-4 py-2 h-full'} ${
                  scrolled || mobile ? 'text-gray-800 hover:text-secondary-500' : 'text-white hover:text-secondary-100'
                }`}
                onClick={mobile ? () => toggleSubmenu(link.name) : undefined}
              >
                <span>{link.name}</span>
                {mobile ? (
                  openSubmenu === link.name ? <ChevronUp size={18} /> : <ChevronDown size={18} />
                ) : (
                  <ChevronDown className="ml-1" size={16} />
                )}
              </button>
              
              {mobile ? (
                openSubmenu === link.name && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-secondary-500">
                    {link.subLinks?.map((subLink) => {
                      const isSubHashLink = subLink.path.startsWith('#') || subLink.path.startsWith('/#');
                      const hasNestedSubLinks = subLink.subLinks && subLink.subLinks.length > 0;
                      
                      return (
                        <li key={subLink.name} className="py-2">
                          {hasNestedSubLinks ? (
                            <>
                              <button
                                className="flex items-center justify-between w-full hover:text-secondary-500"
                                onClick={() => toggleSubmenu(subLink.name)}
                              >
                                <span>{subLink.name}</span>
                                {openSubmenu === subLink.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>
                              {openSubmenu === subLink.name && (
                                <ul className="pl-4 mt-2 space-y-2 border-l-2 border-secondary-300">
                                  {subLink.subLinks?.map((nestedLink) => (
                                    <li key={nestedLink.name} className="py-1">
                                      <Link to={nestedLink.path} className="hover:text-secondary-500 text-sm">
                                        {nestedLink.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : isSubHashLink ? (
                            <a href={subLink.path} className="hover:text-secondary-500">
                              {subLink.name}
                            </a>
                          ) : (
                            <Link to={subLink.path} className="hover:text-secondary-500">
                              {subLink.name}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )
              ) : (
                <ul className="absolute z-10 left-0 top-full py-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {link.subLinks?.map((subLink) => {
                    const isSubHashLink = subLink.path.startsWith('#') || subLink.path.startsWith('/#');
                    const hasNestedSubLinks = subLink.subLinks && subLink.subLinks.length > 0;
                    
                    return (
                      <li key={subLink.name} className="relative group/nested">
                        {hasNestedSubLinks ? (
                          <>
                            <button className="w-full flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-secondary-500">
                              <span>{subLink.name}</span>
                              <ChevronDown size={16} className="rotate-[-90deg]" />
                            </button>
                            <ul className="absolute left-full top-0 py-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300">
                              {subLink.subLinks?.map((nestedLink) => (
                                <li key={nestedLink.name}>
                                  <Link
                                    to={nestedLink.path}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-secondary-500"
                                  >
                                    {nestedLink.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : isSubHashLink ? (
                          <a
                            href={subLink.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-secondary-500"
                          >
                            {subLink.name}
                          </a>
                        ) : (
                          <Link
                            to={subLink.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-secondary-500"
                          >
                            {subLink.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          ) : (
            <>
              {isHashLink ? (
                <a
                  href={link.path}
                  className={`transition-colors ${mobile ? 'block' : 'px-4 py-2 h-full flex items-center'} ${
                    scrolled || mobile ? 'text-gray-800 hover:text-secondary-500' : 'text-white hover:text-secondary-100'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`transition-colors ${mobile ? 'block' : 'px-4 py-2 h-full flex items-center'} ${
                    scrolled || mobile ? 'text-gray-800 hover:text-secondary-500' : 'text-white hover:text-secondary-100'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </>
          )}
        </li>
      );
    });
  };

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className={scrolled ? 'text-primary-600' : 'text-white'}>Sentinelix</span>
                <span className="text-secondary-500">AI</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1 h-12">{renderNavLinks(navLinks)}</ul>
            <a
              href="#contact"
              className="ml-6 px-4 py-2 h-10 flex items-center rounded-md bg-secondary-500 text-white font-medium hover:bg-secondary-600 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2">
          <ul className="space-y-1 pt-2 pb-4">
            {renderNavLinks(navLinks, true)}
          </ul>
          <div className="pt-2 pb-4">
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2 rounded-md bg-secondary-500 text-white font-medium hover:bg-secondary-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;