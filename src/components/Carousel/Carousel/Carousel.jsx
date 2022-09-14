import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Carousel.scss'
import ItemCarousel from '../Item.carousel/Item.carousel';
import Control from './Control.carousel';

const CarouselMain = ({items}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <>
      <Carousel
        pause="false"
        controls
        interval={null}
        activeIndex={activeIndex}
        onSelect={(selectedIndex, e) => {
          setActiveIndex(selectedIndex);
        }}
        indicators={false}
        prevIcon={<Control orientation="prev" />}
        nextIcon={<Control orientation="next" />}
      >
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <ItemCarousel {...item} itemSelected={activeIndex}/>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="page-number">
        <span className="page-number__current">0{activeIndex + 1}</span>
      </div>
    </>
  )
}

export default CarouselMain