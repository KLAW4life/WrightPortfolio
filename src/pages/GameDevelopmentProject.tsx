
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GameDevelopmentProject = () => {
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
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-4">
            🎮 Game Development
          </h1>
          <p className="text-purple-200 text-xl">
            Interactive 2D platformer with procedural generation
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Game Overview</h2>
            <p className="text-purple-200 mb-6">
              Created "Code Quest" - an educational platformer where players solve programming challenges 
              to progress through levels. Features procedural level generation, boss battles, and a 
              comprehensive skill tree system.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🕹️ Game Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    Procedural Level Generation
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    Real-time Code Compilation
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    Multiplayer Co-op Mode
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    Achievement System
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🏆 Game Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">15K+</div>
                    <div className="text-purple-200 text-sm">Players</div>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-purple-200 text-sm">Levels</div>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">4.7⭐</div>
                    <div className="text-purple-200 text-sm">Rating</div>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">2.5M</div>
                    <div className="text-purple-200 text-sm">Code Runs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">🛠️ Technology Stack</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">🎮</div>
                  <div>
                    <div className="text-white font-semibold">Unity 2022.3</div>
                    <div className="text-purple-300 text-sm">Game engine & framework</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">💻</div>
                  <div>
                    <div className="text-white font-semibold">C# Programming</div>
                    <div className="text-purple-300 text-sm">Game logic & systems</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">🎨</div>
                  <div>
                    <div className="text-white font-semibold">Pixel Art Assets</div>
                    <div className="text-purple-300 text-sm">Custom sprite work</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">🔊</div>
                  <div>
                    <div className="text-white font-semibold">FMOD Audio</div>
                    <div className="text-purple-300 text-sm">Dynamic sound system</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">🧩 Technical Achievements</h2>
              <div className="space-y-4">
                <div className="bg-pink-500/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Procedural Generation</h3>
                  <p className="text-purple-300 text-sm">
                    Infinite level generation using Perlin noise and rule-based systems
                  </p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Code Execution Engine</h3>
                  <p className="text-purple-300 text-sm">
                    Safe sandboxed environment for running user code in real-time
                  </p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Networking System</h3>
                  <p className="text-purple-300 text-sm">
                    Custom multiplayer solution with lag compensation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎓 Educational Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-white font-semibold mb-2">Learning Outcomes</h3>
                <p className="text-purple-300 text-sm">85% improvement in programming concept retention</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-white font-semibold mb-2">Classroom Adoption</h3>
                <p className="text-purple-300 text-sm">Used in 12+ universities worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-white font-semibold mb-2">Awards</h3>
                <p className="text-purple-300 text-sm">Best Educational Game - IndieGameCon 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDevelopmentProject;
