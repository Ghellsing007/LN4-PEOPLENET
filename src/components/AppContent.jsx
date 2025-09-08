import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './Home';
import Sections from './Sections';
import Examples from './Examples';
import Simulator from './Simulator';
import SearchBar from './SearchBar';

function AppContent({ searchQuery, setSearchQuery }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para el scroll suave
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Header limpio y profesional */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="inline-flex h-12 w-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">L4</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Meta4 PeopleNet
              </span>
              <div className="text-sm text-gray-500 font-medium">Guía Interactiva LN4</div>
            </div>
          </Link>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </header>

      {/* Navegación */}
      <nav className={`bg-white/90 backdrop-blur-sm border-b border-gray-200/50 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2 py-4">
            {[
              { to: '/', label: 'Inicio' },
              { to: '/sections', label: 'Secciones' },
              { to: '/examples', label: 'Ejemplos' },
              { to: '/simulator', label: 'Simulador' }
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 w-full md:w-auto justify-center md:justify-start ${
                    location.pathname === item.to
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:shadow-md'
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
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sections" element={<Sections searchQuery={searchQuery} />} />
          <Route path="/examples" element={<Examples searchQuery={searchQuery} />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </main>

      {/* Footer limpio */}
      <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="inline-flex h-10 w-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">L4</span>
                </div>
                <span className="text-xl font-bold">Meta4 PeopleNet</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Guía Interactiva LN4
              </h3>
              <p className="text-gray-300 leading-relaxed">
                La herramienta definitiva para aprender el lenguaje LN4 de Meta4 PeopleNet
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors hover:underline">Inicio</Link></li>
                <li><Link to="/examples" className="text-gray-300 hover:text-white transition-colors hover:underline">Ejemplos</Link></li>
                <li><Link to="/simulator" className="text-gray-300 hover:text-white transition-colors hover:underline">Simulador</Link></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Aprende LN4</h4>
              <p className="text-gray-300 leading-relaxed">
                Aprende LN4 de forma<br/>
                <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-semibold">interactiva y práctica</span>
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 Guía Interactiva LN4. Desarrollado con ❤️ para la comunidad Meta4
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppContent;