import React, { useState, useEffect } from 'react';
import BootstrapCarousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const ImageCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/week?api_key=1e05d6c6fe757614cf08f4083d927aaf')
      .then((response) => {
        const items = response.data.results.slice(0, 5);
        setCarouselItems(items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="carousel">
      <BootstrapCarousel>
        {carouselItems.map((item) => (
          <BootstrapCarousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.title}
              style={{ maxHeight: "600px", objectFit: "cover",  objectPosition: "top" }}
            />
            <BootstrapCarousel.Caption  className="carousel-caption">
              <h3>{item.title}</h3>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
    </div>
  );
};

export default ImageCarousel;