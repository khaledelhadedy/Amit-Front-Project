
// 'use client';

// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [token, setToken] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('https://fakestoreapi.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: username || 'mor_2314', // Default username for testing
//           password: password || '83r5^_', // Default password for testing
//         }),
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();

//       if (data.token) {
//         setToken(data.token); // Save the token in state
//         console.log('Login successful! Token:', data.token);
//         setError(null); // Clear previous errors
//       } else {
//         setError('Invalid login credentials.');
//       }
//     } catch (err) {
//       console.error('Error during login:', err.message);
//       setError(err.message || 'Something went wrong.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold content-center mb-4">Login</h1>
//       <div className="mb-6 flex justify-center">
//            <img className="w-32" src="/images/logo.png" alt="logo" />
//         </div>
//       <form onSubmit={handleLogin} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="mor_2314"
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="83r5^_"
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-200"
//         >
//           Login
//         </button>
//       </form>

//       {token && (
//         <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-500 rounded-md">
//           <p>
//             <strong>Login Successful!</strong> Your token:
//           </p>
//           <code className="block break-all mt-2">{token}</code>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;



// 'use client';

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [token, setToken] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false); // Success alert visibility
//   const router = useRouter();

//   useEffect(() => {
//     // Check for token in localStorage on page load
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('https://fakestoreapi.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: username || 'mor_2314', // Default username for testing
//           password: password || '83r5^_', // Default password for testing
//         }),
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();

//       if (data.token) {
//         setToken(data.token);
//         localStorage.setItem("authToken", data.token); // Save token to localStorage
//         setError(null);
//         setShowSuccess(true);

//         setTimeout(() => {
//           setShowSuccess(false); // Hide success alert after 3 seconds
//           router.push('/'); // Redirect to home page
//         }, 3000);
//       } else {
//         setError('Invalid login credentials.');
//       }
//     } catch (err) {
//       console.error('Error during login:', err.message);
//       setError(err.message || 'Something went wrong.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setToken(null);
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

//       {showSuccess && (
//         <div className="bg-green-500 text-white p-3 mb-4 rounded text-center">
//           Login successful! Redirecting to home...
//         </div>
//       )}

//       {token ? (
//         // When user is logged in
//         <div className="text-center">
//           <h2 className="text-lg font-semibold mb-4">Welcome, User!</h2>
         
//         </div>
//       ) : (
//         // When user is not logged in
//         <form onSubmit={handleLogin} className="max-w-md mx-auto">
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="mor_2314"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="83r5^_"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-200"
//           >
//             Login
//           </button>

//           <div className="text-center mt-6">
//             <p className="text-gray-600">Not a user yet?</p>
//             <button
//               onClick={() => router.push('/signup')}
//               className="mt-2 bg-gray-200 text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-200"
//             >
//               Go to Sign Up
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;


import ClientLogin from "../../components/clientlogin/clientLogin";

export default function LoginPage() {
  return <ClientLogin />;
}

