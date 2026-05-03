import React from 'react'
import { Route, Routes, Link } from "react-router";

export default function Header() {

const navClass = ({ isActive }) =>
  `hover:text-blue-400 transition-colors ${isActive ? "text-blue-500 font-bold" : "text-white"}`;

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">
          Unsplash<span className="text-blue-500">Image</span>Explorer
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link title="Home" to="/" className={navClass}>
              Search
            </Link>
          </li>
          <li>
            <Link title="About" to="/about" className={navClass}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
