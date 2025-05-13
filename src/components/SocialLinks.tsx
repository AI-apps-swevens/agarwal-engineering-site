
import React from 'react';
import { Linkedin } from 'lucide-react';

interface SocialLinksProps {
  linkedinUrl?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ linkedinUrl }) => {
  return (
    <div className="flex space-x-3">
      {linkedinUrl && (
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-professor-navy/10 hover:bg-professor-navy/20 rounded-full p-2 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-5 w-5 text-professor-navy" />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
