
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WebScraperProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to the Wright Portfolio
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4">
            🕷️ Web Scraper
          </h1>
          <p className="text-purple-200 text-xl">
            Powerful data extraction tool for web automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Project Goals</h2>
            <p className="text-purple-200 mb-4">
              Built a robust web scraping framework capable of extracting structured data from various websites. 
              Includes anti-detection measures, data cleaning, and automated scheduling.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Dynamic Content Handling
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Rate Limiting & Ethics
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Data Validation & Cleaning
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🛠️ Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🐍</div>
                <div className="text-purple-200 text-sm">Python</div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-purple-200 text-sm">Selenium</div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">📦</div>
                <div className="text-purple-200 text-sm">BeautifulSoup</div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🗄️</div>
                <div className="text-purple-200 text-sm">MongoDB</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
          <h2 className="text-2xl font-bold text-white mb-4">✨ Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-white font-semibold mb-2">1M+ Records</h3>
              <p className="text-purple-300 text-sm">Successfully extracted and processed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">95% Uptime</h3>
              <p className="text-purple-300 text-sm">Reliable automated data collection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">Zero Blocks</h3>
              <p className="text-purple-300 text-sm">Sophisticated anti-detection system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebScraperProject;
