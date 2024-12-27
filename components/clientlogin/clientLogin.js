'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ClientLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false); // State to control success alert visibility
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username || 'mor_2314',
          password: password || '83r5^_',
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("authToken", data.token); // Save token to localStorage
        setShowSuccess(true); // Show success alert

        setTimeout(() => {
          setShowSuccess(false);
          router.push('/'); 
        }, 1000);
      } else {
        setError('Invalid login credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err.message);
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="container mx-auto p-4 relative">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      {/* Pop-Up Alert */}
      {showSuccess && (
        <div
          className="fixed bottom-36 left-1/2 transform -translate-x-1/2 z-50 p-4 mb-4 text-xl text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 shadow-lg"
          role="alert"
        >
          Successful Login!
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleLogin} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="mor_2314"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="83r5^_"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

        <div className="text-center mt-6">
          <p className="text-gray-600">Not a user yet?</p>
          <button
            onClick={() => router.push('/signup')}
            className="mt-2 bg-gray-200 text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-200"
          >
            Go to Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientLogin;
