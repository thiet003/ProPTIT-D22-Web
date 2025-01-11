import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import Settings from './components/Setting';
import './App.css';
import { ThemeProvider } from './contexts/theme';

export default function App() {

  return (
    <ThemeProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}