import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/about", label: "Acerca de" },
    { to: "/generator", label: "Generador" },
  ];

  return (
    <nav className="bg-gray-800 text-white py-4 shadow">
      <div className="w-full max-w-6xl mx-auto px-2 flex items-center justify-between relative">
        {/* Título */}
        <h1 className="text-lg font-bold">
          <Link to="/" className="hover:text-blue-200 transition">
            🔐 Clave Pro
          </Link>
        </h1>

        {/* Botón hamburguesa (solo en pantallas pequeñas) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`
            flex-col md:flex-row md:flex
            absolute md:static
            bg-gray-800 md:bg-transparent
            w-full md:w-auto
            left-0 top-full
            md:top-auto
            md:space-x-6
            transition-all duration-300
            ${isOpen ? "flex" : "hidden"}
            px-6 md:px-0
            py-4 md:py-0
            md:items-center
          `}
        >
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;

            return (
              <li key={to} className="mb-3 md:mb-0">
                <Link
                  to={to}
                  className={`
                    relative px-1 py-1
                    text-white
                    transition-colors duration-300
                    hover:text-blue-200
                    after:absolute after:-bottom-0 after:left-0 after:h-[2px] 
                    after:w-0 after:bg-blue-200 after:transition-all after:duration-300
                    hover:after:w-full
                    ${isActive ? "after:w-full" : ""}
                  `}
                  onClick={() => setIsOpen(false)} // Cierra el menú al seleccionar
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
