
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Github } from 'lucide-react';

// const About = () => {
//   const navigate = useNavigate();

//   return (
    
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
//       <button
//         onClick={() => navigate('/')}
//         className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
//       >
//         <ArrowLeft size={20} />
//         Back to Kerene's World
//       </button>

//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-8 md:mb-12">
//           <h1 className="text-4xl md:text-5xl flex justify-center gap-3">
//             {/* <span>🤖</span> */}
//             {/* <img src="/public/images/signifi-logo.png" alt="Signifi Logo" className="w-10 h-10"/> */}
//             <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
//               SIGNIFI
//             </span>
//           </h1>
//           <p className="text-purple-200 text-lg md:text-xl">
//             An ML-Powered Glove for ASL Gesture Recognition
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
//             <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
//             <p className="text-purple-200 mb-4">
//               A wearable glove that recognizes American Sign Language (ASL) gestures using flex sensors, Arduino, and Machine Learning.
//             </p>
//             <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 text-purple-300">
//                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//                 Glove with flex sensors tracks finger movements.
//               </div>
//               <div className="flex items-center gap-2 text-purple-300">
//                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//                 Arduino reads the sensor data and sends it to a computer.
//               </div>
//               <div className="flex items-center gap-2 text-purple-300">
//                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//                 Machine Learning model processes the data and predicts the ASL gesture.
//               </div>
//               <div className="flex items-center gap-2 text-purple-300">
//                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//                 Recognized gesture is displayed on an LCD screen or mobile app.
//               </div>
//               <a
//                 href="https://github.com/INIT-FIU-Hardware-Build-Spring2024/ASL-Glove/tree/main"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-9 text-purple-300 hover:text-white transition-colors"
//               >
//                 <Github size={24} />
//               </a>
//             </div>
//           </div>

//           <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-300/20">
//             <h2 className="text-2xl font-bold text-white mb-4">Technologies Used</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-purple-500/20 rounded-lg p-3 text-center">
//                 <div className="text-2xl mb-2">🐍</div>
//                 <div className="text-purple-200 text-sm">Python</div>
//               </div>
//               <div className="bg-purple-500/20 rounded-lg p-3 text-center">
//                 <div className="text-2xl mb-2">🧠</div>
//                 <div className="text-purple-200 text-sm">Random Forest ML model</div>
//               </div>
//               <div className="bg-purple-500/20 rounded-lg p-3 text-center">
//                 <div className="text-2xl mb-2">💻</div>
//                 <div className="text-purple-200 text-sm">TypeScript</div>
//               </div>
//               <div className="bg-purple-500/20 rounded-lg p-3 text-center">
//                 <div className="text-2xl mb-2">💻</div>
//                 <div className="text-purple-200 text-sm">C++</div>
//               </div>
//               <div className="bg-purple-500/20 rounded-lg p-3 text-center">
//                 <div className="text-2xl mb-2">🛠️</div>
//                 <div className="text-purple-200 text-sm">FLEX SENSORS</div>
//               </div>
//               <div className="bg-purple-500/20 rounded-lg p-3 text-center">
//                 <div className="text-2xl mb-2">🛠️</div>
//                 <div className="text-purple-200 text-sm">MPU6050 ACCELEROMETER & GYROSCOPE</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Demo Video */}
//         <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
//           <h2 className="text-2xl font-bold text-white mb-4">🎬 Demo Video</h2>

//           <div className="rounded-2xl overflow-hidden border border-purple-300/20">
//             <video
//               className="w-full aspect-video" 
//               controls
//               preload="metadata"
//             >
//               <source src="/public/videos/signifi-demo.mp4" type="video/mp4" />
//             </video>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, FileText, Mail, MapPin } from "lucide-react";
import StudentAvatar from "@/components/StudentAvatar"; // adjust path if needed

