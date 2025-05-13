import React from 'react';
import { Mail, MapPin, Phone, Globe, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact" 
        subtitle="Get in touch to discuss research collaborations and academic opportunities" 
        showIcon={true}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-professor-navy mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-professor-navy/10 p-2 rounded-full mr-4 mt-1">
                  <Mail className="h-5 w-5 text-professor-navy" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-600 mb-1">
                    <a href="mailto:ajayagarwal@iitj.ac.in" className="hover:text-professor-navy hover:underline">
                      ajayagarwal@iitj.ac.in
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:dr.ajay123@gmail.com" className="hover:text-professor-navy hover:underline">
                      dr.ajay123@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-professor-navy/10 p-2 rounded-full mr-4 mt-1">
                  <Phone className="h-5 w-5 text-professor-navy" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-gray-600 mb-1">+91 8058598903 (M)</p>
                  <p className="text-gray-600">+91 291 2801378 (O)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-professor-navy/10 p-2 rounded-full mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-professor-navy" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Address</h3>
                  <p className="text-gray-600">
                    5123 Type-B, IIT Jodhpur Campus,<br />
                    NH 62, Nagaur Road, Karwar-342030<br />
                    Jodhpur (INDIA)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-professor-navy/10 p-2 rounded-full mr-4 mt-1">
                  <Globe className="h-5 w-5 text-professor-navy" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Online Profiles</h3>
                  <p className="text-gray-600 mb-2">
                    <a 
                      href="https://scholar.google.com/citations?user=XUwFhB8AAAAJ&hl=en"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-professor-navy hover:underline"
                    >
                      Google Scholar
                    </a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a 
                      href="https://orcid.org/0000-0003-2204-9553"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-professor-navy hover:underline"
                    >
                      ORCiD
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a 
                      href="https://www.scopus.com/authid/detail.uri?authorId=7401481014"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-professor-navy hover:underline"
                    >
                      Scopus ID
                    </a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a 
                      href="https://iitj.irins.org/profile/214545"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-professor-navy hover:underline"
                    >
                      Vidwan-ID
                    </a>
                  </p>
                  <div className="mt-3">
                    <SocialLinks linkedinUrl="https://www.linkedin.com/in/ajay-agarwal-72883431/" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="/path-to-cv.pdf" 
                className="flex items-center bg-professor-navy text-white px-5 py-2.5 rounded-md hover:bg-professor-navy/90 transition-colors w-max"
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-professor-navy">Send Me an Email</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="mb-4">
                If you would like to get in touch with me, please click the button below to send me an email:
              </p>
              <a 
                href="mailto:ajayagarwal@iitj.ac.in?subject=Research%20Inquiry" 
                className="inline-flex items-center bg-professor-navy text-white font-medium py-3 px-6 rounded-lg hover:bg-professor-navy/90 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Email Professor Agarwal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
