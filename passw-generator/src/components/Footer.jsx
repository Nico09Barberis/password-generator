export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Generador de Contraseñas. Todos los derechos reservados.
        </p>
        <a
          href="https://tu-portafolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300 transition mt-2 sm:mt-0"
        >
          Visita mi portafolio
        </a>
      </div>
    </footer>
  );
}
