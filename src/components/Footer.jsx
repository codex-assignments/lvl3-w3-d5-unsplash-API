import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Unsplash Image Explorer Project by Ashley Flynn</p>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <p>
            Powered by
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-black ml-1"
            >
              Unsplash API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
