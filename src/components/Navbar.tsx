import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, User, Search } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const navItems = [
    { name: 'New Collection', href: '#', hasDropdown: true },
    { name: 'Women', href: '#', hasDropdown: true },
    { name: 'Men', href: '#', hasDropdown: true },
    { name: 'Accessories', href: '#', hasDropdown: true },
    { name: 'About', href: '#', hasDropdown: false },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="navbar-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="navbar-brand">
            <a href="/" className="brand-logo">HattsOff</a>
          </div>
        </div>

        <nav className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.name}
                  {item.hasDropdown && <span className="dropdown-indicator"></span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-right">
          <button className="navbar-icon-button">
            <Search size={20} />
          </button>
          <button className="navbar-icon-button">
            <User size={20} />
          </button>
          <button className="navbar-icon-button cart-button">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <ul className="mobile-nav">
            {navItems.map((item, index) => (
              <li key={index} className="mobile-nav-item">
                <a href={item.href} className="mobile-nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;