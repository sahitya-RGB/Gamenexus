
import React from 'react';

const AdminCenter: React.FC = () => {
  const metrics = [
    { label: 'Total Volume', value: '₹14.2M', trend: '+12.5%', color: 'text-nexus-cyan' },
    { label: 'Escrow Holdings', value: '₹2.8M', trend: '+4.2%', color: 'text-nexus-purple' },
    { label: 'Dispute Rate', value: '0.8%', trend: '-2.1%', color: 'text-green-400' },
    { label: 'Active Sellers', value: '1,240', trend: '+18', color: 'text-pink-400' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-orbitron text-4xl font-black gradient-text">ADMIN COMMAND</h1>
          <p className="text-gray-500">Global system state and authority controls</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-red-500/10 text-red-500 px-4 py-2 rounded-xl border border-red-500/20 text-xs font-bold flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            SYSTEM ONLINE
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="glass rounded-3xl p-6 border border-white/5">
            <p className="text-xs text-gray-500 uppercase font-bold">{m.label}</p>
            <div className="flex items-end justify-between mt-2">
              <p className={`text-3xl font-orbitron font-black ${m.color}`}>{m.value}</p>
              <span className={`text-[10px] font-bold px-2 py-1 rounded bg-white/5 ${m.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {m.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[2.5rem] p-8 border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-orbitron font-bold">SYSTEM CONTROLS</h2>
            <div className="flex gap-2">
              <button className="bg-nexus-cyan/10 text-nexus-cyan px-4 py-2 rounded-lg text-xs font-bold">Filter</button>
              <button className="bg-white/5 text-white px-4 py-2 rounded-lg text-xs font-bold">Export</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-[10px] uppercase tracking-widest border-b border-white/5">
                  <th className="pb-4">Feature Toggle</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Load</th>
                  <th className="pb-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'UPI Gateway #1', status: 'HEALTHY', load: '14%' },
                  { name: 'Escrow Ledger v2', status: 'HEALTHY', load: '42%' },
                  { name: 'AI Image Verification', status: 'STRESSED', load: '89%' },
                  { name: 'Seller KYC Pipeline', status: 'HEALTHY', load: '5%' }
                ].map((f) => (
                  <tr key={f.name} className="group hover:bg-white/5 transition">
                    <td className="py-4 font-bold text-sm">{f.name}</td>
                    <td className="py-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded ${f.status === 'HEALTHY' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                        {f.status}
                      </span>
                    </td>
                    <td className="py-4 text-xs text-gray-400">{f.load}</td>
                    <td className="py-4 text-right">
                      <button className="text-nexus-cyan opacity-0 group-hover:opacity-100 transition">
                        <i className="fa-solid fa-sliders"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 border border-white/5">
            <h3 className="font-bold text-sm mb-4">CRITICAL ALERTS</h3>
            <div className="space-y-4">
              <div className="bg-red-500/10 p-4 rounded-2xl border border-red-500/20">
                <p className="text-xs font-bold text-red-400">New Dispute #4912</p>
                <p className="text-[10px] text-gray-400 mt-1">High value trade (₹85k) flagged for review.</p>
              </div>
              <div className="bg-nexus-cyan/10 p-4 rounded-2xl border border-nexus-cyan/20">
                <p className="text-xs font-bold text-nexus-cyan">Payout Threshold Reached</p>
                <p className="text-[10px] text-gray-400 mt-1">₹4.2L queued for bank settlement.</p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-3xl p-6 bg-gradient-to-br from-nexus-purple/20 to-transparent">
            <h3 className="font-bold text-sm mb-2">Growth Strategist</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              AI suggests boosting "Steam Account" visibility. Conversion rates for this category are up 14% this week.
            </p>
            <button className="w-full bg-nexus-purple py-3 rounded-xl text-xs font-bold">Apply Campaign</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCenter;
