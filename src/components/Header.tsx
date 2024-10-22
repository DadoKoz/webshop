import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-between">
        <ul className="flex space-x-4">
          <li><a href="/login" className="hover:text-gray-300">Login</a></li>
          <li><a href="/register" className="hover:text-gray-300">Register</a></li>
          <li><a href="/products" className="hover:text-gray-300">Products</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;