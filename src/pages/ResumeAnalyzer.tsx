
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const ResumeAnalyzer = () => {
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
            <span>🤖</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Resume Analyzer
            </span>
          </h1>
          <p className="text-purple-200 text-lg md:text-xl">
            Smart Resume Evaluation Based on Your Criteria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-purple-200 mb-4">
              An application that uses an LLM to evaluate multiple resumes and generate a score based on 
              user input specifications such as: 
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Experience
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Education
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Technical Skills
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Certification
              </div>
              <div className="space-y-2">
                <a
                  href="https://github.com/osmanybg/resume-analyzer"
                  target="_blank"
                  rel="noreferrer"
                  className=" mt-9 text-purple-300 hover:text-white transition-colors"
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
                <div className="text-purple-200 text-sm">Google Gemini LLM</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-purple-200 text-sm">Gemini API Key</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-white font-semibold mb-2">Smart Learning</h3>
              <p className="text-purple-300 text-sm">Continuously improves through user interactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-white font-semibold mb-2">Personality</h3>
              <p className="text-purple-300 text-sm">Customizable personality and tone settings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Fast Response</h3>
              <p className="text-purple-300 text-sm">Optimized for real-time conversations</p>
            </div>
          </div>
        </div> */}

        {/* Demo Video */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
          <h2 className="text-2xl font-bold text-white mb-4">🎬 Demo Video</h2>

          <div className="rounded-2xl overflow-hidden border border-purple-300/20">
            <video
              className="w-full aspect-video" 
              controls
              preload="metadata"
            >
              <source src="videos/resume-analyzer-demo.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeAnalyzer;
