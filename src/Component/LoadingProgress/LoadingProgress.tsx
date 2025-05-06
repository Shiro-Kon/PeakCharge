import React from 'react';

interface LoadingScreenProps {
  fadeOut: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 bg-sage-green/80 backdrop-blur-md z-50 flex flex-col items-center justify-center  duration-1000 ${
        fadeOut ? 'opacity-0 ' : 'opacity-100'
      }`}
    >

        
        <span className="flex space-x-2 ">
        <span className='text-white font-sans text-lg sm:text-xl lg:text-4xl mr-1'></span>
        <span className="dot-animation bg-white w-1 h-1 rounded-full mt-7 "></span>
        <span className="dot-animation bg-white w-1 h-1 rounded-full mt-7 "></span>
        <span className="dot-animation bg-white w-1 h-1 rounded-full mt-7 "></span>
      </span>

      <style >{`
        .dot-animation {
          animation: wave 1.5s infinite ease-in-out;
        }
        .dot-animation:nth-child(1) {
          animation-delay: 0s;
        }
        .dot-animation:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot-animation:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes wave {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
