
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const Pluto = () => {
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
            <span>🌑</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Pluto
            </span>
          </h1>
          <p className="text-purple-200 text-lg md:text-xl">
            "Forgetting is human. Remembering is Pluto."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-purple-200 mb-4">
              Pluto is an AI-powered memory companion designed to support individuals experiencing memory loss, such as those with Alzheimer’s disease. 
              The application allows families and caregivers to upload personal photos, stories, and experiences, which are then used to build a dynamic “Memory Profile” for each user. 
            </p>
            <div className="space-y-2">
              <a
                href="https://github.com/PaolaArraut/PlutoHacks2025"
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
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-purple-200 text-sm">BERT</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-purple-200 text-sm">Gemini API Key</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-purple-200 text-sm">Flask</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🍃</div>
                <div className="text-purple-200 text-sm">MongoDB</div>
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
              <source src="videos/Pluto.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Pluto;
