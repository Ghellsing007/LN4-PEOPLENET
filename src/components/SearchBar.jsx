@@ .. @@
   return (
-    <form onSubmit={handleSearch} className="relative">
+    <form onSubmit={handleSearch} className="relative group">
       <input
         type="text"
-        placeholder="Buscar en la guía…"
+        placeholder="Buscar funciones, ejemplos, conceptos..."
         value={query}
         onChange={(e) => setQuery(e.target.value)}
-        className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800 pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-200"
+        className="w-full rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm pl-12 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md group-hover:border-gray-300"
       />
-      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
+      <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
     </form>
   );