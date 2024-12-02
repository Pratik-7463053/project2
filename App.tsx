import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import ChefRegistration from './components/ChefRegistration';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-300">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-chef" element={<ChefRegistration />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;