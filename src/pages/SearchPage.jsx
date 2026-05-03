import React, { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";


export default function SearchPage() {
  const [query, setQuery] = useState("nature");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (query) => {
    setLoading(true);
    try {
      const accessKey = import.meta.env.VITE_ACCESS_KEY;
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}&per_page=12`,
      );
      const data = await res.json();
      setImages(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // on page load, fetch images for default query state "nature"
  useEffect(() => {
    fetchImages(query);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault() // otherwise the page will reload with default query state
    const userInput = new FormData(event.target);
    // setQuery(userInput.get("search"));
    fetchImages(userInput.get("search"));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8 flex gap-2">
        <input
          name="search"
          type="text"
          placeholder="Search for photos..."
          className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Search
        </button>
      </form>

      {/* Results Gallrey */}
      {loading ? (
        <div className="text-center py-10 font-medium text-gray-500">
          Loading images...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
}
