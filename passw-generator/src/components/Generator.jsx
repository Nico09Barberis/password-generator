import React, { useState } from "react";

const SIMILAR_CHARS = "il1Lo0O";

const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

function getRandomChar(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += SYMBOLS;

    if (excludeSimilar) {
      charset = charset
        .split("")
        .filter((c) => !SIMILAR_CHARS.includes(c))
        .join("");
    }

    if (!charset.length) {
      setPassword("");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += getRandomChar(charset);
    }
    setPassword(pass);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Indicador simple de seguridad (muy básico)
  const getStrength = () => {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (includeUpper) score++;
    if (includeLower) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;

    switch (score) {
      case 6:
        return "Muy fuerte";
      case 4:
      case 5:
        return "Fuerte";
      case 2:
      case 3:
        return "Media";
      default:
        return "Débil";
    }
  };

  return (
    <div
      className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg
                  transform transition-transform duration-300 hover:scale-[1.02]"
    >
      <h1
        className="text-3xl font-extrabold mb-6 text-center text-blue-600
                  drop-shadow-md"
      >
        Generador de Contraseñas Seguras
      </h1>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">
          Longitud: <span className="text-blue-600">{length}</span>
        </label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(+e.target.value)}
          className="w-full h-2 rounded-lg appearance-none bg-gray-300
                  cursor-pointer transition-colors hover:bg-blue-300"
        />
      </div>

      <div className="space-y-3 mb-6">
        {[
          {
            label: "Incluir mayúsculas (A-Z)",
            checked: includeUpper,
            onChange: () => setIncludeUpper(!includeUpper),
          },
          {
            label: "Incluir minúsculas (a-z)",
            checked: includeLower,
            onChange: () => setIncludeLower(!includeLower),
          },
          {
            label: "Incluir números (0-9)",
            checked: includeNumbers,
            onChange: () => setIncludeNumbers(!includeNumbers),
          },
          {
            label: "Incluir símbolos (!@#$%)",
            checked: includeSymbols,
            onChange: () => setIncludeSymbols(!includeSymbols),
          },
          {
            label: "Excluir caracteres similares (i, l, 1, L, o, 0, O)",
            checked: excludeSimilar,
            onChange: () => setExcludeSimilar(!excludeSimilar),
          },
        ].map(({ label, checked, onChange }) => (
          <label
            key={label}
            className="flex items-center cursor-pointer select-none
                    text-gray-700 hover:text-blue-600 transition-colors"
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="mr-3 w-5 h-5 accent-blue-600 transition-transform
                      hover:scale-125"
            />
            {label}
          </label>
        ))}
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                shadow-md hover:bg-blue-700 active:scale-95 transition-transform"
        type="button"
      >
        Generar Contraseña
      </button>

      {password && (
        <div className="mt-8">
          <div
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg
                        font-mono text-gray-800 select-all
                        shadow-inner ring-1 ring-gray-300"
          >
            <span className="break-all">{password}</span>
            <button
              onClick={copyToClipboard}
              className={`ml-4 px-4 py-2 rounded-lg font-semibold
                        transition-colors transform
                        ${
                          copied
                            ? "bg-green-500 text-white"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }
                        hover:scale-110 active:scale-95`}
              type="button"
            >
              {copied ? "Copiado ✔" : "Copiar"}
            </button>
          </div>

          <p className="mt-3 text-center font-semibold text-gray-700">
            Seguridad: <span className="text-blue-600">{getStrength()}</span>
          </p>
        </div>
      )}
    </div>
  );
}
