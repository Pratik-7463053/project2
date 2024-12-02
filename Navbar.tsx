import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass-effect sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">HomeFeast</span>
            </Link>
          </div>

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-center px-2 lg:ml-6">
            <div className="max-w-lg w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Search for food in your area..."
                  type="search"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="p-2 text-gray-300 hover:text-primary transition-colors">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="p-2 text-gray-300 hover:text-primary transition-colors">
              <User className="h-6 w-6" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="p-2">
              <input
                className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400"
                placeholder="Search for food..."
                type="search"
              />
            </div>
            <Link
              to="/cart"
              className="flex items-center px-3 py-2 text-gray-300 hover:text-primary"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart
            </Link>
            <Link
              to="/profile"
              className="flex items-center px-3 py-2 text-gray-300 hover:text-primary"
            >
              <User className="h-5 w-5 mr-2" />
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}