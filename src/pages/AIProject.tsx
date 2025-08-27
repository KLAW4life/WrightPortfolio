
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AIProject = () => {
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
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
            🤖 AI Chat Bot
          </h1>
          <p className="text-purple-200 text-xl">
            Intelligent conversational AI built with modern ML techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Project Overview</h2>
            <p className="text-purple-200 mb-4">
              Developed a sophisticated chatbot using natural language processing and machine learning algorithms. 
              The bot can understand context, maintain conversation flow, and provide intelligent responses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Natural Language Understanding
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Context-Aware Responses
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Multi-language Support
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">⚡ Technologies Used</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🐍</div>
                <div className="text-purple-200 text-sm">Python</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-purple-200 text-sm">TensorFlow</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💬</div>
                <div className="text-purple-200 text-sm">NLTK</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-purple-200 text-sm">Flask API</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
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
        </div>
      </div>
    </div>
  );
};

export default AIProject;
