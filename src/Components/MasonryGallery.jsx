import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // or your app's root div

export default function MasonryGallery() {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('https://apriltwins-backend.onrender.com/images'); // Update this with your actual route
        setImages(res.data);
        console.log(res.data) // assume res.data is an array of image URLs
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };
    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((url, i) => (
          <img
            key={i}
            src={url.url}
            alt={`Gallery ${i}`}
            className="w-full rounded cursor-pointer hover:opacity-90 transition"
            onClick={() => {
              setSelectedImage(url.url);
              setModalIsOpen(true);
            }}
          />
        ))}
      </Masonry>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Image Preview"
        style={{
          content: {
            background: '#000',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: '90vh',
          },
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
        }}
      >
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-4 right-4 bg-white px-3 py-1 rounded text-black"
        >
          Close
        </button>
        <img src={selectedImage} alt="Full view" className="max-h-[90vh] w-auto object-contain" />
      </Modal>
    </section>
  );
}
