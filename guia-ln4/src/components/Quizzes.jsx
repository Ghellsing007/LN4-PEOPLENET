import { useState } from 'react';
import { quizzes } from '../data/quizzes.js';

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(quizzes[0]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === selectedQuiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      alert(`Quiz completado! Puntaje: ${score + (selectedAnswer === selectedQuiz.questions[currentQuestion].correct ? 1 : 0)}/${selectedQuiz.questions.length}`);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
    }
  };

  const question = selectedQuiz.questions[currentQuestion];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Cuestionarios Interactivos
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Evalúa tus conocimientos sobre LN4 con cuestionarios dinámicos y retroalimentación inmediata.
        </p>
      </div>

      {/* Selector de quiz mejorado */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <span className="text-lg font-semibold text-gray-700 mr-4">Selecciona un cuestionario:</span>
          <div className="relative">
            <select
              onChange={(e) => {
                const quiz = quizzes.find(q => q.id === e.target.value);
                setSelectedQuiz(quiz);
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setScore(0);
              }}
              value={selectedQuiz.id}
              className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-6 py-3 pr-12 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {quizzes.map(quiz => (
                <option key={quiz.id} value={quiz.id}>
                  {quiz.title}
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

      {/* Quiz Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header del Quiz */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedQuiz.title}
                </h3>
                <p className="text-yellow-100">
                  Pregunta {currentQuestion + 1} de {selectedQuiz.questions.length}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{score}</div>
              <div className="text-sm text-yellow-100">Puntuación</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Contenido del Quiz */}
        <div className="p-8">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 text-white font-bold">
                {currentQuestion + 1}
              </span>
              Pregunta
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              {question.question}
            </p>
          </div>

          {/* Opciones */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedAnswer === index
                    ? showResult
                      ? index === question.correct
                        ? 'border-green-500 bg-green-50 shadow-lg'
                        : 'border-red-500 bg-red-50 shadow-lg'
                      : 'border-yellow-500 bg-yellow-50 shadow-lg'
                    : showResult && index === question.correct
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => handleAnswerSelect(index)}
                  className="mr-4 w-5 h-5 text-yellow-500 focus:ring-yellow-500"
                  disabled={showResult}
                />
                <span className={`text-lg ${
                  selectedAnswer === index && showResult
                    ? index === question.correct
                      ? 'text-green-700 font-semibold'
                      : 'text-red-700 font-semibold'
                    : showResult && index === question.correct
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-700'
                }`}>
                  {option}
                </span>
                {showResult && index === question.correct && (
                  <span className="ml-auto text-green-600 font-bold">✓ Correcto</span>
                )}
                {showResult && selectedAnswer === index && index !== question.correct && (
                  <span className="ml-auto text-red-600 font-bold">✗ Incorrecto</span>
                )}
              </label>
            ))}
          </div>

          {/* Botones de acción */}
          {!showResult ? (
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:shadow-none"
              >
                📤 Enviar Respuesta
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`text-2xl font-bold mb-4 ${
                selectedAnswer === question.correct ? 'text-green-600' : 'text-red-600'
              }`}>
                {selectedAnswer === question.correct ? '🎉 ¡Excelente!' : '💪 ¡Sigue practicando!'}
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {question.explanation}
              </p>
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {currentQuestion < selectedQuiz.questions.length - 1 ? '➡️ Siguiente Pregunta' : '🔄 Reiniciar Quiz'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;