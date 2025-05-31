import React from 'react'
import Carousel from '../Components/Carousel'
import WhoWeAre from '../Components/WhoWeAre'
import QuickLinks from '../Components/QuickLinks'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className=''>
        <Carousel/>
        <WhoWeAre/>
        <QuickLinks/>
    </div>

  )
}

export default Home