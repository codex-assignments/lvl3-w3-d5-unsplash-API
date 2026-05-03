import React from 'react'

export default function ImageCard({ photo }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-600">
          Photo by
          <a
            href={photo.user.links.html}
            className="text-blue-500 hover:underline ml-1"
          >
            {photo.user.name}
          </a>
        </p>
      </div>
    </div>
  );
}
