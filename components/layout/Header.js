const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white w-full z-10">
      <h1 className="text-4xl">Borgar Flaen Stensrud</h1>
      <nav>
        <ul className="flex flex-row gap-4 text-2xl">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;