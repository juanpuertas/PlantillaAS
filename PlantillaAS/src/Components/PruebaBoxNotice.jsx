import { Button, CardMedia, Grid } from '@mui/material';
import React, { useState } from 'react';


const ImageSlider = ({ images }) => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

return (
    <Grid container spacing={2} alignItems="center">
        <Grid item>
        <Button onClick={handlePrevImage}>Prev</Button>
        </Grid>
        <Grid item xs>
        <CardMedia
            component="img"
            alt={images[currentImageIndex].alt}
            image={images[currentImageIndex].src}
            title={images[currentImageIndex].title}
        />
        </Grid>
        <Grid item>
            <Button onClick={handleNextImage}>Next</Button>
        </Grid>
    </Grid>
  );
};

export default ImageSlider;