import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          🔐 Generador de Contraseñas Seguras
        </h1>
        <p className="text-gray-700 mb-6">
          Esta aplicación te ayuda a crear contraseñas únicas, seguras y difíciles de adivinar,
          adaptadas a tus necesidades y preferencias.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">💡 Problema que resuelve</h2>
            <p className="text-gray-600">
              Muchas personas utilizan contraseñas débiles o repetidas, lo que aumenta el riesgo
              de que sus cuentas sean comprometidas. Nuestro generador crea contraseñas seguras
              para proteger mejor tu información personal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">⚙ Cómo funciona</h2>
            <p className="text-gray-600">
              Puedes personalizar la longitud y los tipos de caracteres que quieres incluir:
              mayúsculas, minúsculas, números, símbolos y más. Con un solo clic, obtendrás una
              contraseña aleatoria que puedes copiar y usar inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">🚀 Ventajas</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Generación rápida y sencilla</li>
              <li>Personalización completa</li>
              <li>Copiado con un clic</li>
              <li>Indicador de seguridad integrado</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/generator"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Ir al Generador
          </Link>
        </div>
      </div>
    </div>
  );
}
