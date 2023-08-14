import { Box, Button, CardMedia, Grid, Icon, IconButton, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react'

const BoxInformation = ({ images2 ,imagesToShow=3}) => {
    
    const [currentImageIndex, setCurrentImagesIndex] = useState(0);

    const handleNextImage = () => {
    setCurrentImagesIndex((prevIndex) => (prevIndex + 1) % images2.length);
    };

    const handlePrevImage = () => {
    setCurrentImagesIndex((prevIndex) =>
        prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
    };
    
    return (
    <div>
        <Box>
        <Typography variant='h4'
                sx={
                    {
                        textAlign:"center",
                        mt:10,
                        fontWeight:"bold",
                        color:"primary.main"
                    }
                }
            >Información De Interés</Typography>
            <Grid container spacing={1} alignItems="center">
                <Grid item>
                    <IconButton onClick={handleNextImage}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Grid>
                {Array.from({ length: imagesToShow }).map((_, index) => (
                    <Grid item xs key={index} className='image-slider-image-container'>
                        <CardMedia
                            key={index}
                            component="img"
                            color='primary'
                            alt={images2[(currentImageIndex + index) % images2.length].alt}
                            image={images2[(currentImageIndex + index) % images2.length].src}
                            
                        />
                        <Typography
                            variant='h4'
                            sx={
                                {
                                    fontWeight:"bold",
                                    textAlign:"center",
                                    color:"primary.main"
                                }
                            }
                        >
                            {images2[(currentImageIndex + index) % images2.length].title}
                        </Typography>
                        <Button
                            justifyContent="center"
                        >
                            Ir
                        </Button>
                    </Grid>
                ))} 
                <Grid item>
                    <IconButton onClick={handlePrevImage}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
        
    </div>
  )
}

export default BoxInformation
