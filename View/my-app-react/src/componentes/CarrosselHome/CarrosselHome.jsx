import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


import img1 from'../../assets/images/carrossel1.png';
import img2 from '../../assets/images/carrossel2.png';
import img3 from '../../assets/images/carrossel3.png';
import '../CarrosselHome/CarrosselHome.module.css'



const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'PubBlinders',
    info:'Conheça nosso bar',
    src: img1
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Produtos',
    info:'Veja nossos produtos',
    src: img2,
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Eventos',
    info:'Acompanhe nossa programação',
    src: img3
  },
];

function CarrosselHome(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
      <img src={item.src} alt={item.altText} />
       <CarouselCaption
          className="text-danger"
          captionHeader={item.caption}
          captionText={item.info}

        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
             

            }
            .custom-tag img{
              width: 100%;
              height: 550px;
              object-fit: cover;
            }
            .text-danger h3 {
              font-family: 'Almarai', sans-serif;
              font-weight:700;
              text-shadow: 1px 1px 3px rgb(0, 0, 0), 0 0 1em rgba(0, 255, 191, 0.21), 0 0 0.1em rgba(3, 248, 244, 0.21);
              color: white;
            }
            .text-danger p{
              font-family: 'Almarai', sans-serif;
              text-shadow: 1px 1px 3px rgb(0, 0, 0), 0 0 1em rgba(0, 255, 191, 0.364), 0 0 0.2em rgba(3, 248, 244, 0.31);
              color:white;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}


export default CarrosselHome;