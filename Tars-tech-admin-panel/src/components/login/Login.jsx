// import { useState } from 'react';

// export default function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');

//         // Hardcoded credentials
//         const validEmail = 'tarstechnologies@tars.co.in';
//         const validPassword = 'tars@123';

//         // Check if the entered credentials match the hardcoded ones
//         if (email === validEmail && password === validPassword) {
//             // Redirect to /admin page on successful login
//             window.location.href = '/admin';
//         } else {
//             // Show error message if credentials are incorrect
//             setError('Invalid email or password');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 relative">
//             {/* Background pattern */}
//             <div className="absolute inset-0 overflow-hidden opacity-10">
//                 <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                         <pattern id="circuit-board" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                             <path d="M10 10h80v80H10z" fill="none" stroke="currentColor" strokeWidth="0.5" />
//                             <circle cx="50" cy="50" r="5" fill="currentColor" />
//                             <path d="M50 20v20M50 60v20M20 50h20M60 50h20" stroke="currentColor" strokeWidth="0.5" />
//                         </pattern>
//                     </defs>
//                     <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-board)" />
//                 </svg>
//             </div>

//             {/* Login form */}
//             <div className="bg-white m-8 p-8 rounded-lg shadow-2xl w-full max-w-md relative z-10">
//                 <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
//                 {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                             Email
//                         </label>
//                         <input
//                             id="email"
//                             type="email"
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             id="password"
//                             type="password"
//                             required
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             Log In
//                         </button>
//                     </div>
//                 </form>
//                 {/* <div className="mt-4 text-center">
//                     <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
//                         Forgot your password?
//                     </a>
//                 </div>
//                 <div className="mt-6 text-center">
//                     <p className="text-sm text-gray-600">
//                         Don&apos;t have an account?{' '}
//                         <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                             Sign up
//                         </a>
//                     </p>
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// Authenticated LoginPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Attempt to log in using the context's login function
    if (login(email, password)) {
      // Redirect to /admin page on successful login
      navigate("/admin");
    } else {
      // Show error message if credentials are incorrect
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit-board"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10h80v80H10z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              <path
                d="M50 20v20M50 60v20M20 50h20M60 50h20"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#circuit-board)"
          />
        </svg>
      </div>
      {/* Login form */}
      <div className="bg-white m-8 p-8 rounded-lg shadow-2xl w-full max-w-md relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
