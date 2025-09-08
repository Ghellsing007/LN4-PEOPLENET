const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600">
          <span className="text-2xl">🚀</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Aprende Meta4 PeopleNet
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            La herramienta definitiva para aprender el lenguaje LN4 de manera
            <span className="font-semibold text-indigo-600"> interactiva</span> con ejemplos ejecutables,
            cuestionarios dinámicos y un simulador práctico de nómina.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">10+</div>
            <div className="text-sm text-gray-500">Secciones</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-500">Ejemplos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">100+</div>
            <div className="text-sm text-gray-500">Funciones</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: '📚',
            title: 'Secciones Completas',
            description: 'Explora todas las secciones del manual LN4 con navegación intuitiva y búsqueda avanzada.',
          },
          {
            icon: '💻',
            title: 'Editor Interactivo',
            description: 'Ejecuta código LN4 en tiempo real, ve resultados instantáneos y aprende practicando.',
          },
          {
            icon: '📝',
            title: 'Cuestionarios Dinámicos',
            description: 'Evalúa tus conocimientos con quizzes interactivos y retroalimentación inmediata.',
          },
          {
            icon: '⚙️',
            title: 'Simulador de Nómina',
            description: 'Practica cálculos de nómina reales con datos dinámicos y código LN4 generado.',
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900">
                <span className="text-xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-indigo-50 dark:bg-slate-800 p-8 text-center border border-indigo-100 dark:border-white/10">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          ¿Listo para comenzar tu aprendizaje?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Explora las secciones, ejecuta ejemplos y domina el lenguaje LN4 paso a paso.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200">
            🚀 Comenzar Ahora
          </button>
          <button className="bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold border border-gray-200 dark:border-white/10 transition-all duration-200">
            📖 Ver Documentación
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;