import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero ocupa 100vh */}
      <section className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6" style={{ minHeight: '100vh' }}>
        <h1 className="text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
          🔐 Generador de Contraseñas Seguras
        </h1>
        <p className="text-xl max-w-xl">
          Crea contraseñas únicas, seguras y personalizadas para proteger tu información en segundos.
        </p>
        <Link
          to="/generator"
          className="mt-12 bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Ir al Generador
        </Link>
      </section>
    </div>
  );
}
