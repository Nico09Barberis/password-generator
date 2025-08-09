import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Título */}
        <h1 className="text-lg font-bold">
          <Link to="/" className="hover:text-blue-200 transition">
            🔐 Clave Pro
          </Link>
        </h1>

        {/* Links */}
        <ul className="flex space-x-6">
          {[
            { to: "/about", label: "Acerca de" },
            { to: "/generator", label: "Generador" },
          ].map(({ to, label }) => {
            const isActive = location.pathname === to;

            return (
              <li key={to}>
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
