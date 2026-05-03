import React from 'react'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-12">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-blue-500 pb-2 inline-block">
          About Unsplash Image Explorer
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          This application was developed as part of the{" "}
          <strong>Code X Academy Level 3, Week 3</strong> assignment. The goal
          of this project was to build a multi-page React application using{" "}
          <strong>Vite</strong> that integrates with a third-party API to fetch
          and display dynamic data.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Stack */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            The Tech Stack
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <span className="font-semibold text-gray-800">Framework:</span>{" "}
              React + Vite
            </li>
            <li>
              <span className="font-semibold text-gray-800">Routing:</span>{" "}
              React Router DOM
            </li>
            <li>
              <span className="font-semibold text-gray-800">Styling:</span>{" "}
              Tailwind CSS
            </li>
            <li>
              <span className="font-semibold text-gray-800">API:</span> Unsplash
              API
            </li>
            <li>
              <span className="font-semibold text-gray-800">Testing:</span>{" "}
              Postman
            </li>
          </ul>
        </div>

        {/* Development Process */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dynamic image fetching by query</li>
            <li>Environment variable protection (.env)</li>
            <li>Responsive gallery grid layout</li>
            <li>Proper uploader attribution/links</li>
            <li>Client-side routing</li>
          </ul>
        </div>
      </div>

      {/* Setup Instructions for Reviewers */}
      <section className="mt-12 bg-gray-900 text-gray-100 p-8 rounded-2xl shadow-inner">
        <h2 className="text-2xl font-bold mb-4">Local Setup</h2>
        <div className="space-y-4 font-mono text-sm">
          <div className="bg-black/30 p-4 rounded border border-gray-700">
            <p className="text-blue-400 mb-1"># Clone and install</p>
            <p>npm install</p>
            <p className="text-blue-400 mt-3 mb-1"># Run development server</p>
            <p>npm run dev</p>
          </div>
          <p className="text-gray-400 italic mt-4">
            * Note: Requires a .env file with a valid VITE_UNSPLASH_KEY to
            function.
          </p>
        </div>
      </section>
    </div>
  );
}
