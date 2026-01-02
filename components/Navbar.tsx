
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, UserRole } from '../types';

interface NavbarProps {
  user: User;
  onSwitchRole: (role: UserRole) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onSwitchRole }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Marketplace', path: '/marketplace', icon: 'fa-shop' },
    { label: 'Platform Specs', path: '/docs', icon: 'fa-file-code' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5 bg-nexus-black/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-nexus-purple to-nexus-pink rounded-xl flex items-center justify-center shadow-lg shadow-nexus-purple/20">
              <i className="fa-solid fa-bolt text-white text-xl"></i>
            </div>
            <span className="font-orbitron text-2xl font-black tracking-tighter gradient-text hidden sm:block">GAMENEXUS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 transition font-medium ${
                  location.pathname === link.path ? 'text-nexus-cyan' : 'text-gray-300 hover:text-white'
                }`}
              >
                <i className={`fa-solid ${link.icon} text-sm`}></i>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs text-nexus-cyan font-bold uppercase tracking-wider">{user.role} VIEW</span>
              <span className="text-sm font-semibold">₹{user.walletBalance.toLocaleString()}</span>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-white/5 p-1 pr-3 rounded-full hover:bg-white/10 transition border border-white/10"
              >
                <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full border border-nexus-purple/50" />
                <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 glass rounded-2xl shadow-2xl py-2 overflow-hidden border border-white/10 z-[60]">
                  <div className="px-4 py-3 border-b border-white/5 bg-white/5">
                    <p className="text-sm font-bold truncate">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  
                  <div className="py-2">
                    <Link to="/dashboard" onClick={() => setIsDropdownOpen(false)} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-nexus-purple/20 hover:text-white transition">
                      <i className="fa-solid fa-gauge-high w-6"></i> Dashboard
                    </Link>
                    {user.role === UserRole.ADMIN && (
                      <Link to="/admin" onClick={() => setIsDropdownOpen(false)} className="flex items-center px-4 py-2 text-sm text-nexus-cyan hover:bg-nexus-cyan/20 transition">
                        <i className="fa-solid fa-user-shield w-6"></i> Admin Center
                      </Link>
                    )}
                  </div>

                  <div className="py-2 border-t border-white/5">
                    <p className="px-4 py-1 text-[10px] uppercase font-bold text-gray-500">Switch Perspective</p>
                    <button onClick={() => { onSwitchRole(UserRole.BUYER); setIsDropdownOpen(false); }} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                      <i className="fa-solid fa-cart-shopping w-6"></i> Buyer
                    </button>
                    <button onClick={() => { onSwitchRole(UserRole.SELLER); setIsDropdownOpen(false); }} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                      <i className="fa-solid fa-store w-6"></i> Seller
                    </button>
                    <button onClick={() => { onSwitchRole(UserRole.ADMIN); setIsDropdownOpen(false); }} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                      <i className="fa-solid fa-lock w-6"></i> Super Admin
                    </button>
                  </div>

                  <div className="border-t border-white/5 mt-2">
                    <button className="w-full text-left flex items-center px-4 py-2 text-sm text-red-400 hover:bg-red-400/10 transition">
                      <i className="fa-solid fa-arrow-right-from-bracket w-6"></i> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
