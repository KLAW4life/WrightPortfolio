
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DataVisualizationProject = () => {
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
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
            📊 Data Visualization
          </h1>
          <p className="text-purple-200 text-xl">
            Interactive dashboards and beautiful data storytelling
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎨 Project Highlights</h2>
            <p className="text-purple-200 mb-6">
              Created comprehensive data visualization platform with real-time analytics, 
              interactive charts, and automated reporting systems for business intelligence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-4">
                <div className="text-3xl mb-2">📈</div>
                <h3 className="text-white font-semibold mb-2">Real-time Charts</h3>
                <p className="text-purple-300 text-sm">Live updating visualizations with streaming data</p>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-2">Custom Dashboards</h3>
                <p className="text-purple-300 text-sm">Personalized analytics for different user roles</p>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-4">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="text-white font-semibold mb-2">Advanced Filtering</h3>
                <p className="text-purple-300 text-sm">Multi-dimensional data exploration tools</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">💻 Technologies</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">⚛️</div>
                  <span className="text-purple-200">React & D3.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">📊</div>
                  <span className="text-purple-200">Chart.js & Plotly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">🗄️</div>
                  <span className="text-purple-200">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">⚡</div>
                  <span className="text-purple-200">Redis Caching</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">🏆 Impact</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">Response Time</span>
                  <span className="text-white font-bold">&lt; 200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">Data Points</span>
                  <span className="text-white font-bold">10M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">User Adoption</span>
                  <span className="text-white font-bold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">Decision Time</span>
                  <span className="text-white font-bold">-75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationProject;
