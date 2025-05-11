
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, BookOpen, FileText, Mail, User, Award } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-professor-navy text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-serif font-bold hover:text-professor-gold transition-colors">
            Prof. Ajay Agarwal
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-professor-maroon focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="py-2 px-3 flex items-center hover:text-professor-gold transition-colors">
              <User className="mr-1" size={18} />
              <span>Home</span>
            </Link>
            <Link to="/about" className="py-2 px-3 flex items-center hover:text-professor-gold transition-colors">
              <BookOpen className="mr-1" size={18} />
              <span>About Me</span>
            </Link>
            <Link to="/research" className="py-2 px-3 flex items-center hover:text-professor-gold transition-colors">
              <Book className="mr-1" size={18} />
              <span>Research</span>
            </Link>
            <Link to="/publications" className="py-2 px-3 flex items-center hover:text-professor-gold transition-colors">
              <FileText className="mr-1" size={18} />
              <span>Publications</span>
            </Link>
            <Link to="/awards" className="py-2 px-3 flex items-center hover:text-professor-gold transition-colors">
              <Award className="mr-1" size={18} />
              <span>Awards</span>
            </Link>
            <Link to="/contact" className="py-2 px-3 flex items-center hover:text-professor-gold transition-colors">
              <Mail className="mr-1" size={18} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-professor-gold">
            <Link 
              to="/" 
              className="block py-3 px-4 hover:bg-professor-gold/20 rounded-md flex items-center"
              onClick={toggleMenu}
            >
              <User className="mr-2" size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className="block py-3 px-4 hover:bg-professor-gold/20 rounded-md flex items-center"
              onClick={toggleMenu}
            >
              <BookOpen className="mr-2" size={18} />
              <span>About Me</span>
            </Link>
            <Link 
              to="/research" 
              className="block py-3 px-4 hover:bg-professor-gold/20 rounded-md flex items-center"
              onClick={toggleMenu}
            >
              <Book className="mr-2" size={18} />
              <span>Research</span>
            </Link>
            <Link 
              to="/publications"
              className="block py-3 px-4 hover:bg-professor-gold/20 rounded-md flex items-center"
              onClick={toggleMenu}
            >
              <FileText className="mr-2" size={18} />
              <span>Publications</span>
            </Link>
            <Link 
              to="/awards"
              className="block py-3 px-4 hover:bg-professor-gold/20 rounded-md flex items-center"
              onClick={toggleMenu}
            >
              <Award className="mr-2" size={18} />
              <span>Awards</span>
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 px-4 hover:bg-professor-gold/20 rounded-md flex items-center"
              onClick={toggleMenu}
            >
              <Mail className="mr-2" size={18} />
              <span>Contact</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
