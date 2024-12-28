import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-red-600 text-2xl md:text-4xl font-bold">NETFLIX</Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/tv-shows" className="text-white hover:text-gray-300">TV Shows</Link>
            <Link to="/movies" className="text-white hover:text-gray-300">Movies</Link>
            <Link to="/new-and-popular" className="text-white hover:text-gray-300">New & Popular</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-white cursor-pointer" />
          <Bell className="w-6 h-6 text-white cursor-pointer" />
          <div className="relative group">
            <User className="w-6 h-6 text-white cursor-pointer" />
            <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded-md shadow-lg py-1 hidden group-hover:block">
              <div className="px-4 py-2 text-sm text-gray-300">{user?.email}</div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}