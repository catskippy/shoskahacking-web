import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProgramPage from './pages/ProgramPage';
import Header from './components/Header';
import programsData from './programsData';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home programs={programsData} />} />
        <Route path="/program/:id" element={<ProgramPage programs={programsData} />} />
      </Routes>
    </Router>
  );
};

export default App;
