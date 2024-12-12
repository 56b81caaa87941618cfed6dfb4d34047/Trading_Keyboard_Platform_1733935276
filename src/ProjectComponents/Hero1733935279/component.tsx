import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Unlock Your Perfect Typing Experience</h1>
          <p className="text-xl mb-6">Buy, sell, and trade premium keyboards with enthusiasts worldwide. Find your dream keys or cash in on your collection.</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Trading_Keyboard_Platform_1733935276/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/72938403d82f437496ce1dc9d0f353a6.jpeg`} alt="Hero Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export { Hero as component }