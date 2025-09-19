
import React from 'react';

const StudentAvatar = () => {
  return (
    <div className="relative">
      {/* Glowing ring effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-75 animate-spin-slow"></div>
      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-50 animate-spin-reverse"></div>
      
      {/* Main avatar container */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 p-4 shadow-2xl transform hover:scale-110 transition-all duration-300">
        {/* Avatar character */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-300 to-purple-500 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Face */}
          {/* <div className="text-6xl md:text-8xl animate-bounce"> */}
          <div className="text-6xl md:text-8xl">
            {/* 👩‍💻 */}
            <img src="photo.jpg" alt="Avatar" className="w-full h-full object-cover rounded-full" />
          </div>
          {/* Floating elements around avatar */}
          {/* <div className="absolute top-4 right-4 text-2xl animate-ping">💜</div>
          <div className="absolute top-8 left-4 text-xl animate-pulse">⭐</div>
          <div className="absolute bottom-4 right-6 text-lg animate-bounce">✨</div>
          <div className="absolute bottom-8 left-2 text-xl animate-pulse">🚀</div> */}
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute top-0 left-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-orbit-1"></div>
        <div className="absolute top-1/2 right-0 w-3 h-3 bg-pink-400 rounded-full animate-orbit-2"></div>
        <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-green-400 rounded-full animate-orbit-3"></div>
        <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-400 rounded-full animate-orbit-4"></div>
      </div>
    </div>
  );
};

export default StudentAvatar;
