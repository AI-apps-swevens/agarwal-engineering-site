
import React from 'react';
import PageHeader from '../components/PageHeader';

const Awards = () => {
  const awardsData = [
    {
      year: "2024",
      title: "Research Excellence-2024, Senior Researcher Award (Engineering)",
      organization: "IIT Jodhpur"
    },
    {
      year: "2021",
      title: "IETE-Bapuseetharam Award 2021",
      organization: "The Institution of Electronics and Telecommunication Engineers (IETE) India"
    },
    {
      year: "2021",
      title: "Outstanding Engineering Services to Society Award 2021",
      organization: "The Institute of Engineers (India) Rajasthan State Centre"
    },
    {
      year: "2020",
      title: "CSIR Technology Award (Innovation)",
      organization: "Council of Scientific and Industrial Research",
      description: "For 'Developing a low-cost multipurpose handheld Raman spectrometer for automated analytical and diagnostic application, particularly for testing of food and pharmaceutical adulteration'."
    },
    {
      year: "2013",
      title: "DST-UKIERI Thematic Partnerships Award",
      organization: "India"
    },
    {
      year: "2009",
      title: "IME Excellence Award 2009 – Industry Project Category",
      organization: "Institute of Microelectronics (IME), Singapore",
      description: "For the project 'Development of the Surrounding Gate Transistor Structure and Process Technologies'."
    },
    {
      year: "2008",
      title: "National Technology Award",
      organization: "Singapore",
      description: "Singapore's highest honour presented to recognise outstanding research scientists and engineers for their invaluable contributions to the development of Science & Technology in Singapore. Award conferred for 'pioneering the novel transistor architectures and a new class of electronic bio-sensors based on Silicon-nanowires'."
    },
    {
      year: "2006",
      title: "Collaboration Development Award",
      organization: "British High Commission, Singapore"
    },
    {
      year: "2005",
      title: "Collaboration Development Award",
      organization: "British High Commission, Singapore"
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

  return (
    <div>
      <PageHeader 
        title="Awards & Recognition" 
        subtitle="Honoring Excellence in Research and Innovation" 
      />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-professor-navy">Awards & Honors</h2>
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

          <div className="mt-12 bg-professor-navy/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-professor-navy">PhD Supervision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Completed</h4>
                <div className="flex items-center justify-center">
                  <div className="text-5xl font-bold text-professor-navy">19</div>
                  <div className="ml-4 text-gray-700">PhD students supervised to successful completion</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ongoing</h4>
                <div className="flex items-center justify-center">
                  <div className="text-5xl font-bold text-professor-navy">15</div>
                  <div className="ml-4 text-gray-700">PhD supervisions currently in progress</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;
