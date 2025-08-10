export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center">
        <p className="text-sm mr-5">
          © {new Date().getFullYear()} Barberis Nicolas. Todos los derechos reservados.
        </p>
        <a
          href="https://web-portafolio-phi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-300  hover:underline transition mt-2 sm:mt-0"
        >
          Visita mi portafolio
        </a>
      </div>
    </footer>
  );
}
