
import React from 'react';
import { User, UserRole } from '../types';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const isSeller = user.role === UserRole.SELLER;

  const stats = isSeller ? [
    { label: 'Active Listings', value: '14', icon: 'fa-tags', color: 'text-nexus-cyan' },
    { label: 'Total Sales', value: '₹2.4L', icon: 'fa-sack-dollar', color: 'text-green-400' },
    { label: 'Trust Score', value: '98%', icon: 'fa-shield-halved', color: 'text-nexus-purple' },
    { label: 'Pending Orders', value: '3', icon: 'fa-clock', color: 'text-yellow-400' }
  ] : [
    { label: 'Open Orders', value: '2', icon: 'fa-box-open', color: 'text-nexus-cyan' },
    { label: 'Total Spent', value: '₹18,500', icon: 'fa-wallet', color: 'text-nexus-purple' },
    { label: 'Wishlist Items', value: '12', icon: 'fa-heart', color: 'text-pink-400' },
    { label: 'Support Tickets', value: '0', icon: 'fa-headset', color: 'text-gray-400' }
  ];

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-orbitron text-4xl font-black mb-1">COMMAND CENTER</h1>
          <p className="text-gray-500">Welcome back, <span className="text-white font-bold">{user.name}</span></p>
        </div>
        <div className="flex gap-4">
          <button className="glass px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition">
            <i className="fa-solid fa-gear text-nexus-cyan"></i>
            Settings
          </button>
          {isSeller ? (
            <button className="bg-nexus-purple px-6 py-3 rounded-xl font-bold hover:bg-nexus-accent transition shadow-lg shadow-nexus-purple/20">
              Create Listing
            </button>
          ) : (
             <button className="bg-nexus-cyan text-nexus-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition">
              Deposit Cash
            </button>
          )}
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-3xl p-6 border border-white/5 group hover:border-nexus-purple/30 transition">
            <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${stat.color}`}>
              <i className={`fa-solid ${stat.icon}`}></i>
            </div>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{stat.label}</p>
            <p className="text-2xl font-orbitron font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden">
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-orbitron font-bold">RECENT ACTIVITY</h3>
              <button className="text-xs text-nexus-cyan hover:underline">View History</button>
            </div>
            <div className="divide-y divide-white/5">
              {[
                { type: 'ORDER', title: 'Payment sent for Valorant Account', date: '2 hours ago', amount: '-₹4,500', icon: 'fa-arrow-up' },
                { type: 'DEPOSIT', title: 'Wallet topped up via PhonePe', date: 'Yesterday', amount: '+₹5,000', icon: 'fa-arrow-down' },
                { type: 'SUPPORT', title: 'Identity Verification Approved', date: '3 days ago', status: 'COMPLETED', icon: 'fa-id-card' }
              ].map((item, idx) => (
                <div key={idx} className="px-8 py-6 flex items-center gap-6 hover:bg-white/5 transition">
                  <div className="w-12 h-12 rounded-2xl bg-nexus-dark flex items-center justify-center text-nexus-cyan">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-[10px] text-gray-500 uppercase">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${item.amount?.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                      {item.amount || '—'}
                    </p>
                    {item.status && <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-1 rounded-md">{item.status}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-8 border-l-4 border-nexus-cyan">
            <h3 className="font-orbitron font-bold mb-4">WALLET</h3>
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Available Balance</p>
                <p className="text-3xl font-orbitron font-black text-white">₹{user.walletBalance.toLocaleString()}</p>
              </div>
              <div className="text-nexus-cyan/20">
                <i className="fa-solid fa-wallet text-5xl"></i>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-grow bg-white/5 hover:bg-white/10 py-3 rounded-xl border border-white/10 text-xs font-bold transition">Withdraw</button>
              <button className="flex-grow bg-nexus-cyan text-nexus-black py-3 rounded-xl font-bold text-xs hover:opacity-90 transition">Add Funds</button>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 border border-white/5">
             <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-nexus-purple/10 flex items-center justify-center text-nexus-purple">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="font-bold text-sm">SECURITY STATUS</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Identity Verification</span>
                <span className="text-green-400 font-bold">VERIFIED</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">2FA Protection</span>
                <span className="text-red-400 font-bold">DISABLED</span>
              </div>
              <button className="w-full mt-2 py-3 rounded-xl bg-nexus-purple/10 text-nexus-purple text-xs font-bold hover:bg-nexus-purple hover:text-white transition">
                Secure Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
