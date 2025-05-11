
import React from 'react';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact" 
        subtitle="Get in Touch with Prof. Ajay Agarwal" 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-professor-navy">Contact Information</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-professor-navy/10 rounded-full flex items-center justify-center">
                      <Mail className="text-professor-navy" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="mb-1">
                      <a 
                        href="mailto:ajayagarwal@iitj.ac.in" 
                        className="text-professor-navy hover:underline"
                      >
                        ajayagarwal@iitj.ac.in
                      </a>
                    </p>
                    <p>
                      <a 
                        href="mailto:dr.ajay123@gmail.com" 
                        className="text-professor-navy hover:underline"
                      >
                        dr.ajay123@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-professor-navy/10 rounded-full flex items-center justify-center">
                      <Phone className="text-professor-navy" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="mb-1">Mobile: +91 8058598903</p>
                    <p>Office: +91 291 2801378</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-professor-navy/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-professor-navy" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p>
                      5123 Type-B, IIT Jodhpur Campus, <br />
                      NH 62, Nagaur Road, Karwar-342030 <br />
                      Jodhpur (INDIA)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-professor-navy/10 rounded-full flex items-center justify-center">
                      <FileText className="text-professor-navy" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Professional Profiles</h3>
                    <div className="space-y-2">
                      <p>
                        <a 
                          href="https://scholar.google.com/citations?user=XUwFhB8AAAAJ&hl=en" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-professor-navy hover:underline flex items-center"
                        >
                          <span className="mr-1">Google Scholar</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </p>
                      <p>
                        <a 
                          href="https://orcid.org/0000-0003-2204-9553" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-professor-navy hover:underline flex items-center"
                        >
                          <span className="mr-1">ORCiD</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </p>
                      <p>
                        <a 
                          href="https://www.scopus.com/authid/detail.uri?authorId=7401481014" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-professor-navy hover:underline flex items-center"
                        >
                          <span className="mr-1">Scopus ID</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </p>
                      <p>
                        <a 
                          href="https://iitj.irins.org/profile/214545" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-professor-navy hover:underline flex items-center"
                        >
                          <span className="mr-1">Vidwan-ID</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
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
          
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-professor-navy">Visit Me</h2>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Department of Electrical Engineering</h3>
              <p className="mb-4">
                Indian Institute of Technology Jodhpur<br />
                NH 62, Nagaur Road, Karwar<br />
                Jodhpur 342030, Rajasthan, India
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden h-80">
              {/* Replace with an actual iframe for Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5900481044244!2d73.1095465!3d26.2772336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea652af7d%3A0x98182dbd1d4637!2sIndian%20Institute%20of%20Technology%20Jodhpur!5e0!3m2!1sen!2sin!4v1620569864124!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="IIT Jodhpur Location"
              ></iframe>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-professor-navy">Office Hours</h2>
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="mb-4">
                  If you'd like to meet in person, please email first to schedule an appointment.
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday - Sunday:</span>
                    <span>By appointment only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
