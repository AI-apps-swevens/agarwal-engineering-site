
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-professor-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-professor-gold text-lg font-bold mb-4">Contact Information</h3>
            <p className="mb-2">Prof. Ajay Agarwal</p>
            <p className="mb-2">Professor, Ex-Head, Department of Electrical Engineering</p>
            <p className="mb-2">Indian Institute of Technology Jodhpur</p>
            <p className="mb-2">5123 Type-B, IIT Jodhpur Campus</p>
            <p className="mb-2">NH 62, Nagaur Road, Karwar-342030 Jodhpur (INDIA)</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-professor-gold text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-professor-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-professor-gold transition-colors">About Me</Link></li>
              <li><Link to="/research" className="hover:text-professor-gold transition-colors">Research</Link></li>
              <li><Link to="/publications" className="hover:text-professor-gold transition-colors">Publications</Link></li>
              <li><Link to="/awards" className="hover:text-professor-gold transition-colors">Awards</Link></li>
              <li><Link to="/contact" className="hover:text-professor-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* External Links */}
          <div>
            <h3 className="text-professor-gold text-lg font-bold mb-4">External Links</h3>
            <ul className="space-y-2">
              <li><a href="https://scholar.google.com/citations?user=XUwFhB8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-professor-gold transition-colors">Google Scholar</a></li>
              <li><a href="https://orcid.org/0000-0003-2204-9553" target="_blank" rel="noopener noreferrer" className="hover:text-professor-gold transition-colors">ORCID</a></li>
              <li><a href="https://www.scopus.com/authid/detail.uri?authorId=7401481014" target="_blank" rel="noopener noreferrer" className="hover:text-professor-gold transition-colors">Scopus ID</a></li>
              <li><a href="https://iitj.irins.org/profile/214545" target="_blank" rel="noopener noreferrer" className="hover:text-professor-gold transition-colors">Vidwan-ID</a></li>
              <li><a href="https://iitj.ac.in/department/index.php?dept=ee&id=faculty_members" target="_blank" rel="noopener noreferrer" className="hover:text-professor-gold transition-colors">IIT Jodhpur</a></li>
              <li><a href="https://www.linkedin.com/in/ajay-agarwal-72883431/" target="_blank" rel="noopener noreferrer" className="hover:text-professor-gold transition-colors flex items-center"><Linkedin className="h-4 w-4 mr-1" /> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-professor-gold/50 text-center">
          <p>&copy; {currentYear} Prof. Ajay Agarwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
