import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import sectionsData from '../data/sections.json';

const Sections = ({ searchQuery }) => {
  const [sections, setSections] = useState(sectionsData.sections);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    const options = {
      keys: ['title', 'content', 'subsections'],
      threshold: 0.3,
    };
    setFuse(new Fuse(sectionsData.sections, options));
  }, []);

  useEffect(() => {
    if (searchQuery && fuse) {
      const results = fuse.search(searchQuery);
      setSections(results.map(result => result.item));
    } else {
      setSections(sectionsData.sections);
    }
  }, [searchQuery, fuse]);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Funciones LN4</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Explora las funciones del manual por temas, con navegación intuitiva.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map(section => (
          <section
            key={section.id}
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {section.title}
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
            {section.subsections.length > 0 && (
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {section.subsections.map((sub, index) => (
                  <li key={index}>
                    <a className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors">
                      <span className="text-sm opacity-70">•</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {sub}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {sections.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">No se encontraron resultados</h3>
          <p className="text-gray-500 dark:text-gray-500">Intenta con otros términos de búsqueda</p>
        </div>
      )}
    </div>
  );
};

export default Sections;