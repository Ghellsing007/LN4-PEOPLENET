import { useState } from 'react';

const Simulator = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    baseSalary: 0,
    hoursWorked: 0,
    overtimeHours: 0,
    deductions: 0
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: name === 'name' ? value : parseFloat(value) || 0
    });
  };

  const calculatePayroll = () => {
    // Simulación de cálculo de nómina usando lógica LN4 simplificada
    const { baseSalary, hoursWorked, overtimeHours, deductions } = employeeData;

    // Cálculo básico (simulando LN4)
    const regularPay = (baseSalary / 160) * hoursWorked; // Asumiendo 160 horas mensuales
    const overtimePay = ((baseSalary / 160) * 1.5) * overtimeHours;
    const grossPay = regularPay + overtimePay;
    const netPay = grossPay - deductions;

    // Simular código LN4
    const ln4Code = `
BaseSalary = ${baseSalary}
HoursWorked = ${hoursWorked}
OvertimeHours = ${overtimeHours}
Deductions = ${deductions}

RegularPay = (BaseSalary / 160) * HoursWorked
OvertimePay = ((BaseSalary / 160) * 1.5) * OvertimeHours
GrossPay = RegularPay + OvertimePay
NetPay = GrossPay - Deductions

MessageBox("Resultado Nómina", "Salario Neto: " + NetPay)
    `;

    setResult({
      regularPay: regularPay.toFixed(2),
      overtimePay: overtimePay.toFixed(2),
      grossPay: grossPay.toFixed(2),
      netPay: netPay.toFixed(2),
      ln4Code
    });
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Simulador de Nómina LN4
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Calcula nóminas de manera realista usando código LN4. Ingresa los datos del empleado y ve los resultados.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario de Datos */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="mr-3">👤</span>
              Datos del Empleado
            </h3>
            <p className="text-purple-100 mt-2">
              Ingresa la información necesaria para el cálculo
            </p>
          </div>

          <form className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Nombre del Empleado
              </label>
              <input
                type="text"
                name="name"
                value={employeeData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Salario Base Mensual
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="baseSalary"
                    value={employeeData.baseSalary}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                    placeholder="50000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Horas Trabajadas
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="hoursWorked"
                    value={employeeData.hoursWorked}
                    onChange={handleInputChange}
                    className="w-full pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder="160"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">hrs</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Horas Extras
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="overtimeHours"
                    value={employeeData.overtimeHours}
                    onChange={handleInputChange}
                    className="w-full pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                    placeholder="10"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">hrs</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Deducciones
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="deductions"
                    value={employeeData.deductions}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                    placeholder="5000"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={calculatePayroll}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <span className="mr-3">🧮</span>
              Calcular Nómina
            </button>
          </form>
        </div>

        {/* Resultados */}
        {result && (
          <div className="space-y-6">
            {/* Resumen de Resultados */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <span className="mr-3">📊</span>
                  Resultado del Cálculo
                </h3>
                <p className="text-green-100 mt-2">
                  Nómina calculada para {employeeData.name || 'el empleado'}
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">${result.regularPay}</div>
                    <div className="text-sm text-blue-700">Pago Regular</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-600">${result.overtimePay}</div>
                    <div className="text-sm text-yellow-700">Pago Horas Extras</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">${result.grossPay}</div>
                    <div className="text-sm text-purple-700">Salario Bruto</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-300 shadow-lg">
                    <div className="text-3xl font-bold text-green-700">${result.netPay}</div>
                    <div className="text-sm text-green-600 font-semibold">Salario Neto</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Código LN4 Generado */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-6">
                <h4 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-3">💻</span>
                  Código LN4 Generado
                </h4>
                <p className="text-gray-300 mt-2 text-sm">
                  Este es el código LN4 que se ejecutaría para calcular esta nómina
                </p>
              </div>

              <div className="p-6">
                <pre className="bg-gray-900 text-green-400 p-6 rounded-xl text-sm overflow-auto font-mono leading-relaxed shadow-inner">
                  {result.ln4Code}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Estado inicial */}
        {!result && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-200 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-4xl text-white">🧮</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¡Calcula tu primera nómina!
            </h3>
            <p className="text-gray-600 text-lg max-w-md">
              Ingresa los datos del empleado en el formulario y haz clic en "Calcular Nómina" para ver los resultados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulator;