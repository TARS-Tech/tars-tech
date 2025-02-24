import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import TarsRobot from '../../components/tarsrobot/TarsRobot';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Replace this URL with your actual API endpoint
      const response = await fetch('https://tars-tech-backend.vercel.app/api/cases');

      if (!response.ok) {
        throw new Error('Failed to fetch case studies');
      }

      const data = await response.json();

      // Set the case studies data from the API
      setCases(data);
    } catch (err) {
      setError('Failed to load case studies. Please try again later.');
      console.error('Error fetching case studies:', err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(cases)
  const socialMediaPlatforms = [
    { name: 'LinkedIn', icon: '/linkedin-black.svg', url: 'https://www.linkedin.com/company/tars-technologies/' },
    { name: 'Behance', icon: '/behance-black.svg', url: 'https://www.behance.net/tarstechnol' },
    { name: 'Dribble', icon: '/dribble-black.svg', url: 'https://dribbble.com/TARS_Technologies' },
    { name: 'Medium', icon: '/medium-svgrepo-com.svg', url: 'https://medium.com/@tarstechnologiesco' },
  ];

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8" />
          <div className="h-[500px] bg-gray-200 rounded-lg mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="space-y-4">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Oops!</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchCaseStudies}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Case Studies</h2>
            <p className="text-gray-700 leading-relaxed">
              TARS Technologies consists of highly skilled enthusiasts who dream of making the world an intelligent and fulfilled place by empowering organizations to gain a competitive edge. Loaded with information technology tools, techniques, and a skilled workforce, we provide customized solutions for all your business processes.
            </p>
          </div>
          <div className="relative">
            <img
              src="/caseimg1.svg"
              alt="Case Studies Illustration"
              className="w-full h-96"
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          {socialMediaPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label={`Follow us on ${platform.name}`}
            >
              <img
                src={platform.icon}
                alt={`${platform.name} icon`}
                className="w-8 h-8"
                width="24"
                height="24"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 min-h-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {cases.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600">Cases Coming Soon!</h3>
              <p className="text-gray-500">We are working on some exciting case studies. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseStudy, index) => (
                <Link key={index} to={`/cases/${caseStudy._id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src={caseStudy.image}
                      alt={`Case study ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 text-sm">{caseStudy.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-200 min-h-96 p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Collection of Practices & Insights
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/ServiceImg.png"
                alt="Digital Globe"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">
              10 Best Example of Collection of Practices & Insights
            </h2>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/ServiceImg.png"
                alt="2025 Goals Visualization"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">
              10 Best Example of Collection of Practices & Insights
            </h2>
          </div>
        </div>
      </div>

      <TarsRobot />
    </>
  );
};

export default Cases;
