export const examples = [
  {
    id: "variables",
    title: "Variables y Tipos de Datos",
    code: `// Ejemplo de variables en LN4
A = 10
B = "Hola Mundo"
C = {2023-10-01}
D = A + 5

MessageBox("Resultado", "A = " + A + ", B = " + B)`,
    description: "Ejemplo básico de declaración de variables y tipos de datos en LN4."
  },
  {
    id: "if-then",
    title: "Estructura If-Then",
    code: `// Ejemplo de condicional
If A > 10 Then
  MessageBox("Aviso", "A es mayor que 10")
Else
  MessageBox("Aviso", "A es menor o igual a 10")
EndIf`,
    description: "Uso de la estructura condicional If-Then-Else."
  },
  {
    id: "for-loop",
    title: "Bucle For",
    code: `// Ejemplo de bucle For
Total = 0
For i = 1 To 5
  Total = Total + i
Next
MessageBox("Resultado", "La suma es: " + Total)`,
    description: "Ejemplo de bucle For para calcular una suma."
  },
  {
    id: "functions",
    title: "Llamadas a Funciones",
    code: `// Ejemplo de funciones LN4
Resultado = Max(10, 20, 30)
FechaActual = Today()
Mensaje = "El máximo es: " + Resultado

MessageBox("Resultado", Mensaje)`,
    description: "Uso de funciones integradas como Max() y Today()."
  }
];