
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_ASSETS } from '../constants';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'ACCOUNT', 'SERVER', 'STEAM', 'SERVICE'];

  const filteredAssets = FEATURED_ASSETS.filter(asset => {
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         asset.gameName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'ALL' || asset.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-orbitron text-4xl font-black mb-2 uppercase tracking-tighter">Inventory</h1>
          <p className="text-gray-500">Showing {filteredAssets.length} verified assets</p>
        </div>

        <div className="relative max-w-md w-full">
          <input 
            type="text" 
            placeholder="Search accounts, games, or servers..." 
            className="w-full bg-nexus-dark border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-nexus-cyan transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass absolute right-6 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
              activeCategory === cat 
                ? 'bg-nexus-purple text-white shadow-lg shadow-nexus-purple/20' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAssets.length > 0 ? (
          filteredAssets.map((asset) => (
            <Link 
              key={asset.id} 
              to={`/product/${asset.id}`} 
              className="bg-nexus-dark border border-white/5 rounded-3xl overflow-hidden hover:border-nexus-purple/40 transition group"
            >
              <div className="relative h-48">
                <img src={asset.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={asset.title} />
                <div className="absolute top-4 left-4">
                  <span className="bg-nexus-cyan px-2 py-1 rounded-md text-[10px] font-bold text-nexus-black shadow-lg">
                    {asset.gameName}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{asset.title}</h3>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2">{asset.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-orbitron font-bold text-white">₹{asset.price.toLocaleString()}</div>
                  <button className="bg-nexus-purple/10 text-nexus-purple p-2 rounded-lg group-hover:bg-nexus-purple group-hover:text-white transition">
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center glass rounded-[2.5rem]">
            <i className="fa-solid fa-ghost text-6xl text-white/10 mb-6"></i>
            <h2 className="text-2xl font-orbitron font-bold text-gray-400">No Loot Found</h2>
            <p className="text-gray-500 max-w-md mx-auto mt-2">Try adjusting your filters or searching for something else.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
