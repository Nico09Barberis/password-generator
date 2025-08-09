export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">ℹ️ Acerca del Generador de Contraseñas</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">💡 Problema que resuelve</h2>
          <p className="text-gray-700">
            Muchas personas utilizan contraseñas débiles o repetidas, lo que aumenta el riesgo
            de que sus cuentas sean comprometidas. Nuestro generador crea contraseñas seguras
            para proteger mejor tu información personal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">⚙ Cómo funciona</h2>
          <p className="text-gray-700">
            Puedes personalizar la longitud y los tipos de caracteres que quieres incluir:
            mayúsculas, minúsculas, números, símbolos y más. Con un solo clic, obtendrás una
            contraseña aleatoria que puedes copiar y usar inmediatamente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🚀 Ventajas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Generación rápida y sencilla</li>
            <li>Personalización completa</li>
            <li>Copiado con un clic</li>
            <li>Indicador de seguridad integrado</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
