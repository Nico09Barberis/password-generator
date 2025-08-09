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
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Generador de Contraseñas Seguras</h1>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Longitud: {length}</label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(+e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2 mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
            className="mr-2"
          />
          Incluir mayúsculas (A-Z)
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
            className="mr-2"
          />
          Incluir minúsculas (a-z)
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          Incluir números (0-9)
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
            className="mr-2"
          />
          Incluir símbolos (!@#$%)
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={excludeSimilar}
            onChange={() => setExcludeSimilar(!excludeSimilar)}
            className="mr-2"
          />
          Excluir caracteres similares (i, l, 1, L, o, 0, O)
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Generar Contraseña
      </button>

      {password && (
        <div className="mt-6">
          <div className="flex items-center justify-between bg-gray-100 p-3 rounded select-all">
            <span className="font-mono break-all">{password}</span>
            <button
              onClick={copyToClipboard}
              className="ml-4 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              {copied ? "Copiado ✔" : "Copiar"}
            </button>
          </div>

          <p className="mt-2 font-semibold">
            Seguridad: <span>{getStrength()}</span>
          </p>
        </div>
      )}
    </div>
  );
}