const Badge = ({ children, color = "bg-teal-500/80" }) => (
  <span className={`inline-flex items-center gap-2 ${color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
    {children}
  </span>
);

const Pill = ({ children, color = "bg-purple-500/20" }) => (
  <span className={`inline-flex items-center gap-2 ${color} text-purple-50 px-3 py-1.5 rounded-xl border border-purple-300/20`}>
    {children}
  </span>
);

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Kerene's World
      </button>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-purple-300/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* <div className="shrink-0 w-28 h-28">
                <StudentAvatar />

              </div> */}
              
              <StudentAvatar />
              {/* <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Kerene Wright
                </h1>
                <p className="text-purple-200">
                  Software Engineer • AI/ML • Product Prototyper
                </p>
                <div className="flex items-center gap-2 mt-1 text-purple-300">
                  <MapPin size={16} />
                  <span>Miami, FL</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>Full-Stack</Badge>
                  <Badge color="bg-amber-500/80">Hackathons</Badge>
                  <Badge color="bg-emerald-600/80">AI/ML</Badge>
                </div>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
                {/* <StudentAvatar /> */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Kerene Wright
                </h1>
                <p className="text-purple-200">
                  Software Engineer • AI/ML
                </p>
                <div className="flex items-center gap-2 mt-1 text-purple-300">
                  <MapPin size={16} />
                  <span>Miami, FL</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge>Full-Stack</Badge>
                  <Badge color="bg-amber-500/80">Software Development</Badge>
                  <Badge color="bg-emerald-600/80">AI/ML</Badge>
                </div>
              </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:wright.kerenel@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Mail size={18} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/kerene-wright-985581182/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/KLAW4life"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="/public/files/Resume.pdf" // put your file in /public/files/Resume.pdf
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600/80 hover:bg-teal-600 text-white px-4 py-2"
              >
                <FileText size={18} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Two-column: Education / Clubs */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
            <div className="space-y-4">
              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Florida International University</h3>
                  <span className="text-purple-300 text-sm">2024 – Present</span>
                </div>
                <p className="text-purple-200 text-sm">
                  Masters of Science (MS) in Computer Science
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>GPA: 3.8+</Pill>
                </div>
              </div>

              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">The University of the West Indies, Mona Campus</h3>
                  <span className="text-purple-300 text-sm">2020 – 2023</span>
                </div>
                <p className="text-purple-200 text-sm">
                  B.S. in Computer Science (Honors)
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>GPA: 3.8</Pill>
                  <Pill color="bg-emerald-500/20">Dean’s List</Pill>
                </div>
              </div>

            </div>
          </div>

          {/* Clubs / Leadership */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-4">Clubs & Leadership</h2>
            <div className="space-y-4">
              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">INIT</h3>
                  <span className="text-purple-300 text-sm">Build Program Manager</span>
                </div>
                <p className="text-purple-200 text-sm">
                  Leading a large-scale student development initiative, coordinating the formation of 12+ high-impact project teams through strategic planning and resource management.
                </p>
              </div>
              <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">WiCS</h3>
                  <span className="text-purple-300 text-sm">Member</span>
                </div>
                <p className="text-purple-200 text-sm">
                  Active member of the Women in Computer Science (WiCS) club, promoting gender diversity in tech.
                </p>
              </div>
            
            </div>
          </div>
        </div>

        {/* Projects / Highlights */}
        {/* <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
          <h2 className="text-2xl font-bold text-white mb-4">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
              <h3 className="text-white font-semibold mb-1">Resume Analyzer</h3>
              <p className="text-purple-300 text-sm">LLM-based scoring with weighted criteria.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>React</Pill><Pill>Flask</Pill><Pill>TensorFlow</Pill>
              </div>
            </div>
            <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
              <h3 className="text-white font-semibold mb-1">GreenifyMe</h3>
              <p className="text-purple-300 text-sm">AI micro-climate analysis for urban heat.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Python</Pill><Pill>Streamlit</Pill><Pill>LSTM</Pill>
              </div>
            </div>
            <div className="rounded-2xl p-4 bg-purple-500/10 border border-purple-300/20">
              <h3 className="text-white font-semibold mb-1">Signifi</h3>
              <p className="text-purple-300 text-sm">Brand + full-stack prototype in progress.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Design</Pill><Pill>Frontend</Pill>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact / Footer card */}
        {/* <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-purple-300/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Let’s connect</h2>
              <p className="text-purple-200">Open to internships, research, and collabs.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:you@email.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Mail size={18} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/your-handle"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/YourUsername"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-purple-300/20"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="/files/Resume.pdf"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600/80 hover:bg-teal-600 text-white px-4 py-2"
              >
                <FileText size={18} /> Resume
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
