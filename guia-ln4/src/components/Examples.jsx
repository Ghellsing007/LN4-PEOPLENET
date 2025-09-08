import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { examples } from '../data/examples.js';

const Examples = () => {
  const [selectedExample, setSelectedExample] = useState(examples[0]);
  const [code, setCode] = useState(selectedExample.code);
  const [output, setOutput] = useState('');

  const handleExampleChange = (example) => {
    setSelectedExample(example);
    setCode(example.code);
    setOutput('');
  };

  const runCode = () => {
    // Simulación simple de LN4
    try {
      let result = simulateLN4(code);
      setOutput(result);
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  const simulateLN4 = (code) => {
    // Simulación básica - en un caso real, esto sería un parser completo
    let variables = {};
    let lines = code.split('\n');

    for (let line of lines) {
      line = line.trim();
      if (line.startsWith('//')) continue; // Comentarios

      if (line.includes('=')) {
        let [varName, value] = line.split('=').map(s => s.trim());
        if (value.startsWith('"') && value.endsWith('"')) {
          variables[varName] = value.slice(1, -1);
        } else if (!isNaN(value)) {
          variables[varName] = parseFloat(value);
        } else {
          variables[varName] = variables[value] || value;
        }
      }

      if (line.includes('MessageBox')) {
        let match = line.match(/MessageBox\("([^"]*)",\s*"([^"]*)"\)/);
        if (match) {
          return `${match[1]}: ${match[2]}`;
        }
      }
    }

    return 'Código ejecutado. Variables: ' + JSON.stringify(variables);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Ejemplos Interactivos de LN4
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ejecuta código LN4 en tiempo real, experimenta con diferentes ejemplos y aprende practicando.
        </p>
      </div>

      {/* Selector de ejemplos mejorado */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg font-semibold text-gray-700 mr-4">Selecciona un ejemplo:</span>
          <div className="relative">
            <select
              onChange={(e) => {
                const example = examples.find(ex => ex.id === e.target.value);
                handleExampleChange(example);
              }}
              value={selectedExample.id}
              className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-6 py-3 pr-12 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {examples.map(example => (
                <option key={example.id} value={example.id}>
                  {example.title}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor de Código */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Editor de Código LN4
            </h3>
            <button
              onClick={runCode}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <span className="mr-2">▶</span>
              Ejecutar
            </button>
          </div>
          <div className="p-6">
            <Editor
              height="400px"
              language="plaintext"
              value={code}
              onChange={setCode}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>

        {/* Resultado */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <span className="mr-3">📊</span>
              Resultado de Ejecución
            </h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm min-h-[400px] overflow-auto shadow-inner">
              {output ? (
                <div className="space-y-2">
                  <div className="flex items-center text-green-300 mb-4">
                    <span className="mr-2">✓</span>
                    Código ejecutado exitosamente
                  </div>
                  <pre className="whitespace-pre-wrap">{output}</pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <div className="text-4xl mb-4">💭</div>
                  <p className="text-center">
                    Haz clic en "Ejecutar" para ver el resultado<br/>
                    <span className="text-xs opacity-75">El código se simulará en LN4</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Descripción mejorada */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-6 shadow-lg flex-shrink-0">
            <span className="text-white text-xl">📖</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              {selectedExample.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {selectedExample.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;