
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { User, UserRole } from './types';
import { MOCK_USER } from './constants';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Marketplace from './views/Marketplace';
import Dashboard from './views/Dashboard';
import AdminCenter from './views/AdminCenter';
import SystemDocs from './views/SystemDocs';
import ProductDetail from './views/ProductDetail';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User>(MOCK_USER);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial auth check
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const switchRole = (role: UserRole) => {
    setCurrentUser(prev => ({ ...prev, role }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-nexus-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-nexus-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="font-orbitron text-xl font-bold gradient-text">GAMENEXUS</h1>
          <p className="text-nexus-cyan text-sm animate-pulse">Initializing Secure Environment...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar user={currentUser} onSwitchRole={switchRole} />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetail user={currentUser} />} />
            <Route path="/dashboard/*" element={<Dashboard user={currentUser} />} />
            <Route 
              path="/admin/*" 
              element={currentUser.role === UserRole.ADMIN ? <AdminCenter /> : <Navigate to="/" />} 
            />
            <Route path="/docs" element={<SystemDocs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="bg-nexus-dark border-t border-white/5 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h2 className="font-orbitron text-2xl font-bold gradient-text mb-4">GAMENEXUS</h2>
                <p className="text-gray-400 max-w-md">
                  India's leading marketplace for premium gaming assets. Built for gamers, by gamers. 
                  Ensuring 100% secure escrow transactions and verified seller systems.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#/marketplace" className="hover:text-nexus-purple transition">Marketplace</a></li>
                  <li><a href="#/docs" className="hover:text-nexus-purple transition">Platform Specs</a></li>
                  <li><a href="#" className="hover:text-nexus-purple transition">Trust & Safety</a></li>
                  <li><a href="#" className="hover:text-nexus-purple transition">Seller Guide</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Security</h4>
                <div className="flex flex-wrap gap-4 text-2xl text-nexus-cyan/60">
                  <i className="fa-brands fa-cc-visa"></i>
                  <i className="fa-brands fa-cc-mastercard"></i>
                  <i className="fa-solid fa-shield-halved"></i>
                  <i className="fa-solid fa-lock"></i>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  PCI-DSS Compliant | ISO 27001 Certified
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} GameNexus India Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
