import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Book, Award, Mail, FileText, Image } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useCarousel } from "@/components/ui/carousel";

const Index = () => {
  // Gallery images array
  const galleryImages = [
    {
      src: "/lovable-uploads/154a1db9-14ab-46c6-a28d-06be83c3d617.png",
      alt: "Prof. Agarwal at IIT Jodhpur event with officials"
    },
    {
      src: "/lovable-uploads/8f133d4b-1592-459e-8761-1d710aa6f5b9.png",
      alt: "Prof. Agarwal receiving an award at IETE event"
    },
    {
      src: "/lovable-uploads/065a8844-d692-4c08-8359-e74e08f3ef78.png",
      alt: "Prof. Agarwal with Shri Alkesh Kumar Sharma"
    },
    {
      src: "/lovable-uploads/5b29cdd8-96a9-4546-948f-52c52dfebb1d.png",
      alt: "Laboratory image"
    },
    {
      src: "/lovable-uploads/5cb700cb-39c9-4f24-b8ca-93771ce6fe13.png",
      alt: "Research facility"
    },
    {
      src: "/lovable-uploads/88895526-10d6-4f24-b178-692ff8f54572.png",
      alt: "Academic event"
    },
    {
      src: "/lovable-uploads/abf7fda2-952a-422b-a2a5-36e2adc42a90.png",
      alt: "Research presentation"
    },
    {
      src: "/lovable-uploads/2e0076ca-ce6a-4590-b427-670761f973d3.png",
      alt: "National Technology Award ceremony"
    }
  ];

  // Create a reference to access the carousel API
  const apiRef = useRef(null);
  
  // Set up auto-scrolling for the carousel
  useEffect(() => {
    const api = apiRef.current;
    
    if (!api) return;
    
    // Auto-scroll every 3 seconds
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to the beginning
      }
    }, 3000);
    
    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [apiRef]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-professor-navy to-professor-navy/90 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Prof. Ajay Agarwal
            </h1>
            <h2 className="text-xl md:text-2xl text-professor-gold mb-6">
              Professor, Ex-Head, Department of Electrical Engineering
            </h2>
            <p className="text-lg mb-6">
              Indian Institute of Technology Jodhpur, Jodhpur
            </p>
            <div className="space-y-2 mb-8">
              <p className="flex items-center">
                <span className="font-medium mr-2">CEO:</span> AIOT Innovation Hub Foundation, IIT Jodhpur
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Adjunct Faculty:</span> Center for Smart Healthcare, IIT Jodhpur
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-block bg-professor-gold text-professor-navy font-medium py-2 px-5 rounded hover:bg-professor-gold/80 transition-colors">
                Contact Me
              </Link>
              <Link to="/research" className="inline-block bg-transparent border border-white text-white font-medium py-2 px-5 rounded hover:bg-white/10 transition-colors">
                Research Areas
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-professor-gold shadow-lg">
              <img
                src="/lovable-uploads/34e9b96e-03b5-4a9f-8a27-4d0c725bbc51.png"
                alt="Professor Ajay Agarwal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Stats */}
      <section className="py-12 bg-professor-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-professor-navy mb-2">320+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-professor-navy mb-2">110+</div>
              <div className="text-gray-600">Invited Talks</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-professor-navy mb-2">40+</div>
              <div className="text-gray-600">Patents</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl font-bold text-professor-navy mb-2">19</div>
              <div className="text-gray-600">PhD Students Supervised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a Microelectronics / Semiconductor professional with more than 06 years of industrial experience and over 23 years of research & development and academic experience including adjunct faculty at various national and international universities (NUS, NTU, A*Star academy Singapore); involved in the micro fabrication and related facilities, developing courses and training programs in SEMICON space.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As an expert, I am involved in the development of Nanotechnologies, MEMS, micro fluidics and Micro-sensors for industrial, MedTech and strategic needs.
            </p>
            <div className="flex justify-center mt-8">
              <Link to="/about" className="inline-block bg-professor-navy text-white font-medium py-2 px-5 rounded hover:bg-professor-navy/90 transition-colors">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-professor-navy/10 rounded-full flex items-center justify-center mb-4">
                <Book className="text-professor-navy" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">MEMS & Microsensors</h3>
              <p className="text-gray-600">
                Development of various MEMS-based sensors, micro-fluidic devices, and micro-fabrication techniques for sensing applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-professor-navy/10 rounded-full flex items-center justify-center mb-4">
                <Book className="text-professor-navy" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Silicon Nanowire Sensors</h3>
              <p className="text-gray-600">
                Integration of nanowire technology with conventional CMOS for highly sensitive bio-chemical detection systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-professor-navy/10 rounded-full flex items-center justify-center mb-4">
                <Book className="text-professor-navy" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Healthcare Applications</h3>
              <p className="text-gray-600">
                Developing nano-biosensors and microfluidic devices for healthcare applications and disease diagnostics.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/research" className="inline-block bg-professor-navy text-white font-medium py-2 px-5 rounded hover:bg-professor-navy/90 transition-colors">
              See All Research
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold font-serif">Recent Publications</h2>
            <Link to="/publications" className="text-professor-navy hover:text-professor-maroon flex items-center">
              <span className="mr-1">View All</span>
              <FileText size={16} />
            </Link>
          </div>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">Panda, D., Agarwal, M., Kumari, B., Hota, P., Agarwal, A. (2024)</h3>
              <p className="text-gray-700 mb-2">Biological Smart Materials: Materials for Cancer Treatment</p>
              <p className="text-gray-500 text-sm"><em>In: Kumar, A., Kumar, A., Kumar, A. (eds) Applications of Biotribology in Biomedical Systems. Springer, Cham.</em></p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">Deepak Bansal, K. Rangra, and Ajay Agarwal (2023)</h3>
              <p className="text-gray-700 mb-2">Progress in RF MEMS/NEMS switches, in MEMS Applications in Electronics and Engineering</p>
              <p className="text-gray-500 text-sm"><em>Edited by A. K. Basu, A. Basu, S. Ghosh, and S. Bhattacharya (AIP Publishing, Melville, New York), pp. 6-1 to 6-44.</em></p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">Yadav, A., Saini, P., Agarwal, A. (2022)</h3>
              <p className="text-gray-700 mb-2">Analyzing the Effect of Various Reducing Agents and Their Concentrations on Gas Sensing Performance of Graphene Aerogel-Based Ammonia Sensor</p>
              <p className="text-gray-500 text-sm"><em>In: Lenka, T.R., Misra, D., Biswas, A. (eds) Micro and Nanoelectronics Devices, Circuits and Systems. Lecture Notes in Electrical Engineering, vol 781. Springer, Singapore.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16 bg-professor-navy/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold font-serif">Awards & Recognition</h2>
            <Link to="/awards" className="text-professor-navy hover:text-professor-maroon flex items-center">
              <span className="mr-1">View All</span>
              <Award size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-professor-gold font-medium mb-1">2024</div>
              <h3 className="text-xl font-bold mb-2">Research Excellence-2024, Senior Researcher Award (Engineering)</h3>
              <p className="text-gray-600">IIT Jodhpur</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-professor-gold font-medium mb-1">2021</div>
              <h3 className="text-xl font-bold mb-2">IETE-Bapuseetharam Award 2021</h3>
              <p className="text-gray-600">The Institution of Electronics and Telecommunication Engineers (IETE) India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-professor-gold font-medium mb-1">2021</div>
              <h3 className="text-xl font-bold mb-2">Outstanding Engineering Services to Society Award 2021</h3>
              <p className="text-gray-600">The Institute of Engineers (India) Rajasthan State Centre</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-sm text-professor-gold font-medium mb-1">2020</div>
              <h3 className="text-xl font-bold mb-2">CSIR Technology Award (Innovation)</h3>
              <p className="text-gray-600">For 'Developing a low-cost multipurpose handheld Raman spectrometer'</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-professor-navy/10 p-2 rounded-full">
              <Image className="text-professor-navy h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold font-serif">Gallery</h2>
          </div>
          
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            setApi={(api) => {
              apiRef.current = api;
            }}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <div className="bg-gray-100 rounded-lg overflow-hidden h-64 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-professor-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white font-serif">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in collaborating on research, inviting me for a lecture, or discussing academic opportunities? Feel free to reach out.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-professor-gold text-professor-navy font-medium py-3 px-6 rounded-lg hover:bg-professor-gold/90 transition-colors">
            <Mail className="mr-2" size={20} />
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
