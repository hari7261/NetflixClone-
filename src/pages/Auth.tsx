import React from 'react';
import AuthForm from '../components/AuthForm';

interface AuthPageProps {
  type: 'login' | 'signup';
}

export default function AuthPage({ type }: AuthPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574267432553-4b4628081c31)' }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10">
        <AuthForm type={type} />
      </div>
    </div>
  );
}