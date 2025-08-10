export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 px-6 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full p-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 mb-10 text-center">
          Acerca del Generador de Contraseñas
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          <section className="p-6 bg-blue-800 rounded-lg shadow-md cursor-default
            transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-700">
            <h2 className="text-3xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              💡 Problema que resuelve
            </h2>
            <p className="text-blue-200 leading-relaxed">
              Muchas personas utilizan contraseñas débiles o repetidas, lo que aumenta el riesgo
              de que sus cuentas sean comprometidas. Nuestro generador crea contraseñas seguras
              para proteger mejor tu información personal.
            </p>
          </section>

          <section className="p-6 bg-purple-800 rounded-lg shadow-md cursor-default
            transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-purple-700">
            <h2 className="text-3xl font-bold mb-4 text-purple-300 flex items-center gap-2">
              ⚙ Cómo funciona
            </h2>
            <p className="text-purple-200 leading-relaxed">
              Puedes personalizar la longitud y los tipos de caracteres que quieres incluir:
              mayúsculas, minúsculas, números, símbolos y más. Con un solo clic, obtendrás una
              contraseña aleatoria que puedes copiar y usar inmediatamente.
            </p>
          </section>

          <section className="p-6 bg-green-800 rounded-lg shadow-md cursor-default
            transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-green-700">
            <h2 className="text-3xl font-bold mb-4 text-green-300 flex items-center gap-2">
              🚀 Ventajas
            </h2>
            <ul className="list-disc list-inside text-green-200 space-y-2 leading-relaxed">
              <li>Generación rápida y sencilla</li>
              <li>Personalización completa</li>
              <li>Copiado con un clic</li>
              <li>Indicador de seguridad integrado</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
