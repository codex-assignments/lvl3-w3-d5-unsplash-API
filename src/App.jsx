import { useState } from 'react'
import { Route, Routes, Link, Router } from "react-router";

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";



function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App
