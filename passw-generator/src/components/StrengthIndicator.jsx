
export default function StrengthIndicator({ strength }) {
  // Define niveles de fuerza con valor y color
  const strengthLevels = {
    'Muy débil': { value: 20, color: 'bg-red-500' },
    'Débil': { value: 40, color: 'bg-orange-500' },
    'Media': { value: 60, color: 'bg-yellow-400' },
    'Fuerte': { value: 80, color: 'bg-green-500' },
    'Muy fuerte': { value: 100, color: 'bg-green-700' },
  };

  const level = strengthLevels[strength] || { value: 0, color: 'bg-gray-400' };

  return (
    <div className="mt-3 text-center">
      <p className="font-semibold text-gray-300 mb-2">
        Seguridad: <span className="text-blue-400">{strength}</span>
      </p>
      <div className="w-64 mx-auto h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`${level.color} h-full rounded-full transition-all duration-500`}
          style={{ width: `${level.value}%` }}
        ></div>
      </div>
    </div>
  );
}
