
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const Signifi = () => {
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
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl flex justify-center gap-3">
            {/* <span>🤖</span> */}
            {/* <img src="/public/images/signifi-logo.png" alt="Signifi Logo" className="w-10 h-10"/> */}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              SIGNIFI
            </span>
          </h1>
          <p className="text-purple-200 text-lg md:text-xl">
            An ML-Powered Glove for ASL Gesture Recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-purple-200 mb-4">
              A wearable glove that recognizes American Sign Language (ASL) gestures using flex sensors, Arduino, and Machine Learning.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Glove with flex sensors tracks finger movements.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Arduino reads the sensor data and sends it to a computer.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Machine Learning model processes the data and predicts the ASL gesture.
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Recognized gesture is displayed on an LCD screen or mobile app.
              </div>
              <a
                href="https://github.com/INIT-FIU-Hardware-Build-Spring2024/ASL-Glove/tree/main"
                target="_blank"
                rel="noreferrer"
                className="mt-9 text-purple-300 hover:text-white transition-colors"
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
                <div className="text-purple-200 text-sm">Random Forest ML model</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">TypeScript</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-purple-200 text-sm">C++</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <div className="text-purple-200 text-sm">FLEX SENSORS</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <div className="text-purple-200 text-sm">MPU6050 ACCELEROMETER & GYROSCOPE</div>
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
              <source src="/public/videos/signifi-demo.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Signifi;
