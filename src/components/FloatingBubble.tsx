
// import React from 'react';
// import { usePhysics } from '../hooks/usePhysics';

// interface FloatingBubbleProps {
//   project: {
//     id: number;
//     name: string;
//     icon: string;
//     color: string;
//     x: number;
//     y: number;
//     animationDelay: number;
//     animationDuration: number;
//   };
//   onClick: () => void;
// }

// const FloatingBubble: React.FC<FloatingBubbleProps> = ({ project, onClick }) => {
//   const position = usePhysics(project.x, project.y, 0.3);

//   return (
//     <div
//       className="absolute cursor-pointer transform hover:scale-125 transition-all duration-300 z-10"
//       style={{
//         left: `${position.x}%`,
//         top: `${position.y}%`,
//         animationDelay: `${project.animationDelay}s`,
//         animationDuration: `${project.animationDuration}s`,
//       }}
//       onClick={onClick}
//     >
//       <div
//         className="w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-2xl animate-float hover:animate-pulse"
//         style={{
//           backgroundColor: project.color,
//           background: `linear-gradient(135deg, ${project.color}dd, ${project.color}aa)`,
//         }}
//       >
//         <div className="text-2xl md:text-3xl mb-1">{project.icon}</div>
//         <div className="text-white text-xs md:text-sm font-bold text-center px-1">
//           {project.name}
//         </div>
//       </div>
      
//       {/* Glowing effect */}
//       <div
//         className="absolute inset-0 rounded-full opacity-30 animate-ping"
//         style={{ backgroundColor: project.color }}
//       ></div>
//     </div>
//   );
// };

// export default FloatingBubble;

import React from 'react';
import { usePhysics } from '../hooks/usePhysics';

interface FloatingBubbleProps {
  project: {
    id: number;
    name: string;
    icon: string;
    color: string;
    x: number;
    y: number;
    animationDelay: number;
    animationDuration: number;
  };
  onClick: () => void;
}

const FloatingBubble = ({ project, onClick, resetTrigger }) => {
  const { x, y } = usePhysics(project.x, project.y, 0.5, resetTrigger);

  return (
    <div
      onClick={onClick}
      className="absolute cursor-pointer text-2xl md:text-3xl"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {project.icon}
    </div>
  );
};

export default FloatingBubble;


// import React from 'react';
// import { usePhysics } from '../hooks/usePhysics';

// interface FloatingBubbleProps {
//   project: {
//     id: number;
//     name: string;
//     icon: string;
//     color: string;
//     x: number;
//     y: number;
//     animationDelay: number;
//     animationDuration: number;
//   };
//   onClick: () => void;
// }

// const FloatingBubble: React.FC<FloatingBubbleProps> = ({ project, onClick }) => {
//   const position = usePhysics(project.x, project.y, 0.3);

//   return (
//     <div
//       className="absolute cursor-pointer transform hover:scale-125 transition-all duration-300 z-10"
//       style={{
//         left: `${position.x}%`,
//         top: `${position.y}%`,
//         animationDelay: `${project.animationDelay}s`,
//         animationDuration: `${project.animationDuration}s`,
//       }}
//       onClick={onClick}
//     >
//       <div
//         className="w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-2xl animate-float hover:animate-pulse"
//         style={{
//           backgroundColor: project.color,
//           background: `linear-gradient(135deg, ${project.color}dd, ${project.color}aa)`,
//         }}
//       >
//         <div className="text-2xl md:text-3xl mb-1">{project.icon}</div>
//         <div className="text-white text-xs md:text-sm font-bold text-center px-1">
//           {project.name}
//         </div>
//       </div>
      
//       {/* Glowing effect */}
//       <div
//         className="absolute inset-0 rounded-full opacity-30 animate-ping"
//         style={{ backgroundColor: project.color }}
//       ></div>
//     </div>
//   );
// };

// export default FloatingBubble;