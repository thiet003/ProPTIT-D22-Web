import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { ThemeProvider } from 'react-ui'
import Settings from '@/pages/setting/Setting'
import Navbar from '@/components/navbar/Navbar'
import Home from '@/pages/home/Home'
function App() {
  return (
    // <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    // </ThemeProvider>
  )
}

export default App