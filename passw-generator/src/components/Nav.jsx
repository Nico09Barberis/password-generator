import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Título */}
        <h1 className="text-lg font-bold">
          <Link to="/">🔐 Generador de Contraseñas</Link>
        </h1>

        {/* Links */}
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/generator"
              className="hover:text-blue-200 transition"
            >
              Generador
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
