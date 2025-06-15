import React, { useEffect, useState } from 'react'
import Carousel from '../Components/Carousel'
import WhoWeAre from '../Components/WhoWeAre'
import QuickLinks from '../Components/QuickLinks'
import Footer from '../Components/Footer'
import TestimonialCarousel from '../Components/TestimonialCard'
import GalleryPreview from '../Components/GalleryPreview'
import axios from 'axios'

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://apriltwins-backend.onrender.com/images')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className='min-h-screen'>
        <Carousel/>
        <WhoWeAre/>
        <GalleryPreview images={images} />
        <TestimonialCarousel/>
        <QuickLinks/>
    </div>


  )
}

export default Home