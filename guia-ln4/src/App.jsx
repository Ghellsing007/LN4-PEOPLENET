import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AppContent from './components/AppContent';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <AppContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Router>
  );
}

export default App;
