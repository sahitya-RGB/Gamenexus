
import React from 'react';

const SystemDocs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-20">
      <header className="text-center">
        <h1 className="font-orbitron text-5xl font-black mb-4 gradient-text">SYSTEM BLUEPRINT</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technical specifications, security protocols, and infrastructure roadmap for the GameNexus ecosystem.
        </p>
      </header>

      {/* Architecture Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-nexus-cyan/10 rounded-xl flex items-center justify-center text-nexus-cyan">
            <i className="fa-solid fa-sitemap"></i>
          </div>
          <h2 className="font-orbitron text-2xl font-bold">ARCHITECTURAL MODEL</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-8 rounded-[2rem] border border-white/5">
            <h3 className="font-bold text-nexus-cyan mb-4">Core Infrastructure</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> Microservices (Node.js/Go)</li>
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> MongoDB for Flexible Schema</li>
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> Redis for Real-time Caching</li>
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> Apache Kafka for Transaction Event Mesh</li>
            </ul>
          </div>
          <div className="glass p-8 rounded-[2rem] border border-white/5">
            <h3 className="font-bold text-nexus-purple mb-4">Frontend Stack</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> React 18+ / TypeScript</li>
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> Tailwind CSS (Utility First)</li>
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> Framer Motion (Interactions)</li>
              <li className="flex gap-2"><i className="fa-solid fa-check text-green-500"></i> Capacitor for Native Bridge</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Model */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-nexus-purple/10 rounded-xl flex items-center justify-center text-nexus-purple">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h2 className="font-orbitron text-2xl font-bold">SECURITY & TRUST LAYER</h2>
        </div>
        
        <div className="glass p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-nexus-purple/5 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fa-solid fa-lock text-3xl text-nexus-cyan mb-4"></i>
              <h4 className="font-bold mb-2">Escrow 2.0</h4>
              <p className="text-xs text-gray-500">Smart-contract style ledger holding funds until verification.</p>
            </div>
            <div className="text-center">
              <i className="fa-solid fa-fingerprint text-3xl text-nexus-purple mb-4"></i>
              <h4 className="font-bold mb-2">KYC Shield</h4>
              <p className="text-xs text-gray-500">Aadhaar & DigiLocker integration for 100% verified sellers.</p>
            </div>
            <div className="text-center">
              <i className="fa-solid fa-user-secret text-3xl text-pink-400 mb-4"></i>
              <h4 className="font-bold mb-2">AI Sentinel</h4>
              <p className="text-xs text-gray-500">Real-time fraud pattern detection across all transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Database Schema Representation */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
           <div className="h-10 w-10 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500">
            <i className="fa-solid fa-database"></i>
          </div>
          <h2 className="font-orbitron text-2xl font-bold">DATA ENTITY RELATIONSHIP</h2>
        </div>
        
        <div className="bg-nexus-dark border border-white/10 rounded-3xl p-6 font-mono text-xs text-nexus-cyan overflow-x-auto">
          <pre>{`
Table USERS {
  id: UUID [primary key]
  email: String [unique]
  password_hash: String
  role: ENUM('BUYER', 'SELLER', 'ADMIN')
  wallet_balance: Decimal
  identity_status: ENUM('PENDING', 'VERIFIED', 'REJECTED')
}

Table ASSETS {
  id: UUID [primary key]
  seller_id: UUID [ref: > USERS.id]
  game_id: UUID
  title: String
  price: Decimal
  stats: JSONB
  status: ENUM('AVAILABLE', 'ESCROW', 'SOLD')
}

Table TRANSACTIONS {
  id: UUID [primary key]
  buyer_id: UUID [ref: > USERS.id]
  seller_id: UUID [ref: > USERS.id]
  asset_id: UUID [ref: > ASSETS.id]
  escrow_id: String
  status: ENUM('PENDING', 'SETTLED', 'DISPUTED')
}
          `}</pre>
        </div>
      </section>

      {/* Roadmap */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
           <div className="h-10 w-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500">
            <i className="fa-solid fa-map"></i>
          </div>
          <h2 className="font-orbitron text-2xl font-bold">STRATEGIC ROADMAP</h2>
        </div>

        <div className="relative pl-8 border-l-2 border-white/5 space-y-12">
          {[
            { phase: 'Q1: Foundation', goal: 'Launch of web-platform with core Escrow and Identity verification.' },
            { phase: 'Q2: Expansion', goal: 'Native iOS/Android App release. Integration of 10+ new game categories.' },
            { phase: 'Q3: Ecosystem', goal: 'Community features: Gamer profiles, social reviews, and influencer stores.' },
            { phase: 'Q4: Scale', goal: 'Global market entry starting with South East Asia (SEA).' }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-nexus-purple border-4 border-nexus-black"></div>
              <h4 className="font-orbitron font-bold text-white mb-2">{item.phase}</h4>
              <p className="text-sm text-gray-400">{item.goal}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SystemDocs;
