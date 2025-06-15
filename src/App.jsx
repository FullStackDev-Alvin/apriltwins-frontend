import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Dashboard, { AdminLogin } from './Pages/DashboardComponents';
import Gallery from './Pages/Gallery';
import Blogs from './Pages/Blogs';
import Loader from './Components/Loader';
import About from './Pages/About';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay to simulate loading (replace with real data load if needed)
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
