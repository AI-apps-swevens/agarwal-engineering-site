
import React from 'react';
import { Mail, MapPin, Phone, Globe, Linkedin } from 'lucide-react';
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
                  <h3 className="font-medium text-lg">Office Address</h3>
                  <p className="text-gray-600">
                    313, Department of Electrical Engineering,<br />
                    Indian Institute of Technology Jodhpur,<br />
                    NH 62 Nagaur Road, Karwar Jodhpur,<br />
                    Rajasthan, India 342030
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
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-professor-navy">Location</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6539186973453!2d72.98785997638363!3d26.270883577108552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c3710877771%3A0x79da5416d8e6d986!2sIndian%20Institute%20of%20Technology%20Jodhpur!5e0!3m2!1sen!2sin!4v1715676450558!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="IIT Jodhpur Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
