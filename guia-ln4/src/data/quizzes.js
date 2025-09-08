export const quizzes = [
  {
    id: "variables-quiz",
    title: "Quiz sobre Variables",
    questions: [
      {
        question: "¿Cuál es la sintaxis correcta para declarar una variable en LN4?",
        options: ["var A = 10", "A = 10", "let A = 10", "const A = 10"],
        correct: 1,
        explanation: "En LN4, las variables no necesitan declaración explícita, basta con asignarles un valor."
      },
      {
        question: "¿Qué tipos de datos soporta LN4?",
        options: ["Solo números", "Números, cadenas y fechas", "Solo cadenas", "Solo fechas"],
        correct: 1,
        explanation: "LN4 soporta números, cadenas de caracteres y fechas."
      }
    ]
  },
  {
    id: "control-structures-quiz",
    title: "Quiz sobre Estructuras de Control",
    questions: [
      {
        question: "¿Cuál es la sintaxis correcta del bucle For en LN4?",
        options: ["for i in range(5):", "For i = 1 To 5", "for (let i = 0; i < 5; i++)", "foreach i in 1..5"],
        correct: 1,
        explanation: "La sintaxis correcta es 'For variable = inicio To fin'."
      },
      {
        question: "¿Cómo se termina una estructura If en LN4?",
        options: ["end", "endif", "EndIf", "}"],
        correct: 2,
        explanation: "Las estructuras If se terminan con 'EndIf'."
      }
    ]
  }
];