
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MachineLearningProject = () => {
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
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            🧠 Machine Learning Model
          </h1>
          <p className="text-purple-200 text-xl">
            Predictive analytics with deep learning algorithms
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🔬 Research Project</h2>
            <p className="text-purple-200 mb-6">
              Developed a novel machine learning model for predicting student performance and identifying 
              at-risk students early in the academic semester. Published research paper with 94% accuracy rate.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-indigo-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-2">94% Accuracy</h3>
                <p className="text-purple-300 text-sm">Model prediction performance</p>
              </div>
              <div className="bg-indigo-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="text-white font-semibold mb-2">50K+ Students</h3>
                <p className="text-purple-300 text-sm">Training dataset size</p>
              </div>
              <div className="bg-indigo-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-2">Real-time</h3>
                <p className="text-purple-300 text-sm">Inference speed</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">🧪 Model Architecture</h2>
              <div className="space-y-4">
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Neural Network Layers</h3>
                  <div className="text-purple-300 text-sm">
                    Input → Dense(128) → Dropout(0.3) → Dense(64) → Output
                  </div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Feature Engineering</h3>
                  <div className="text-purple-300 text-sm">
                    Academic history, engagement metrics, demographic data
                  </div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Optimization</h3>
                  <div className="text-purple-300 text-sm">
                    Adam optimizer with learning rate scheduling
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
              <h2 className="text-2xl font-bold text-white mb-4">📊 Performance Metrics</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">Precision</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-purple-800 rounded-full">
                      <div className="w-[92%] h-full bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-white font-bold">92%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">Recall</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-purple-800 rounded-full">
                      <div className="w-[89%] h-full bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white font-bold">89%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">F1-Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-purple-800 rounded-full">
                      <div className="w-[90%] h-full bg-purple-400 rounded-full"></div>
                    </div>
                    <span className="text-white font-bold">90%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-300">AUC-ROC</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-purple-800 rounded-full">
                      <div className="w-[96%] h-full bg-yellow-400 rounded-full"></div>
                    </div>
                    <span className="text-white font-bold">96%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Technologies & Tools</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🐍</div>
                <div className="text-white font-semibold">Python</div>
                <div className="text-purple-300 text-xs">Core Language</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="text-white font-semibold">TensorFlow</div>
                <div className="text-purple-300 text-xs">Deep Learning</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-white font-semibold">Pandas</div>
                <div className="text-purple-300 text-xs">Data Analysis</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-white font-semibold">Scikit-learn</div>
                <div className="text-purple-300 text-xs">ML Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningProject;
