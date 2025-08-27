
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MobileAppProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Kerene's World
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
            📱 Mobile App
          </h1>
          <p className="text-purple-200 text-xl">
            Cross-platform mobile application with native performance
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 App Overview</h2>
            <p className="text-purple-200 mb-6">
              Developed a feature-rich mobile application that helps students manage their academic life. 
              Includes task management, study scheduling, grade tracking, and social features.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">📋 Key Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Smart Study Scheduler
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Grade Calculator & Tracker
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Group Study Coordination
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Deadline Notifications
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">📊 User Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">5K+</div>
                    <div className="text-purple-200 text-sm">Downloads</div>
                  </div>
                  <div className="bg-yellow-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">4.8⭐</div>
                    <div className="text-purple-200 text-sm">App Rating</div>
                  </div>
                  <div className="bg-yellow-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">85%</div>
                    <div className="text-purple-200 text-sm">Retention</div>
                  </div>
                  <div className="bg-yellow-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">12K</div>
                    <div className="text-purple-200 text-sm">Sessions/day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">🛠️ Development Stack</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">⚛️</div>
                  <div>
                    <div className="text-white font-semibold">React Native</div>
                    <div className="text-purple-300 text-sm">Cross-platform framework</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">🗄️</div>
                  <div>
                    <div className="text-white font-semibold">Firebase</div>
                    <div className="text-purple-300 text-sm">Backend & Authentication</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">💜</div>
                  <div>
                    <div className="text-white font-semibold">Redux Toolkit</div>
                    <div className="text-purple-300 text-sm">State management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">🎯 Challenges Solved</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <div className="text-white font-semibold">Performance Optimization</div>
                    <div className="text-purple-300 text-sm">Achieved 60fps on older devices</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <div className="text-white font-semibold">Offline Functionality</div>
                    <div className="text-purple-300 text-sm">Full app works without internet</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <div className="text-white font-semibold">Push Notifications</div>
                    <div className="text-purple-300 text-sm">Smart study reminders system</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppProject;
