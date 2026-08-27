"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Loader2, ArrowRight, CheckCircle } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState('Unknown');

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(res => res.json())
      .then(data => {
        if (data.country) setCountry(data.country);
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/google-sheet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, country }),
      });

      if (!res.ok) {
        throw new Error('An error occurred during registration.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-950 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-6">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
              <span className="text-white dark:text-black font-black text-lg">R</span>
            </div>
            RomMap
          </Link>
          
          {isSuccess ? (
            <>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Check your email!</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                We've securely added your email to our database and sent you a direct download link to the RomMap installer.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full"
              >
                Return to Home
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Get RomMap Free</h1>
              <p className="text-gray-500 mt-3 text-sm">
                Enter your email to receive the official Windows installer download link. 
                <br/><br/>
                <strong>We don't send any marketing emails.</strong> This is simply to register you into our secure customer base.
              </p>
            </>
          )}
        </div>

        {!isSuccess && (
          <>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex justify-center items-center h-12 gap-2"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Get Download Link'}
                {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
