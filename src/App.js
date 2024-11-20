import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home"
import GetStarted from './components/GetStarted'
import Collaborate from "./components/Collaborate"
import Marketplace from "./components/Marketplace"
import Analytics from "./components/Analytics"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-green-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">BitFarm</h1>
            <nav className="flex space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/get-started" className="hover:underline">Get Started</Link>
              <Link to="/collaborate" className="hover:underline">Collaborate</Link>
              <Link to="/marketplace" className="hover:underline">Marketplace</Link>
              <Link to="/analytics" className="hover:underline">Analytics</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>© 2024 BitFarm. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
