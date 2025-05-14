
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, GraduationCap } from 'lucide-react';

const Awards = () => {
  const awardsData = [
    {
      year: "2024",
      title: "Research Excellence-2024, Senior Researcher Award (Engineering)",
      organization: "IIT Jodhpur",
      image: "/lovable-uploads/154a1db9-14ab-46c6-a28d-06be83c3d617.png"
    },
    {
      year: "2021",
      title: "IETE-Bapuseetharam Award 2021",
      organization: "The Institution of Electronics and Telecommunication Engineers (IETE) India",
      image: "/lovable-uploads/ea137260-1400-48b3-8aff-277da1e0bfb0.png"
    },
    {
      year: "2021",
      title: "Outstanding Engineering Services to Society Award 2021",
      organization: "The Institute of Engineers (India) Rajasthan State Centre",
      image: "/lovable-uploads/d7e5b80c-9179-4b15-b140-8a73b814c5c8.png"
    },
    {
      year: "2020",
      title: "CSIR Technology Award (Innovation)",
      organization: "Council of Scientific and Industrial Research",
      description: "For 'Developing a low-cost multipurpose handheld Raman spectrometer for automated analytical and diagnostic application, particularly for testing of food and pharmaceutical adulteration'.",
      image: "/lovable-uploads/c4c1e07a-da97-4cc4-9130-fffd690b3f7d.png"
    },
    {
      year: "2013",
      title: "DST-UKIERI Thematic Partnerships Award",
      organization: "India",
      image: "/lovable-uploads/91f246ed-c667-46da-bfe2-7a19526464da.png"
    },
    {
      year: "2009",
      title: "IME Excellence Award 2009 – Industry Project Category",
      organization: "Institute of Microelectronics (IME), Singapore",
      description: "For the project 'Development of the Surrounding Gate Transistor Structure and Process Technologies'.",
      image: "/award-ime.jpg"
    },
    {
      year: "2008",
      title: "National Technology Award",
      organization: "Singapore",
      description: "Singapore's highest honour presented to recognise outstanding research scientists and engineers for their invaluable contributions to the development of Science & Technology in Singapore. Award conferred for 'pioneering the novel transistor architectures and a new class of electronic bio-sensors based on Silicon-nanowires'.",
      image: "/lovable-uploads/2e0076ca-ce6a-4590-b427-670761f973d3.png"
    },
    {
      year: "2006",
      title: "Collaboration Development Award",
      organization: "British High Commission, Singapore",
      image: "/lovable-uploads/93b6c656-020b-430d-8d91-51327fde7c1f.png"
    },
    {
      year: "2005",
      title: "Collaboration Development Award",
      organization: "British High Commission, Singapore",
      image: "/lovable-uploads/93b6c656-020b-430d-8d91-51327fde7c1f.png"
    }
  ];

  const recognitionsData = [
    {
      title: "Biography included in the Who's Who in the World",
      description: "Which profiles the most accomplished men & women in the world since 2010"
    },
    {
      title: "Biography included in Who's Who in Asia since 2012",
      description: ""
    },
    {
      title: "Vice-Chairperson, IEEE Rajasthan Subsection",
      years: "2021, 2023 & 2024"
    },
    {
      title: "Honorary Member",
      organization: "IIT Bombay Industry Consortium on Strategic Electronics"
    },
    {
      title: "Life Fellow and Chairman",
      organization: "IETE, Pilani"
    },
    {
      title: "Life Fellow and Chairman",
      organization: "Semiconductor Society of India, Pilani"
    },
    {
      title: "Life Fellow",
      organization: "MSI, India"
    },
    {
      title: "Life Fellow",
      organization: "The Institution of Engineers (India)"
    },
    {
      title: "Senior Member",
      organization: "IEEE United States (SM-06, M-03)"
    },
    {
      title: "Member",
      organization: "IEEE Electron Devices Society"
    }
  ];

  const completedPhDScholars = [
    {
      name: "Dr. Tang Min",
      university: "Nanyang Technological University, Singapore",
      year: 2007
    },
    {
      name: "Dr. Bi Xinyan",
      university: "National University of Singapore, Singapore",
      year: 2009
    },
    {
      name: "Dr. Tze Sian Pui",
      university: "Nanyang Technological University, Singapore",
      year: 2010
    },
    {
      name: "Dr. Venkateswaran PS",
      university: "University of Petroleum and Energy Studies, Dehradun India",
      year: 2016
    },
    {
      name: "Dr. Rahul Prajesh",
      university: "AcSIR, CSIR-CEERI, Pilani",
      year: 2018
    },
    {
      name: "Dr. Rohit Singh",
      university: "IIT Indore",
      year: 2018
    },
    {
      name: "Dr. Smiti Sachdeva",
      university: "Thapar University",
      year: 2019
    },
    {
      name: "Dr. Pankaj Bhooshan Agarwal",
      university: "AcSIR, CSIR-CEERI, Pilani",
      year: 2019
    },
    {
      name: "Dr. Tamalika Bhakat",
      university: "BITS, Pilani",
      year: 2019
    },
    {
      name: "Dr. Md Arif Khan",
      university: "IIT Indore",
      year: 2020
    },
    {
      name: "Dr. Prerna Balyan",
      university: "AcSIR, CSIR-CEERI, Pilani",
      year: 2021
    },
    {
      name: "Dr. Anju Yadav",
      university: "AcSIR, CSIR-CEERI, Pilani",
      year: 2021
    },
    {
      name: "Dr. Arun Johar",
      university: "MNIT, Jaipur",
      year: 2021
    },
    {
      name: "Dr. Sumita Choudhary",
      university: "BITS, Pilani",
      year: 2021
    },
    {
      name: "Dr. Satya Dev",
      university: "GJU, Hissar",
      year: 2022
    },
    {
      name: "Dr. Pawan Kumar",
      university: "IIT Indore",
      year: 2023
    },
    {
      name: "Dr. Sanjay Kumar",
      university: "IIT Indore",
      year: 2023
    },
    {
      name: "Dr. Vikram Maharshi",
      university: "IIT Delhi",
      year: 2023
    },
    {
      name: "Dr. Rakesh Kumar Saini",
      university: "AcSIR, CSIR-CEERI, Pilani",
      year: 2024
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Awards & Recognition" 
        subtitle="Honoring Excellence in Research and Innovation"
        showIcon={true}
      />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="text-professor-navy mr-2" size={24} />
            <h2 className="text-2xl font-bold text-professor-navy">Awards & Honors</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-professor-navy/20"></div>
            
            <div className="space-y-12">
              {awardsData.map((award, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-8 h-8 bg-professor-navy rounded-full absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-professor-gold rounded-full"></div>
                  </div>
                  
                  <div className={`md:w-1/2 bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="flex flex-col md:flex-row gap-4">
                      {award.image && (
                        <div className="md:w-1/3">
                          <div className="rounded-lg overflow-hidden shadow-sm bg-gray-100 aspect-video flex items-center justify-center">
                            <img 
                              src={award.image}
                              alt={`${award.title} award`}
                              className="object-cover w-full h-full"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=Award+Image';
                              }}
                            />
                          </div>
                        </div>
                      )}
                      <div className={award.image ? "md:w-2/3" : "w-full"}>
                        <div className="inline-block px-3 py-1 bg-professor-gold/20 text-professor-navy text-sm font-medium rounded mb-3">
                          {award.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-professor-navy">{award.title}</h3>
                        <p className="text-gray-600 mb-2">{award.organization}</p>
                        {award.description && (
                          <p className="text-gray-700 mt-2 italic">{award.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="text-professor-navy mr-2" size={24} />
            <h2 className="text-2xl font-bold text-professor-navy">PhD Supervision</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">Completed</h4>
                <div className="flex items-center">
                  <div className="text-5xl font-bold text-professor-navy">{completedPhDScholars.length}</div>
                  <div className="ml-4 text-gray-700">PhD students supervised to successful completion</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ongoing</h4>
                <div className="flex items-center">
                  <div className="text-5xl font-bold text-professor-navy">15</div>
                  <div className="ml-4 text-gray-700">PhD supervisions currently in progress</div>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold mb-4 text-professor-navy border-b pb-2">Graduated PhD Scholars</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedPhDScholars.map((scholar, index) => (
                <div key={index} className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  <div className="font-medium">{scholar.name}</div>
                  <div className="text-sm text-gray-600">{scholar.university}</div>
                  <div className="text-sm text-gray-500">Year of Completion: {scholar.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-professor-navy">Professional Recognition & Memberships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitionsData.map((recognition, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-professor-gold">
                <h3 className="text-lg font-bold mb-2 text-professor-navy">{recognition.title}</h3>
                {recognition.organization && (
                  <p className="text-gray-700">{recognition.organization}</p>
                )}
                {recognition.years && (
                  <p className="text-gray-600">{recognition.years}</p>
                )}
                {recognition.description && (
                  <p className="text-gray-600 mt-2 italic">{recognition.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;
