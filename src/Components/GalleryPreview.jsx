import React from 'react';
import { Link } from 'react-router-dom'; // Use <a href="/gallery"> if not using React Router

const GalleryPreview = ({ images }) => {
  const previewImages = Array.isArray(images) ? images.slice(0, 6) : [];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">April Twins Moments</h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mb-6">
        {previewImages.map((img, index) => (
          <div key={index} className="w-full break-inside-avoid rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={img.url}
              alt={`Gallery ${index}`}
              className="w-full object-cover hover:scale-105 transition duration-300"
              style={{ borderRadius: '0.5rem' }}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Link
          to="/gallery"
          className="inline-block bg-primary text-bg px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
};

export default GalleryPreview;
