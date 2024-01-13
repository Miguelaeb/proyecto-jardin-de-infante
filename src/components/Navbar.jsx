import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldCollapseNavbar = scrollPosition > 0;

      setScrolled(shouldCollapseNavbar);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full p-4 shadow-md lg:left-1/2 lg:w-[56.25rem] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:transition-all lg:duration-300 ${
        isScrolled
          ? "w-full rounded-none bg-white lg:top-[40px] lg:w-screen"
          : "w-full bg-white lg:top-[55px] lg:rounded-xl lg:bg-gray-200 lg:bg-opacity-10 lg:px-4 lg:backdrop-blur-md xl:w-[80%] 2xl:w-[79.25rem]"
      }`}
    >
      <nav className="flex items-center justify-between lg:mx-auto lg:max-w-[54rem] 2xl:max-w-[79.25rem]">
        <NavLink to="/">
          <img className="w-24" src="/logo.svg" alt="logo" />
        </NavLink>

        <img
          className={`z-50 lg:hidden ${isMenuOpen ? "hidden" : ""}`}
          src="/Hamburger.svg"
          alt="Hamburger icon"
          onClick={toggleMenu}
        />

        <img
          className={`z-50 lg:hidden ${isMenuOpen ? "" : "hidden"}`}
          src="/CloseHamburguer.svg"
          alt="close nav button"
          onClick={toggleMenu}
        />

        <div
          className={`${
            isMenuOpen
              ? "translate-x-0 transition-transform lg:transition-none"
              : "translate-x-full transition-transform md:transition-none lg:translate-x-0"
          } absolute right-0 top-0 h-screen w-2/3 bg-[#7C858E] px-10 py-[80px] lg:relative lg:h-auto lg:w-auto lg:gap-4 lg:bg-transparent lg:px-0 lg:py-0`}
        >
          <ul className="space-y-10 lg:flex lg:space-x-4 lg:space-y-0">
            <li>
              <NavLink
                onClick={closeMenu}
                className="text-white lg:text-black lg:hover:text-blue-500"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className="text-white lg:text-black lg:hover:text-blue-500"
                to="/nosotros"
              >
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className="text-white lg:text-black lg:hover:text-blue-500"
                to="/servicios"
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className="text-white lg:text-black lg:hover:text-blue-500"
                to="/facilities"
              >
                Instalaciones
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className="text-white lg:text-black lg:hover:text-blue-500"
                to="/admission"
              >
                Admisión
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className="text-white lg:text-black lg:hover:text-blue-500"
                to="/contact"
              >
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className="text-white lg:text-black lg:hover:text-blue-500"
                to="/login"
              >
                Administrador
              </NavLink>
            </li>
          </ul>

          <div className=" mt-[224px] lg:hidden">
            <span className="leading-[24px] tracking-[0.08px] text-white">
              Síguenos
            </span>
            <div className="mt-4 flex gap-3 text-[#7C858E]">
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
                href="#"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
                href="#"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
                href="#"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
