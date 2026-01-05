
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const Morganizer = () => {
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
            <span>💼</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Morganizer
            </span>
          </h1>
          <p className="text-purple-200 text-lg md:text-xl">
            “Every tender, every task — intelligently organized, human approved.”
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-purple-200 mb-4">
              An AI-driven assistant designed to streamline legal operations by parsing unstructured client communications, extracting actionable tasks, and intelligently routing them to specialized AI agents for processing.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full"></span> */}
                Processes incoming client messages—emails, texts, and transcripts—and normalizes them into structured data.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full"></span> */}
                Detects actionable tasks such as scheduling, drafting responses, or organizing evidence using AI classification.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                {/* <span className="w-2 h-2 bg-green-400 rounded-full"></span> */}
                Maintains a human-in-the-loop review system for oversight and approval before execution.
              </div>
            </div>
            <div className="space-y-2">
              <a
                href="https://github.com/LukaVarazi/KnightHacks-2025"
                target="_blank"
                rel="noreferrer"
                className=" mt-9 text-purple-300 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
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
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-purple-200 text-sm">Google’s Agent-to-Agent (A2A)</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-purple-200 text-sm">Google’s Generative AI API</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-purple-200 text-sm">Flask</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">React</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">Tailwind</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">Bun</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">Vite</div>
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
              <source src="videos/Morganizer.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Morganizer;
