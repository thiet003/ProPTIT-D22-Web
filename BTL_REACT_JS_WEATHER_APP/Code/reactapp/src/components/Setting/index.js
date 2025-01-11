import React from 'react';
import { useTheme } from '../../contexts/theme';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`settings ${theme}`}>
      <h2>Settings</h2>
      <div>
        <label>
          Theme:
          <select value={theme} onChange={toggleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
}