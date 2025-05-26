import React, { useState } from 'react'
import { Link, useLocation } from 'react-router';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between relative">
      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent select-none">
        Dhruv Verma
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-cyan-400 border-cyan-400 hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Desktop nav */}
      <ul className="hidden md:flex space-x-2 md:space-x-6 text-base md:text-lg font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={`px-3 py-2 rounded transition-colors duration-200 hover:bg-slate-800/60 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${location.pathname === link.href ? 'bg-slate-800/80 text-cyan-400' : 'text-slate-200'}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile nav */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-slate-950/95 flex flex-col items-center py-4 space-y-2 z-20 shadow-lg md:hidden animate-fade-in-up">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full">
              <Link
                to={link.href}
                className={`block w-full px-6 py-3 rounded transition-colors duration-200 hover:bg-slate-800/60 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${location.pathname === link.href ? 'bg-slate-800/80 text-cyan-400' : 'text-slate-200'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar