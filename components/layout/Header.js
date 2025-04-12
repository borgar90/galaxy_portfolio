import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex justify-around items-center p-4 bg-gray-800 text-white w-full z-10 h-[10vh] relative">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Borgar Flaen Stensrud Logo"
          width={44}
          height={44}
          className="rounded-full shadow-lg"
          priority
        />
        <h1 className="text-2xl md:text-4xl font-bold">Borgar Flaen Stensrud</h1>
      </div>

    

      {/* Nav – Desktop */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-6 text-2xl">
          <li ><a
  href="/cv"
  className="px-6 py-2 border border-cyan-400 text-cyan-300 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_10px_rgba(0,255,255,0.7)]"
>
  Min CV
</a>
</li>
        </ul>
      </nav>

    
    </header>
  );
};

export default Header;
