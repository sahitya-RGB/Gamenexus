
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FEATURED_ASSETS } from '../constants';
import { User, GamingAsset } from '../types';
import { checkListingSafety } from '../services/gemini';

interface ProductDetailProps {
  user: User;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ user }) => {
  const { id } = useParams();
  const [asset, setAsset] = useState<GamingAsset | null>(null);
  const [isCheckingSafety, setIsCheckingSafety] = useState(false);
  const [safetyReport, setSafetyReport] = useState<any>(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  useEffect(() => {
    const found = FEATURED_ASSETS.find(a => a.id === id);
    if (found) {
      setAsset(found);
      performSafetyCheck(found);
    }
  }, [id]);

  const performSafetyCheck = async (a: GamingAsset) => {
    setIsCheckingSafety(true);
    const report = await checkListingSafety(a.description, a.price, a.gameName);
    setSafetyReport(report);
    setIsCheckingSafety(false);
  };

  if (!asset) return <div>Product not found</div>;

  return (
    <div className="pb-20">
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <i className="fa-solid fa-chevron-right text-[10px]"></i>
        <Link to="/marketplace" className="hover:text-white transition">Inventory</Link>
        <i className="fa-solid fa-chevron-right text-[10px]"></i>
        <span className="text-nexus-cyan truncate">{asset.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Visuals & Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-nexus-dark border border-white/5">
            <img src={asset.images[0]} className="w-full aspect-video object-cover" alt={asset.title} />
          </div>

          <div className="glass rounded-3xl p-8 border border-white/5">
            <h2 className="font-orbitron text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-chart-simple text-nexus-cyan"></i>
              ASSET SPECIFICATIONS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(asset.stats).map(([key, value]) => (
                <div key={key} className="bg-white/5 p-4 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">{key}</p>
                  <p className="text-lg font-orbitron font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-orbitron text-2xl font-bold">DESCRIPTION</h2>
            <div className="glass rounded-3xl p-8 text-gray-400 leading-relaxed border border-white/5">
              {asset.description}
            </div>
          </div>
        </div>

        {/* Right: Purchase & AI Shield */}
        <div className="space-y-6">
          <div className="glass rounded-[2.5rem] p-8 border-b-4 border-nexus-purple relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <i className="fa-solid fa-tags text-6xl"></i>
            </div>
            
            <p className="text-gray-500 font-bold text-sm uppercase mb-2">Price Estimate</p>
            <div className="text-4xl font-orbitron font-black text-white mb-6">₹{asset.price.toLocaleString()}</div>
            
            <button 
              onClick={() => setShowCheckoutModal(true)}
              className="w-full bg-nexus-purple hover:bg-nexus-accent text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-nexus-purple/30 mb-4"
            >
              Initiate Escrow Purchase
            </button>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2">
              <i className="fa-regular fa-heart"></i>
              Add to Wishlist
            </button>

            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <p className="text-xs text-gray-400">100% Funds Protection</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-nexus-cyan/10 flex items-center justify-center text-nexus-cyan">
                  <i className="fa-solid fa-clock text-xs"></i>
                </div>
                <p className="text-xs text-gray-400">Average Handover: 15 mins</p>
              </div>
            </div>
          </div>

          {/* AI Safety Report */}
          <div className={`glass rounded-3xl p-6 border ${safetyReport?.isSafe ? 'border-green-500/30' : 'border-red-500/30'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2">
                <i className="fa-solid fa-shield-virus text-nexus-cyan"></i>
                Nexus AI Shield
              </h3>
              {isCheckingSafety && <div className="w-4 h-4 border-2 border-nexus-cyan border-t-transparent rounded-full animate-spin"></div>}
            </div>

            {safetyReport ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Risk Score</span>
                  <span className={`text-sm font-bold ${safetyReport.riskScore < 30 ? 'text-green-400' : 'text-orange-400'}`}>
                    {safetyReport.riskScore}/100
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-nexus-cyan transition-all duration-1000" style={{ width: `${100 - safetyReport.riskScore}%` }}></div>
                </div>
                <p className="text-xs text-gray-400 italic">"{safetyReport.recommendation}"</p>
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">Analyzing listing data for safety markers...</p>
            )}
          </div>

          {/* Seller Card */}
          <div className="glass rounded-3xl p-6 border border-white/5 flex items-center gap-4">
            <img src="https://picsum.photos/seed/seller1/100" className="w-12 h-12 rounded-full border border-nexus-purple" alt="Seller" />
            <div className="flex-grow">
              <div className="flex items-center gap-1">
                <h4 className="font-bold text-sm">ProGamer_99</h4>
                <i className="fa-solid fa-circle-check text-nexus-cyan text-[10px]"></i>
              </div>
              <p className="text-[10px] text-gray-500">Member since 2021</p>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-nexus-cyan">98 Trust</div>
              <p className="text-[10px] text-gray-500">241 Trades</p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-nexus-black/90 backdrop-blur-md" onClick={() => setShowCheckoutModal(false)}></div>
          <div className="relative glass w-full max-w-lg rounded-[2.5rem] p-10 border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200">
            <h2 className="font-orbitron text-3xl font-black mb-2">SECURE ESCROW</h2>
            <p className="text-gray-400 text-sm mb-8">Your payment will be held safely until you confirm receipt of the asset.</p>

            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-gray-400">Item Price</span>
                <span className="font-bold">₹{asset.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-gray-400">Escrow Fee (3%)</span>
                <span className="text-nexus-cyan">₹{(asset.price * 0.03).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-lg font-bold">Total Due</span>
                <span className="text-2xl font-orbitron font-bold text-white">₹{(asset.price * 1.03).toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="py-4 rounded-2xl bg-white/5 font-bold hover:bg-white/10 transition"
              >
                Cancel
              </button>
              <button 
                className="py-4 rounded-2xl bg-nexus-purple font-bold hover:bg-nexus-accent transition shadow-lg shadow-nexus-purple/20"
                onClick={() => {
                  alert("Redirecting to Secure UPI Gateway...");
                  setShowCheckoutModal(false);
                }}
              >
                Pay with UPI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
