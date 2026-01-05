
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const NeuroPlay = () => {
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
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl flex justify-center gap-3">
            <span>🧠</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              NeuroPlay
            </span>
          </h1>
          <p className="text-purple-200 text-lg md:text-xl">
            An Interactive Brain-Computer Interface for EEG-Based Robot Control
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-purple-200 mb-4">
              A brain-computer interface system that enables users to control a robot car using EEG brainwaves.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full"></span> */}
                The BioAmp EXG Pill reads electrical brain activity from the user's scalp.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full"></span> */}
                EEG signals are processed in real time to detect mental states (focus, unfocus, and blinks) and head-tilt gestures.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full"></span> */}
                Processed predictions are wirelessly sent to a Raspberry Pi.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full"></span> */}
                The Raspberry Pi drives the PiCar X robot based on the interpreted mental commands.
              </div>
              <div className="space-y-2">                          
                <a
                  href="https://github.com/INIT-FIU-Hardware-Build-Fall2025/Neuroplay-BCI"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 text-purple-300 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🐍</div>
                <div className="text-purple-200 text-sm">Python</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-purple-200 text-sm">KNN</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">NumPy</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">Pandas</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">Scikit-learn</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">C++</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <div className="text-purple-200 text-sm">BioAmp EXG Pill</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <div className="text-purple-200 text-sm">PiCar X</div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
          <h2 className="text-2xl font-bold text-white mb-4">🎬 Demo Video</h2>

          <div className="rounded-2xl overflow-hidden border border-purple-300/20">
            <video
              className="w-full aspect-video" 
              controls
              preload="metadata"
            >
              <source src="videos/NeuroPlay.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NeuroPlay;
