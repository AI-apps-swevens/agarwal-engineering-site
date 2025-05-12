
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('journals');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const journalPublications = [
    {
      id: 1,
      title: "High-performance fully depleted silicon nanowire (diameter/spl les/5 nm) gate-all-around CMOS devices",
      authors: "N Singh, A Agarwal, LK Bera, TY Liow, R Yang, SC Rustagi, CH Tung, ...",
      journal: "IEEE Electron Device Letters",
      volume: "27",
      issue: "5",
      year: 2006,
      page: "383-386",
      citations: 831
    },
    {
      id: 2,
      title: "Silicon nanowire arrays for label-free detection of DNA",
      authors: "Z Gao, A Agarwal, AD Trigg, N Singh, C Fang, CH Tung, Y Fan, ...",
      journal: "Analytical Chemistry",
      volume: "79",
      issue: "9",
      year: 2007,
      page: "3291-3297",
      citations: 590
    },
    {
      id: 3,
      title: "DNA sensing by silicon nanowire: charge layer distance dependence",
      authors: "GJ Zhang, G Zhang, JH Chua, RE Chee, EH Wong, A Agarwal, ...",
      journal: "Nano Letters",
      volume: "8",
      issue: "4",
      year: 2008,
      page: "1066-1070",
      citations: 362
    },
    {
      id: 4,
      title: "Label-free direct detection of MiRNAs with silicon nanowire biosensors",
      authors: "GJ Zhang, JH Chua, RE Chee, A Agarwal, SM Wong",
      journal: "Biosensors and Bioelectronics",
      volume: "24",
      issue: "8",
      year: 2009,
      page: "2504-2508",
      citations: 339
    },
    {
      id: 5,
      title: "Label-free electrical detection of cardiac biomarker with complementary metal-oxide semiconductor-compatible silicon nanowire sensor arrays",
      authors: "JH Chua, RE Chee, A Agarwal, SM Wong, GJ Zhang",
      journal: "Analytical Chemistry",
      volume: "81",
      issue: "15",
      year: 2009,
      page: "6266-6271",
      citations: 328
    },
    {
      id: 6,
      title: "Si, SiGe nanowire devices by top–down technology and their applications",
      authors: "N Singh, KD Buddharaju, SK Manhas, A Agarwal, SC Rustagi, GQ Lo, ...",
      journal: "IEEE Transactions on Electron Devices",
      volume: "55",
      issue: "11",
      year: 2008,
      page: "3107-3118",
      citations: 222
    },
    {
      id: 7,
      title: "Ultra-narrow silicon nanowire gate-all-around CMOS devices: Impact of diameter, channel-orientation and low temperature on device performance",
      authors: "N Singh, FY Lim, WW Fang, SC Rustagi, LK Bera, A Agarwal, CH Tung, ...",
      journal: "International Electron Devices Meeting",
      year: 2006,
      page: "1-4",
      citations: 214
    },
    {
      id: 8,
      title: "Highly sensitive measurements of PNA-DNA hybridization using oxide-etched silicon nanowire biosensors",
      authors: "GJ Zhang, JH Chua, RE Chee, A Agarwal, SM Wong, KD Buddharaju, ...",
      journal: "Biosensors and Bioelectronics",
      volume: "23",
      issue: "11",
      year: 2008,
      page: "1701-1707",
      citations: 199
    },
    {
      id: 9,
      title: "Electrochemical sensing and remediation of 4-nitrophenol using bio-synthesized copper oxide nanoparticles",
      authors: "S Singh, N Kumar, M Kumar, A Agarwal, B Mizaikoff",
      journal: "Chemical Engineering Journal",
      volume: "313",
      year: 2017,
      page: "283-292",
      citations: 183
    },
    {
      id: 10,
      title: "Development of highly reproducible nanogap SERS substrates: Comparative performance analysis and its application for glucose sensing",
      authors: "US Dinish, FC Yaw, A Agarwal, M Olivo",
      journal: "Biosensors and Bioelectronics",
      volume: "26",
      issue: "5",
      year: 2011,
      page: "1987-1992",
      citations: 175
    },
    {
      id: 11,
      title: "DNA detection using nanostructured SERS substrates with Rhodamine B as Raman label",
      authors: "C Fang, A Agarwal, KD Buddharaju, NM Khalid, SM Salim, E Widjaja, ...",
      journal: "Biosensors and Bioelectronics",
      volume: "24",
      issue: "2",
      year: 2008,
      page: "216-221",
      citations: 167
    },
    {
      id: 12,
      title: "Label-free and highly sensitive biomolecular detection using SERS and electrokinetic preconcentration",
      authors: "H Cho, B Lee, GL Liu, A Agarwal, LP Lee",
      journal: "Lab on a Chip",
      volume: "9",
      issue: "23",
      year: 2009,
      page: "3360-3363",
      citations: 154
    },
    {
      id: 13,
      title: "Evaluation of bonding between oxygen plasma treated polydimethyl siloxane and passivated silicon",
      authors: "KC Tang, E Liao, WL Ong, JDS Wong, A Agarwal, R Nagarajan, L Yobas",
      journal: "Journal of Physics: Conference Series",
      volume: "34",
      issue: "1",
      year: 2006,
      page: "155",
      citations: 128
    },
    {
      id: 14,
      title: "CMOS‐compatible nanowire sensor arrays for detection of cellular bioelectricity",
      authors: "TS Pui, A Agarwal, F Ye, N Balasubramanian, P Chen",
      journal: "Small",
      volume: "5",
      issue: "2",
      year: 2009,
      page: "208-212",
      citations: 117
    },
    {
      id: 15,
      title: "Silicon nanowire sensor array using top–down CMOS technology",
      authors: "A Agarwal, K Buddharaju, IK Lao, N Singh, N Balasubramanian, ...",
      journal: "Sensors and Actuators A: Physical",
      volume: "145",
      year: 2008,
      page: "207-213",
      citations: 108
    },
    // Original papers below
    {
      id: 16,
      title: "Ajay Agarwal, Ram P Gupta, W.S Khokle, K.D Kundra, P.R Deshmukh, M Singh and P.D Vyas, A new approach for the preparation of insitu superconducting BSCCO films",
      journal: "Supercond. Sci. Technol.",
      volume: "6",
      year: 1993,
      page: "670",
      citations: 24
    },
    {
      id: 17,
      title: "Ajay Agarwal, Ram P Gupta and W.S Khokle, Reliability of High temperature superconductor metal contact",
      journal: "Microelectron. Reliab.",
      volume: "34",
      year: 1994,
      page: "1273",
      citations: 18
    },
    {
      id: 18,
      title: "P Srivastava, N.L Saini, B.R Sekhar, S Venkatesh, M Khaled, S.K Sharma, K.B Garg, Ajay Agarwal, Ram P Gupta, W.S Khokle, H Ohkubo and M Akinaga, Photo-emission study of influence of sputtering on Au-Bi (2212) interface",
      journal: "Supercond. Sci. Technol.",
      volume: "7",
      year: 1994,
      page: "940",
      citations: 15
    },
    {
      id: 19,
      title: "GS Shekhawat, Ram P Gupta, A Agarwal, KB Garg & PD Vyas, The effect of sputter deposition on the growth mechanism of YBa2Cu3O7- thin films studied by scanning tunnelling microscopy",
      journal: "Supercond. Sci. Technol.",
      volume: "8",
      year: 1995,
      page: "291",
      citations: 14
    },
    {
      id: 20,
      title: "GS Shekhawat, RP Gupta, A Agarwal, KB Garg and PD Vyas, Pattern generation on silicon surfaces and YBa2Cu3O7- thin films by a scanning tunnelling microscope",
      journal: "J. Appl. Phys.",
      volume: "78",
      year: 1995,
      page: "127",
      citations: 11
    },
  ];

  const patents = [
    {
      id: 1,
      title: "Terence Gan, Ajay Agarwal, Janak Singh and Zhang Xiaolin; Method of Making Single-Crystal-Silicon 3D Micromirror",
      patentNumber: "US 7,091,057 B2",
      date: "Aug 15, 2006",
      status: "Granted"
    },
    {
      id: 2,
      title: "Terence Gan, Ajay Agarwal, Janak Singh and Zhang Xiaolin; Single-Crystal-Silicon 3D Micromirror",
      patentNumber: "US 7,486,430",
      date: "February 3, 2009",
      status: "Granted"
    },
    {
      id: 3,
      title: "Wee-Liat Ong, Levent Yobas, Tang Kum Cheong, Ajay Agarwal, and Ranganathan Nagarajan, Microfluidic Device for Analyzing the Status of a Particle",
      patentNumber: "SG 146186",
      date: "June 30, 2009",
      status: "Granted"
    },
    {
      id: 4,
      title: "Ajay Agarwal, Guo Li Hui, N. Balasubramanian, Wong Chee Chung, Transparent Microfluidic Device",
      patentNumber: "SG147910",
      date: "September 30, 2009",
      status: "Granted"
    },
    {
      id: 5,
      title: "Ajay Agarwal, Navab Singh, Ieng Kin Lao Alex, Balasubramanian Narayanan, Nanowire Sensor, Nanowire Sensor Array and Method of Fabricating the Same",
      patentNumber: "SG149383",
      date: "September 30, 2009",
      status: "Granted"
    },
    {
      id: 6,
      title: "Terence Gan, Ajay Agarwal, Janak Singh and Zhang Xiaolin; Single-Crystal-Silicon 3D Micromirror",
      patentNumber: "SG 112929",
      date: "30 Oct 2009",
      status: "Granted"
    },
    {
      id: 7,
      title: "Terence Gan, Ajay Agarwal, Janak Singh and Zhang Xiaolin; Single-Crystal-Silicon 3D Micromirror",
      patentNumber: "SG 151326",
      date: "30 Oct 2009",
      status: "Granted"
    },
    {
      id: 8,
      title: "Wee-Liat Ong, Levent Yobas, Tang Kum Cheong, Ajay Agarwal, and Ranganathan Nagarajan, Microfluidic Device for Analyzing the Status of a Particle",
      patentNumber: "WO 2007/108779 A1",
      date: "30 June, 2009",
      status: "Granted" 
    },
    {
      id: 9,
      title: "Wee Liat Ong, Levent Yobas, Kim Cheong Tang, Ajay Agarwal, Nagarajan Ranganathan, Microfluidic Device for Analyzing the Status of a Particle",
      patentNumber: "US 2010/0015008 A1",
      date: "Jan. 21, 2010",
      status: "Granted"
    },
    {
      id: 10,
      title: "Ajay Agarwal, Narayanan Balasubramanian, Lihui Guo and Chee Chung Wong, Transparent Microfluidic Device",
      patentNumber: "US 2010/0055673 A1",
      date: "Mar. 4, 2010",
      status: "Granted"
    },
  ];

  const books = [
    {
      id: 1,
      title: "George Kyriacou, Hong Chang, Joseph Gargiuli, Ajay Agarwal and Pankaj Vadgama, 2016. Microfluidics a Potent Route to Sample Delivery for Non-intrusive Sensors",
      publisher: "In: D.P. Nikolelis and G.-P. Nikoleli (eds.), Biosensors for Security and Bioterrorism Applications, Advanced Sciences and Technologies for Security Applications, Springer International Publishing Switzerland",
      pages: "15-34",
      doi: "10.1007/978-3-319-28926-7_2",
      year: 2016
    },
    {
      id: 2,
      title: "Sateesh J., Guha K., Dutta A., Sengupta P., Agarwal A., Srinivasa Rao K. (2021) Mimicking Human Kidney: Research Towards Better Solutions for Kidney Failure",
      publisher: "In: Dutta G., Biswas A., Chakrabarti A. (eds) Modern Techniques in Biosensors. Studies in Systems, Decision and Control, vol 327. Springer, Singapore",
      doi: "https://doi.org/10.1007/978-981-15-9612-4_14",
      year: 2021
    },
    {
      id: 3,
      title: "Yadav, A., Saini, P., Agarwal, A. (2022). Analyzing the Effect of Various Reducing Agents and Their Concentrations on Gas Sensing Performance of Graphene Aerogel-Based Ammonia Sensor",
      publisher: "In: Lenka, T.R., Misra, D., Biswas, A. (eds) Micro and Nanoelectronics Devices, Circuits and Systems. Lecture Notes in Electrical Engineering, vol 781. Springer, Singapore",
      doi: "https://doi.org/10.1007/978-981-16-3767-4_16",
      year: 2022
    },
    {
      id: 4,
      title: "Johar, A.K., Sharma, G.K., Periasamy, C., Guha, K., Agarwal, A., Boolchandani, D. (2022). Investigating the Effect of Various Bragg's Reflector Configurations on the Performance of Flexible FBAR Sensors",
      publisher: "In: Lenka, T.R., Misra, D., Biswas, A. (eds) Micro and Nanoelectronics Devices, Circuits and Systems. Lecture Notes in Electrical Engineering, vol 781. Springer, Singapore",
      doi: "https://doi.org/10.1007/978-981-16-3767-4_12",
      year: 2022
    },
    {
      id: 5,
      title: "Deepak Bansal, K. Rangra, and Ajay Agarwal, Progress in RF MEMS/NEMS switches",
      publisher: "in MEMS Applications in Electronics and Engineering, edited by A. K. Basu, A. Basu, S. Ghosh, and S. Bhattacharya (AIP Publishing, Melville, New York, 2023)",
      pages: "6-1 to 6-44",
      year: 2023
    },
    {
      id: 6,
      title: "Panda, D., Agarwal, M., Kumari, B., Hota, P., Agarwal, A. (2024). Biological Smart Materials: Materials for Cancer Treatment",
      publisher: "In: Kumar, A., Kumar, A., Kumar, A. (eds) Applications of Biotribology in Biomedical Systems. Springer, Cham",
      doi: "https://doi.org/10.1007/978-3-031-58327-8_4",
      year: 2024
    }
  ];

  // Logic to get current items based on active tab and pagination
  const getCurrentItems = () => {
    let currentItems;
    
    switch (activeTab) {
      case 'journals':
        // Sort by citations (highest first)
        currentItems = [...journalPublications].sort((a, b) => (b.citations || 0) - (a.citations || 0));
        break;
      case 'patents':
        currentItems = patents;
        break;
      case 'books':
        currentItems = books;
        break;
      default:
        currentItems = [...journalPublications].sort((a, b) => (b.citations || 0) - (a.citations || 0));
    }

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    return currentItems.slice(indexOfFirstItem, indexOfLastItem);
  };

  const totalPages = Math.ceil(
    (activeTab === 'journals' 
      ? journalPublications.length 
      : activeTab === 'patents' 
        ? patents.length 
        : books.length
    ) / itemsPerPage
  );

  // Change page handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <PageHeader 
        title="Publications" 
        subtitle="Research Papers, Patents, and Books" 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap -mb-px">
              <button
                onClick={() => { setActiveTab('journals'); setCurrentPage(1); }}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                  activeTab === 'journals'
                    ? 'border-professor-navy text-professor-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Journal Publications
              </button>
              <button
                onClick={() => { setActiveTab('patents'); setCurrentPage(1); }}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                  activeTab === 'patents'
                    ? 'border-professor-navy text-professor-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Patents
              </button>
              <button
                onClick={() => { setActiveTab('books'); setCurrentPage(1); }}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                  activeTab === 'books'
                    ? 'border-professor-navy text-professor-navy'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Books & Chapters
              </button>
            </nav>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          {activeTab === 'journals' && (
            <>
              <p className="mb-6 text-gray-600 italic">
                Professor Ajay Agarwal has published over 320 research papers in reputable journals and conferences. 
                Publications are sorted by citation count (highest first).
              </p>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="w-24 text-right">Citations</TableHead>
                    <TableHead className="w-24 text-right">Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getCurrentItems().map((publication) => (
                    <TableRow key={publication.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{publication.title}</div>
                          {publication.authors && (
                            <div className="text-sm text-gray-600">{publication.authors}</div>
                          )}
                          <div className="text-sm text-gray-600 mt-1">
                            {publication.journal}, {publication.volume && `${publication.volume}`} 
                            {publication.issue && `(${publication.issue})`} 
                            {publication.year && `(${publication.year})`}, 
                            p.{publication.page}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{publication.citations || "N/A"}</TableCell>
                      <TableCell className="text-right">{publication.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}

          {activeTab === 'patents' && (
            <>
              <p className="mb-6 text-gray-600 italic">
                Professor Ajay Agarwal has over 40 patents (granted or filed) in various technologies:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patent</TableHead>
                    <TableHead className="w-40">Patent Number</TableHead>
                    <TableHead className="w-32">Date</TableHead>
                    <TableHead className="w-24">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getCurrentItems().map((patent) => (
                    <TableRow key={patent.id}>
                      <TableCell>
                        <div className="font-medium">{patent.title}</div>
                      </TableCell>
                      <TableCell>{patent.patentNumber}</TableCell>
                      <TableCell>{patent.date}</TableCell>
                      <TableCell>
                        <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {patent.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}

          {activeTab === 'books' && (
            <>
              <p className="mb-6 text-gray-600 italic">
                Professor Ajay Agarwal has contributed to several books and book chapters in his areas of expertise:
              </p>
              <ol className="publication-list">
                {getCurrentItems().map((book) => (
                  <li key={book.id} className="mb-4 pb-4 border-b border-gray-100">
                    <span className="font-medium">{book.title}</span>
                    <div className="text-gray-600 mt-1">
                      {book.publisher}, {book.year}
                      {book.pages && <span>, pp. {book.pages}</span>}
                    </div>
                    {book.doi && (
                      <div className="text-professor-navy mt-1">
                        <a href={book.doi.startsWith('http') ? book.doi : `https://doi.org/${book.doi}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          DOI: {book.doi}
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav aria-label="Publications pagination">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <li key={number}>
                      <button
                        onClick={() => paginate(number)}
                        className={`px-3 py-2 leading-tight border border-gray-300 ${
                          currentPage === number
                            ? 'text-white bg-professor-navy'
                            : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                        }`}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              For a complete list of publications, please visit 
              <a 
                href="https://scholar.google.com/citations?user=XUwFhB8AAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-professor-navy ml-1 hover:underline"
              >
                Google Scholar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
