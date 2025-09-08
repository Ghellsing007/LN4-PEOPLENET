import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import Sections from './Sections';
import Examples from './Examples';
import Quizzes from './Quizzes';
import Simulator from './Simulator';
import SearchBar from './SearchBar';

function AppContent({ searchQuery, setSearchQuery }) {
  const location = useLocation();

  // Efecto para el scroll suave
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header limpio y profesional */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-black/5 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 h-16 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">L4</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">Aprende Meta4 PeopleNet</span>
          </div>
          <div className="ml-auto w-full max-w-md relative">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
      </header>

      {/* Navegación */}
      <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <ul className="flex justify-center space-x-1 py-3">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/sections', label: 'Secciones' },
              { to: '/examples', label: 'Ejemplos' },
              { to: '/quizzes', label: 'Cuestionarios' },
              { to: '/simulator', label: 'Simulador' }
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    location.pathname === item.to
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sections" element={<Sections searchQuery={searchQuery} />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </main>

      {/* Footer limpio */}
      <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-white/10 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Guía Interactiva LN4
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                La herramienta definitiva para aprender el lenguaje LN4 de Meta4 PeopleNet
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">Enlaces Rápidos</h4>
              <ul className="space-y-1">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Inicio</Link></li>
                <li><Link to="/examples" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Ejemplos</Link></li>
                <li><Link to="/simulator" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Simulador</Link></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">Meta4 PeopleNet</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Aprende LN4 de forma<br/>
                <span className="text-indigo-600 dark:text-indigo-400">interactiva</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2024 Guía Interactiva LN4. Desarrollado con ❤️ para la comunidad Meta4
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppContent;