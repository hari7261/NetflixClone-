import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, signup } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      if (type === 'login') {
        login(email, password);
      } else {
        signup(email, password);
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-black/75 rounded">
      <h2 className="text-3xl font-bold text-white mb-8">
        {type === 'login' ? 'Sign In' : 'Sign Up'}
      </h2>
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded bg-gray-700 text-white"
          required
          minLength={6}
        />
        <button
          type="submit"
          className="w-full py-4 bg-red-600 text-white rounded font-bold hover:bg-red-700 transition"
        >
          {type === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <p className="text-gray-400 mt-4 text-center">
        {type === 'login' ? (
          <>
            New to Netflix?{' '}
            <Link to="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link to="/login" className="text-white hover:underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}