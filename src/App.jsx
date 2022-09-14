import React from 'react'
import CarouselMain from './components/Carousel/Carousel/Carousel'
import Navbar from './components/Navbar/Navbar'
import { sections } from './utils'


const App = () => {
  return (
    <>
      <main>
        <Navbar/>
        <CarouselMain items={sections} />
      </main>
    </>
  )
}

export default App