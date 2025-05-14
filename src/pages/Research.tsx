
import React from 'react';
import PageHeader from '../components/PageHeader';

const Research = () => {
  const researchAreas = [
    {
      title: "MEMS & Microsensors",
      description: "Development of various MEMS-based sensors, micro-fluidic devices, and micro-fabrication techniques for sensing applications.",
      projects: [
        "Design, Development & Fabrication of MEMS Technology based Pressure and Temperature Sensors for Indian Navy",
        "Development of microfluidic lab-on-a-chip sensors for biomedical applications",
        "Research on MEMS-based RF switches and actuators"
      ]
    },
    {
      title: "Silicon Nanowire Sensors",
      description: "Integration of nanowire technology with conventional CMOS for highly sensitive bio-chemical detection systems.",
      projects: [
        "Development of Silicon Nanowire based sensors platform using CMOS technology for bio-chemical detections",
        "Nanowire Sensor Array Development using Top-Down CMOS Technology",
        "Label-Free Detection of Cardiac Biomarkers with CMOS-Compatible Silicon Nanowire Sensor Arrays"
      ]
    },
    {
      title: "Nano-Biosensors and Microfluidics for Healthcare",
      description: "Design and development of advanced microfluidic devices and biosensors for healthcare applications.",
      projects: [
        "Nano-Biosensors and Microfluidics for Health Care – Multidisciplinary, multi-institutional project",
        "Development of microfluidic chips for cell separation and analysis",
        "Integrated sample preparation and detection chip for Dengue and Cardiac diseases"
      ]
    },
    {
      title: "Gas Sensing and Environmental Monitoring",
      description: "Development of gas sensors and sensing platforms for environmental monitoring and industrial applications.",
      projects: [
        "High resolution air quality monitoring and air pollutant data analytics",
        "Development of gas sensors for volatile organic compounds detection",
        "Low power highly sensitive platforms for gas sensing applications"
      ]
    }
  ];

  const activeProjects = [
    {
      title: "Joint PI - Centre of Excellence (CoE) AyurTech",
      description: "Development of technologies for Ayurvedic research and applications.",
      funding: "Ministry of AYUSH, Govt of India"
    },
    {
      title: "Institute PI - Comprehensive Risk Assessment data for Heritage Sites and Development of Smart Heritage Management Systems",
      description: "Creating systems for monitoring and preserving heritage sites through smart technology.",
      funding: "Department of Science & Technology (DST), Govt of India"
    },
    {
      title: "PI - AIOT based Water Monitoring Technologies",
      description: "Developing Internet of Things solutions for water quality monitoring and management.",
      funding: "DIA-CoE, IIT Jodhpur"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Research" 
        subtitle="Exploring the Frontiers of Microelectronics, MEMS, and Nanotechnology" 
      />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-professor-navy">Research Overview</h2>
          <p className="text-gray-700 mb-6">
            My research focuses on the development of advanced microelectronic devices, MEMS-based sensors, and nanoscale systems with applications in healthcare, environmental monitoring, and strategic sectors. With over two decades of experience in both academic and industrial settings, my work spans from fundamental materials research to practical device implementation.
          </p>
          <p className="text-gray-700">
            I have led numerous projects involving multidisciplinary teams across institutions and have successfully translated research into practical applications, resulting in over 40 patents and 320+ publications. My research groups are consistently working at the cutting edge of micro and nanofabrication technologies to develop next-generation sensing platforms.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-professor-navy">Research Areas</h2>
          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-professor-navy">{area.title}</h3>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  <h4 className="font-semibold mb-2 text-professor-maroon">Key Projects:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {area.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-professor-navy">Active Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-professor-navy">
                <h3 className="text-xl font-bold mb-3 text-professor-navy">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="text-sm text-professor-navy bg-professor-navy/10 p-2 rounded">
                  <strong>Funding:</strong> {project.funding}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-professor-navy">Research Collaborations</h2>
          <p className="text-gray-700 mb-6">
            I actively collaborate with researchers and institutions around the world to advance the field of microelectronics and sensor technology. Notable collaborations include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>National University of Singapore (NUS) - Silicon nanowire sensor development</li>
            <li>Nanyang Technological University (NTU), Singapore - MEMS device research</li>
            <li>Queen Mary University of London - Microfluidics for health and diagnostics</li>
            <li>University of Petroleum & Energy Studies, Dehradun - Microfluidic sensors for fuel quality monitoring</li>
            <li>AIIMS Jodhpur - Medical technology development</li>
            <li>Multiple industry partners for technology transfer and commercialization</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Research;
