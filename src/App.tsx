import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import NewAndPopular from './pages/NewAndPopular';
import AuthPage from './pages/Auth';
import { useAuth } from './context/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative min-h-screen bg-black">
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <AuthPage type="login" />
        } />
        <Route path="/signup" element={
          isAuthenticated ? <Navigate to="/" /> : <AuthPage type="signup" />
        } />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/tv-shows" element={<ProtectedRoute><TVShows /></ProtectedRoute>} />
        <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
        <Route path="/new-and-popular" element={<ProtectedRoute><NewAndPopular /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;