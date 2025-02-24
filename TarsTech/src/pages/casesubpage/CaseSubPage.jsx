import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CaseSubPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate('/cases');
  };

  // Fetch specific case data from the backend
  useEffect(() => {
    console.log(id)
    const fetchCaseData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://tars-tech-backend-chi.vercel.app/api/cases/${id}`);
        const data = await response.json();
        setCaseData(data);
      } catch (error) {
        console.error("Error fetching case:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCaseData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!caseData) {
    return <div>Case not found!</div>;
  }

  return (

    <div className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-6">
      {/* Back Button */}
      <button onClick={handleBack} className="mb-6 p-2 hover:bg-gray-800 rounded-full transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {caseData.title}
          </h1>
          <div className="text-gray-400">
            <span>{caseData.author}</span>
            <span className="mx-2">|</span>
            <span>{new Date(caseData.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <div>
          <img
            src={`${caseData.image}`} // Display the image
            alt={caseData.title}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Problem Sections */}

      <div className="flex flex-wrap gap-6 mb-12">
        <div className="flex-1 min-w-[300px] space-y-4">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
            Problem Before -
          </h2>
          <p className="text-gray-300 break-words whitespace-pre-wrap overflow-hidden">
            {caseData.problemBefore}
          </p>
        </div>
        <div className="flex-1 min-w-[300px] space-y-4">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
            Problem Solved -
          </h2>
          <p className="text-gray-300 break-words whitespace-pre-wrap overflow-hidden">
            {caseData.problemSolved}
          </p>
        </div>
        <div className="flex-1 min-w-[300px] space-y-4">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
            What we Add -
          </h2>
          <p className="text-gray-300 break-words whitespace-pre-wrap overflow-hidden">
            {caseData.whatWeAdded}
          </p>
        </div>
      </div>

      {/* Technologies and Provider */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
          <p className="text-gray-300">{caseData.technologies}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">UI/UX Designer</h2>
          <p className="text-gray-300">{caseData.figmaProvider}</p>
        </div>
      </div>

      {/* What Was Build */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">What Was Build</h2>
        <p className="text-gray-300">{caseData.whatWasBuild}</p>
      </div>
    </div>


  );
};

export default CaseSubPage;