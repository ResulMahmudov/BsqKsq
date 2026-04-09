import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-200 p-2.5 bg-white relative">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo - Həmişə görünür */}
          <Link to="/">
            <h1 className="text-[32px] text-[#3b82f5] font-bold">AsanSınaq</h1>
          </Link>

          {/* Hamburger Düyməsi - Mobildə görünür, md ekranlarda gizlənir */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#3b82f5] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Menyu Naviqasiyası */}
          <nav
            className={`
            ${isOpen ? 'flex' : 'hidden'} 
            flex-col md:flex md:flex-row items-center gap-6
            absolute md:static top-full left-0 w-full md:w-auto 
            bg-white border-b md:border-none border-gray-100 p-5 md:p-0
            z-50 transition-all duration-300
          `}
          >
            <ul
              onClick={() => setIsOpen(false)}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto"
            >
              <li>
                <a href="#" className="hover:text-[#3b82f5] transition">
                  Kalkulyator
                </a>
              </li>
              <li>
                <Link
                  to="/annual"
                  className="hover:text-[#3b82f5] transition"
                >
                  Yarimillik
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#3b82f5] transition">
                  Haqqimizda
                </Link>
              </li>
            </ul>

            {/* Giriş düyməsi menyunun daxilində */}
            <button className="bg-[#3b82f5] text-white px-5 py-2 rounded-xl text-sm font-bold ">
              Giriş
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
