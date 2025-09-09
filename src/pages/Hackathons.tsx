
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const Hackathons = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
//       <button
//         onClick={() => navigate('/')}
//         className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
//       >
//         <ArrowLeft size={20} />
//         Back to Kerene's World
//       </button>

//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl">
//             <span>🏅</span>
//             <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
//               Hackathons
//             </span>
//           </h1>
//           <p className="text-purple-200 text-xl">
//             Hackathon Projects and Achievements
//           </p>
//         </div>

//         <div className="space-y-8">
//           <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
//             <h2 className="text-2xl font-bold text-white mb-4">🎨 Project Highlights</h2>
//             <p className="text-purple-200 mb-6">
//               Created comprehensive data visualization platform with real-time analytics, 
//               interactive charts, and automated reporting systems for business intelligence.
//             </p>
            
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="bg-blue-500/20 rounded-xl p-4">
//                 <div className="text-3xl mb-2">📈</div>
//                 <h3 className="text-white font-semibold mb-2">Real-time Charts</h3>
//                 <p className="text-purple-300 text-sm">Live updating visualizations with streaming data</p>
//               </div>
//               <div className="bg-blue-500/20 rounded-xl p-4">
//                 <div className="text-3xl mb-2">🎯</div>
//                 <h3 className="text-white font-semibold mb-2">Custom Dashboards</h3>
//                 <p className="text-purple-300 text-sm">Personalized analytics for different user roles</p>
//               </div>
//               <div className="bg-blue-500/20 rounded-xl p-4">
//                 <div className="text-3xl mb-2">🔍</div>
//                 <h3 className="text-white font-semibold mb-2">Advanced Filtering</h3>
//                 <p className="text-purple-300 text-sm">Multi-dimensional data exploration tools</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
//               <h2 className="text-2xl font-bold text-white mb-4">💻 Technologies</h2>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">⚛️</div>
//                   <span className="text-purple-200">React & D3.js</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">📊</div>
//                   <span className="text-purple-200">Chart.js & Plotly</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">🗄️</div>
//                   <span className="text-purple-200">PostgreSQL</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">⚡</div>
//                   <span className="text-purple-200">Redis Caching</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
//               <h2 className="text-2xl font-bold text-white mb-4">🏆 Impact</h2>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-purple-300">Response Time</span>
//                   <span className="text-white font-bold">&lt; 200ms</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-purple-300">Data Points</span>
//                   <span className="text-white font-bold">10M+</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-purple-300">User Adoption</span>
//                   <span className="text-white font-bold">98%</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-purple-300">Decision Time</span>
//                   <span className="text-white font-bold">-75%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hackathons;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Hackathons = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      highlights: [
        { icon: "📈", title: "Real-time Charts", desc: "Live updating visualizations with streaming data" },
        { icon: "🎯", title: "Custom Dashboards", desc: "Personalized analytics for different user roles" },
        { icon: "🔍", title: "Advanced Filtering", desc: "Multi-dimensional data exploration tools" },
      ],
      technologies: [
        { icon: "⚛️", text: "React & D3.js", color: "bg-blue-500" },
        { icon: "📊", text: "Chart.js & Plotly", color: "bg-green-500" },
        { icon: "🗄️", text: "PostgreSQL", color: "bg-purple-500" },
        { icon: "⚡", text: "Redis Caching", color: "bg-orange-500" },
      ],
      impact: [
        { label: "Response Time", value: "< 200ms" },
        { label: "Data Points", value: "10M+" },
        { label: "User Adoption", value: "98%" },
        { label: "Decision Time", value: "-75%" },
      ],
    },
    {
      highlights: [
        { icon: "🛡️", title: "Secure Ledger", desc: "Immutable blockchain voting records" },
        { icon: "🌐", title: "Global Access", desc: "Cross-border digital voting support" },
        { icon: "📱", title: "Mobile Friendly", desc: "Progressive web app with offline support" },
      ],
      technologies: [
        { icon: "⛓️", text: "Ethereum Smart Contracts", color: "bg-yellow-500" },
        { icon: "⚛️", text: "React & Web3.js", color: "bg-blue-500" },
        { icon: "🔐", text: "Zero Knowledge Proofs", color: "bg-red-500" },
      ],
      impact: [
        { label: "Votes Cast", value: "500k+" },
        { label: "Fraud Attempts", value: "0" },
        { label: "Uptime", value: "99.9%" },
      ],
    },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Kerene&apos;s World
      </button>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl flex justify-center gap-2">
            <span>🏅</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Hackathons
            </span>
          </h1>
          <p className="text-purple-200 text-xl">Hackathon Projects and Achievements</p>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, idx) => (
              <div key={idx} className="min-w-full px-4">
                <div className="space-y-8">
                  {/* Highlights */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
                    <h2 className="text-2xl font-bold text-white mb-4">🎨 Project Highlights</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="bg-blue-500/20 rounded-xl p-4">
                          <div className="text-3xl mb-2">{h.icon}</div>
                          <h3 className="text-white font-semibold mb-2">{h.title}</h3>
                          <p className="text-purple-300 text-sm">{h.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech + Impact */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
                      <h2 className="text-2xl font-bold text-white mb-4">💻 Technologies</h2>
                      <div className="space-y-3">
                        {project.technologies.map((t, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${t.color} rounded-lg flex items-center justify-center`}>
                              {t.icon}
                            </div>
                            <span className="text-purple-200">{t.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
                      <h2 className="text-2xl font-bold text-white mb-4">🏆 Impact</h2>
                      <div className="space-y-4">
                        {project.impact.map((i, j) => (
                          <div key={j} className="flex justify-between items-center">
                            <span className="text-purple-300">{i.label}</span>
                            <span className="text-white font-bold">{i.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          {/* <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-purple-700/50 text-white px-3 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-purple-700/50 text-white px-3 py-1 rounded-full"
          >
            ›
          </button> */}

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-teal-400" : "bg-purple-400/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;

