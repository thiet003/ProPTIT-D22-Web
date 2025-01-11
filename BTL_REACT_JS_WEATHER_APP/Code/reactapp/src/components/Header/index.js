import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import "./style.css"
export default function Header({ city, setCity }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(searchTerm);
    setSearchTerm('');
  };

  return (
    <header className={`header ${theme}`}>
      <h2>Weather App</h2>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav> */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a city..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}