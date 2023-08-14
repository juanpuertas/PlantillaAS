import { Button, CardMedia, Grid } from '@mui/material';
import React, { useState } from 'react';


const ImageSlider2 = ({ images, imagesToShow = 3 }) => {
  
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button onClick={handlePrevImage}>Prev</Button>
      </Grid>
      {Array.from({ length: imagesToShow }).map((_, index) => (
        <Grid item xs key={index} className='image-slider-image-container'>
          <CardMedia
            key={index}
            component="img"
            alt={images[(currentImageIndex + index) % images.length].alt}
            image={images[(currentImageIndex + index) % images.length].src}
            title={images[(currentImageIndex + index) % images.length].title}
            
          />
        </Grid>
      ))}
      <Grid item>
        <Button onClick={handleNextImage}>Next</Button>
      </Grid>
    </Grid>
  );
};

export default ImageSlider2;
