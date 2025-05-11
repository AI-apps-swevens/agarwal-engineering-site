
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('journals');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const journalPublications = [
    {
      id: 1,
      title: "Ajay Agarwal, Ram P Gupta, W.S Khokle, K.D Kundra, P.R Deshmukh, M Singh and P.D Vyas, A new approach for the preparation of insitu superconducting BSCCO films",
      journal: "Supercond. Sci. Technol.",
      volume: "6",
      year: 1993,
      page: "670"
    },
    {
      id: 2,
      title: "Ajay Agarwal, Ram P Gupta and W.S Khokle, Reliability of High temperature superconductor metal contact",
      journal: "Microelectron. Reliab.",
      volume: "34",
      year: 1994,
      page: "1273"
    },
    {
      id: 3,
      title: "P Srivastava, N.L Saini, B.R Sekhar, S Venkatesh, M Khaled, S.K Sharma, K.B Garg, Ajay Agarwal, Ram P Gupta, W.S Khokle, H Ohkubo and M Akinaga, Photo-emission study of influence of sputtering on Au-Bi (2212) interface",
      journal: "Supercond. Sci. Technol.",
      volume: "7",
      year: 1994,
      page: "940"
    },
    {
      id: 4,
      title: "GS Shekhawat, Ram P Gupta, A Agarwal, KB Garg & PD Vyas, The effect of sputter deposition on the growth mechanism of YBa2Cu3O7- thin films studied by scanning tunnelling microscopy",
      journal: "Supercond. Sci. Technol.",
      volume: "8",
      year: 1995,
      page: "291"
    },
    {
      id: 5,
      title: "GS Shekhawat, RP Gupta, A Agarwal, KB Garg and PD Vyas, Pattern generation on silicon surfaces and YBa2Cu3O7- thin films by a scanning tunnelling microscope",
      journal: "J. Appl. Phys.",
      volume: "78",
      year: 1995,
      page: "127"
    },
    // Add more journal publications as needed
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
    // Add more patents as needed
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
        currentItems = journalPublications;
        break;
      case 'patents':
        currentItems = patents;
        break;
      case 'books':
        currentItems = books;
        break;
      default:
        currentItems = journalPublications;
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
            <nav className="flex -mb-px">
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
                Below are some of his selected journal publications:
              </p>
              <ol className="publication-list">
                {getCurrentItems().map((publication) => (
                  <li key={publication.id} className="mb-4 pb-4 border-b border-gray-100">
                    <span className="font-medium">{publication.title}</span>
                    <div className="text-gray-600 mt-1">
                      {publication.journal}, {publication.volume} ({publication.year}), p.{publication.page}
                    </div>
                  </li>
                ))}
              </ol>
            </>
          )}

          {activeTab === 'patents' && (
            <>
              <p className="mb-6 text-gray-600 italic">
                Professor Ajay Agarwal has over 40 patents (granted or filed) in various technologies:
              </p>
              <ol className="publication-list">
                {getCurrentItems().map((patent) => (
                  <li key={patent.id} className="mb-4 pb-4 border-b border-gray-100">
                    <span className="font-medium">{patent.title}</span>
                    <div className="text-gray-600 mt-1">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                        {patent.status}
                      </span>
                      {patent.patentNumber}, {patent.date}
                    </div>
                  </li>
                ))}
              </ol>
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
