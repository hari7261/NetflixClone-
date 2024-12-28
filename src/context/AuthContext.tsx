import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const isAuthenticated = !!user;

  const login = (email: string, password: string) => {
    // Simulate authentication
    setUser({ email });
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const signup = (email: string, password: string) => {
    // Simulate registration
    setUser({ email });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};