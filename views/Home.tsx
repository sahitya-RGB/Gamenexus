
import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_ASSETS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-nexus-dark border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-nexus-purple/20 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
           <img 
            src="https://picsum.photos/seed/gaming/800/600" 
            className="w-full h-full object-cover opacity-30 mask-gradient-hero" 
            alt="Hero" 
          />
        </div>

        <div className="relative px-8 py-20 lg:py-32 lg:px-16 max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-nexus-cyan/10 border border-nexus-cyan/20 px-3 py-1 rounded-full text-nexus-cyan text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-cyan"></span>
            </span>
            <span>Live Marketplace | India's #1</span>
          </div>
          
          <h1 className="font-orbitron text-5xl lg:text-7xl font-black mb-6 leading-tight">
            LEVEL UP YOUR <br />
            <span className="gradient-text">GAMING LEGACY</span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            The most secure, high-speed marketplace for digital gaming assets in India. 
            Trade accounts, servers, and rare items with 100% escrow protection.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/marketplace" className="bg-nexus-purple hover:bg-nexus-accent text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-nexus-purple/30 transform hover:-translate-y-1">
              Browse Inventory
            </Link>
            <Link to="/dashboard" className="bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl border border-white/10 transition-all">
              Sell Assets
            </Link>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-white">50k+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Trades</div>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-white">₹10Cr+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Volume</div>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-white">4.9/5</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-orbitron text-3xl font-bold mb-2">HOT CATEGORIES</h2>
            <p className="text-gray-500">Find exactly what you need to dominate</p>
          </div>
          <Link to="/marketplace" className="text-nexus-cyan font-bold hover:underline">View All</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Accounts', icon: 'fa-user-astronaut', color: 'from-blue-500/20' },
            { name: 'Servers', icon: 'fa-server', color: 'from-purple-500/20' },
            { name: 'Steam', icon: 'fa-steam', color: 'from-gray-500/20' },
            { name: 'Boosts', icon: 'fa-rocket', color: 'from-pink-500/20' }
          ].map((cat) => (
            <Link key={cat.name} to="/marketplace" className={`group relative bg-nexus-dark border border-white/5 p-8 rounded-3xl overflow-hidden hover:border-nexus-purple/50 transition-all`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <i className={`fa-solid ${cat.icon} text-4xl mb-4 text-nexus-purple group-hover:scale-110 transition-transform`}></i>
              <h3 className="font-orbitron text-lg font-bold">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-orbitron text-3xl font-bold mb-2">ELITE LISTINGS</h2>
            <p className="text-gray-500">Hand-picked premium assets verified by our team</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_ASSETS.map((asset) => (
            <Link key={asset.id} to={`/product/${asset.id}`} className="group bg-nexus-dark border border-white/5 rounded-3xl overflow-hidden hover:border-nexus-cyan/50 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={asset.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={asset.title} />
                <div className="absolute top-4 right-4 bg-nexus-black/80 px-2 py-1 rounded-lg text-[10px] font-bold text-nexus-cyan border border-nexus-cyan/30">
                  {asset.gameName}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-lg mb-2 line-clamp-1">{asset.title}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-500 text-xs">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="text-xs text-gray-500">98% Trust</span>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <div className="text-xl font-orbitron font-bold text-nexus-purple">₹{asset.price.toLocaleString()}</div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-nexus-purple transition">
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
