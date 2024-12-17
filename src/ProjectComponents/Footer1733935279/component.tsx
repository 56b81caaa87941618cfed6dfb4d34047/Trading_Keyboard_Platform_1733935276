import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
    <footer className="bg-gray-800 text-white p-8 w-full h-full"> {/* Full width and height */}
      <div className="container mx-auto h-full flex flex-col items-center justify-between">
        <div className="flex flex-wrap justify-between w-full mb-6">
          
          {/* FOOTER COPY */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">KeySwap</h3>
            <p className="text-gray-400">© 2023 KeySwap. Connecting keyboard enthusiasts one click at a time.</p>
          </div>

          {/* SOCIALS */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="mb-6">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Trading_Keyboard_Platform_1733935276/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/d1859a4351284593a8ef540d597b0159.jpeg`} alt="Footer Image" className="max-w-full h-auto" />
        </div>
      </div>
    </footer>
    </div>
  );
};

export { Footer as component };