import React from 'react';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About Me" 
        subtitle="My Academic and Professional Journey" 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/34e9b96e-03b5-4a9f-8a27-4d0c725bbc51.png" 
                  alt="Professor Ajay Agarwal" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="bg-professor-navy/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-professor-navy">Contact Information</h3>
                <div className="space-y-3">
                  <p><span className="font-semibold">Email:</span> ajayagarwal@iitj.ac.in</p>
                  <p><span className="font-semibold">Alternative Email:</span> dr.ajay123@gmail.com</p>
                  <p><span className="font-semibold">Phone:</span> +91 8058598903 (M)</p>
                  <p><span className="font-semibold">Office:</span> +91 291 2801378</p>
                  <p><span className="font-semibold">Office Address:</span> 313, Department of Electrical Engineering, Indian Institute of Technology Jodhpur, NH 62 Nagaur Road, Karwar Jodhpur, Rajasthan, India 342030</p>
                </div>

                <h3 className="text-xl font-bold mb-4 mt-8 text-professor-navy">Professional Links</h3>
                <div className="space-y-2">
                  <p><a href="https://scholar.google.com/citations?user=XUwFhB8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-professor-navy hover:text-professor-maroon underline">Google Scholar</a></p>
                  <p><a href="https://orcid.org/0000-0003-2204-9553" target="_blank" rel="noopener noreferrer" className="text-professor-navy hover:text-professor-maroon underline">ORCiD</a></p>
                  <p><a href="https://www.scopus.com/authid/detail.uri?authorId=7401481014" target="_blank" rel="noopener noreferrer" className="text-professor-navy hover:text-professor-maroon underline">Scopus ID</a></p>
                  <p><a href="https://iitj.irins.org/profile/214545" target="_blank" rel="noopener noreferrer" className="text-professor-navy hover:text-professor-maroon underline">Vidwan-ID</a></p>
                  <p><a href="https://www.linkedin.com/in/ajay-agarwal-72883431/" target="_blank" rel="noopener noreferrer" className="text-professor-navy hover:text-professor-maroon underline">LinkedIn</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-professor-navy">Biography</h2>
                <div className="prose max-w-none">
                  <p className="text-lg font-semibold mb-4">
                    "Prof. Ajay Agarwal: An intellectual harmonizing Policy, Industry, Research & Innovation to empower India's Semiconductor Ecosystem"
                  </p>
                  <p className="mb-4">
                    An international thought leader operating at the intersection of government, corporate innovation, academic excellence, and research — enabling India's strategic capabilities in semiconductors and ESDM (Electronics System Design & Manufacturing). Professor Agarwal carries a unique blend of professional experience in Industry (6+ years, Academia & Research (24+ years) which makes him an important asset for organizations he is associated with.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-professor-navy">Current Positions</h2>
                <div className="space-y-3">
                  <p>• Professor, Ex-Head, Department of Electrical Engineering, Indian Institute of Technology Jodhpur, Jodhpur</p>
                  <p>• CEO, AIOT Innovation Hub Foundation, IIT Jodhpur</p>
                  <p>• Chairman, EUGC, Engineering Sciences, IIT Jodhpur</p>
                  <p>• Adjunct faculty, Center for Smart Healthcare, IIT Jodhpur</p>
                  <p>• Director, Electronics Sector Skills Council of India (ESSCI), New Delhi</p>
                  <p>• Independent Director, Sahasra Semiconductors Pvt Ltd., New Delhi</p>
                  <p>• Director & Chairman BoD, Sarbit Innovations private limited Jodhpur</p>
                  <p>• Mentor, Caldor Health Technologies</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-professor-navy">Educational Background</h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold">Ph.D.</h3>
                    <p>Birla Institute of Technology and Science, Pilani, India, 1998</p>
                    <p><em>Research work done at CEERI, Pilani</em></p>
                    <p><strong>Thesis title:</strong> Fabrication and Characterization of High Tc Bulk Materials and Films for Superconducting Devices</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">M.S.</h3>
                    <p>Birla Institute of Technology & Science, Pilani, India, 1991</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">B.Sc. Engineering</h3>
                    <p>Regional Engineering College (now NIT), Rourkela, India, 1989</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-professor-navy">Professional Experience</h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-professor-gold pl-4">
                    <h3 className="text-xl font-bold mb-1">Professor, Indian Institute of Technology Jodhpur</h3>
                    <p className="text-gray-600 mb-3">May 2021 - Present</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Head, Department of Electrical Engineering (September 2022 – August 2024)</li>
                      <li>Senator, IIT Jodhpur</li>
                      <li>Chairman, Engineering Science Undergraduate Committee IITJ</li>
                      <li>Coordinator, AIOT Fab including clean rooms facilities, IIT Jodhpur (April 2022 – March 2025)</li>
                      <li>Member, School Research Committee, School of AI and Data Science, IIT Jodhpur</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-professor-gold pl-4">
                    <h3 className="text-xl font-bold mb-1">Senior Principal Scientist & Head-Technology Business Development Unit, CSIR-CEERI</h3>
                    <p className="text-gray-600 mb-3">July 2010 - May 2021</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Led multiple high-value projects including Nano-Biosensors and Microfluidics for Health Care (CSIR, ₹29.19 Crores)</li>
                      <li>Coordinated development of MEMS Technology based Pressure and Temperature Sensors for Indian Navy</li>
                      <li>Served as nodal officer for Research Initiative on Nano-devices and Nano-Sensors (R-Nano)</li>
                      <li>Developed microfluidic lab-on-a-chip sensors under DST-UKIERI program</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-professor-gold pl-4">
                    <h3 className="text-xl font-bold mb-1">Member of Technical Staff, Institute of Microelectronics (IME), Singapore</h3>
                    <p className="text-gray-600 mb-3">March 2001 - June 2010</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Led development of Silicon Nanowire based sensors platform using CMOS technology</li>
                      <li>Developed micron/sub-micron diameter circular buried channels for fluidic devices</li>
                      <li>Created microfluidic devices on transparent substrates</li>
                      <li>Developed 3-D nanostructures for SERS-based bio-chemical sensors</li>
                      <li>Engineered SCS micro-mirrors array for OXC using various actuation mechanisms</li>
                      <li>Managed multiple semiconductor process modules including diffusion, ion implantation, and CMP</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-professor-gold pl-4">
                    <h3 className="text-xl font-bold mb-1">Deputy Manager, Semiconductor Complex Ltd., SAS Nagar, India</h3>
                    <p className="text-gray-600 mb-3">April 2000 - February 2001</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Managed LPCVD and atmospheric pressure furnaces, PECVD reactor and RTP systems</li>
                      <li>Solved technical process problems including process variation and particle issues</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-professor-gold pl-4">
                    <h3 className="text-xl font-bold mb-1">Deputy Manager, USHA (INDIA) LTD</h3>
                    <p className="text-gray-600 mb-3">December 1994 - March 2000</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Served as production-in-charge for Power and Small signal Transistors</li>
                      <li>Developed processes for fabrication of bipolar power transistors and Schottky Diodes</li>
                      <li>Contributed to commissioning of metallization systems and diffusion furnaces</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-professor-gold pl-4">
                    <h3 className="text-xl font-bold mb-1">National Superconductivity Fellow, CEERI, Pilani</h3>
                    <p className="text-gray-600 mb-3">January 1990 - December 1994</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Established laboratory facilities including sputtering unit, evaporation coating unit, and more</li>
                      <li>Developed processes for fabrication of High Tc Superconductors and device quality thin films</li>
                      <li>Completed experimental work for Ph.D.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-professor-navy">Memberships</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Vice-Chairperson, IEEE Rajasthan Subsection, 2021, 2023 & 2024</li>
                  <li>Honorary Member, IIT Bombay Industry Consortium on Strategic Electronics</li>
                  <li>IEEE United States - Senior Member (SM-06, M-03)</li>
                  <li>IETE India, Life Fellow: Secretary (2016-20) & Chairman (2020-2022) for IETE, Pilani</li>
                  <li>Semiconductor Society of India – Life Fellow and Chairman, Pilani</li>
                  <li>MSI, India – Life Fellow</li>
                  <li>The Institution of Engineers (India) - Life Fellow</li>
                  <li>IEEE Electron Devices Society - Member</li>
                  <li>IEEE Communication Society, United States - Member (2003, 2008, 2011)</li>
                  <li>The Electrochemical Society, United States - Member (2004)</li>
                  <li>Materials Research Society, United States - Member (2004)</li>
                  <li>Materials Research Society, Singapore - Member</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
