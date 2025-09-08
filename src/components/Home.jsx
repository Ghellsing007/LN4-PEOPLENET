import { ArrowRight, BookOpen, Code, Brain, Calculator, Sparkles, Users, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section Mejorado */}
      <div className="relative overflow-hidden">
        {/* Fondo con gradiente y formas */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center space-y-8 py-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-3 shadow-lg">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700">Aprende LN4 de forma interactiva</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meta4 PeopleNet
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Guía Interactiva de LN4
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Domina el lenguaje LN4 con nuestra plataforma interactiva. Desde conceptos básicos hasta 
              simulaciones avanzadas de nómina, todo en un solo lugar.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              to="/sections"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-6 h-6" />
              Explorar Secciones
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/simulator"
              className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calculator className="w-6 h-6" />
              Probar Simulador
            </Link>
          </div>

          {/* Stats mejoradas */}
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-gray-500 font-medium">Secciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-500 font-medium">Ejemplos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">100+</div>
              <div className="text-sm text-gray-500 font-medium">Funciones</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Mejorado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: BookOpen,
            title: 'Secciones Completas',
            description: 'Explora todas las secciones del manual LN4 con navegación intuitiva, búsqueda avanzada y ejemplos prácticos.',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50',
            link: '/sections'
          },
          {
            icon: Code,
            title: 'Editor Interactivo',
            description: 'Ejecuta código LN4 en tiempo real con nuestro editor avanzado. Ve resultados instantáneos y aprende practicando.',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-50 to-emerald-50',
            link: '/examples'
          },
          {
            icon: Brain,
            title: 'Cuestionarios Dinámicos',
            description: 'Evalúa tus conocimientos con quizzes interactivos, retroalimentación inmediata y seguimiento de progreso.',
            color: 'from-purple-500 to-violet-500',
            bgColor: 'from-purple-50 to-violet-50',
            link: '/quizzes'
          },
          {
            icon: Calculator,
            title: 'Simulador de Nómina',
            description: 'Practica cálculos de nómina reales con datos dinámicos, código LN4 generado automáticamente.',
            color: 'from-orange-500 to-red-500',
            bgColor: 'from-orange-50 to-red-50',
            link: '/simulator'
          }
        ].map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-lg">
                {feature.description}
              </p>
              
              <div className="flex items-center gap-2 mt-6 text-gray-500 group-hover:text-gray-600">
                <span className="text-sm font-medium">Explorar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Testimonials/Benefits Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir nuestra guía?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diseñada por expertos para acelerar tu aprendizaje de LN4
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: 'Aprendizaje Rápido',
              description: 'Reduce el tiempo de aprendizaje con ejemplos prácticos y ejercicios interactivos.'
            },
            {
              icon: Users,
              title: 'Para Todos los Niveles',
              description: 'Desde principiantes hasta expertos, contenido adaptado a tu nivel de conocimiento.'
            },
            {
              icon: Trophy,
              title: 'Resultados Comprobados',
              description: 'Metodología probada que ha ayudado a cientos de desarrolladores.'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Final */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-center shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Listo para dominar LN4?
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de desarrolladores y lleva tus habilidades al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/sections"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-6 h-6" />
              Comenzar Ahora
            </Link>
            <Link 
              to="/examples"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 transition-all duration-300"
            >
              <Code className="w-6 h-6" />
              Ver Ejemplos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;