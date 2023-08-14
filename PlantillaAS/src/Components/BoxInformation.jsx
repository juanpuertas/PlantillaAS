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
        <Box sx={{display:{xs:"none", md:"block"}}}>
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
            <Grid container spacing={1} alignItems="center" justifyContent="space-around" mt={10}>
                <Grid item>
                    <IconButton color='primary' onClick={handleNextImage}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Grid>
                {Array.from({ length: imagesToShow }).map((_, index) => (
                    <Grid item xs md={3} key={index} className='image-slider-image-container'>
                        <Box
                            sx={
                                {
                                    boxShadow:10,
                                    borderRadius:10,
                                    m:2
                                }
                            }
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                
                            >
                                <CardMedia
                                    key={index}
                                    component="img"
                                    color='primary'
                                    alt={images2[(currentImageIndex + index) % images2.length].alt}
                                    image={images2[(currentImageIndex + index) % images2.length].src}

                                    sx={
                                        {
                                            width:"100%",
                                            m:2
                                        }
                                    }
                                />
                            </Box>
                            <Typography
                                variant='h4'
                                sx={
                                    {
                                        fontWeight:"bold",
                                        textAlign:"center",
                                        color:"primary.main",
                                        mt:2
                                    }
                                }
                            >
                                {images2[(currentImageIndex + index) % images2.length].title}
                            </Typography>
                            <Box
                                display="flex"
                                justifyContent="center"
                            >
                                <Button
                                    variant='contained'
                                    sx={
                                        {
                                            m:2
                                        }
                                    }
                                >
                                    Ir
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))} 
                <Grid item>
                    <IconButton color='primary'  onClick={handlePrevImage}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </Grid>
            </Grid>
    </Box>
    <Box sx={{display:{xs:"block", md:"none"}}}> 
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
        <Grid container spacing={1} justifyContent="space-around" alignContent="center">
                <Grid item xs={1}>
                    <IconButton color='primary' onClick={handleNextImage}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Grid>    
            <Grid item xs={6}>
                <Box
                    sx={
                        {
                            boxShadow:10,
                            borderRadius:10,
                            }
                        }
                        >
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <CardMedia
                                component="img"
                                alt={images2[currentImageIndex].alt}
                                image={images2[currentImageIndex].src}
                                title={images2[currentImageIndex].title}
                                sx={
                                    {
                                        width:"100%",
                                        m:2
                                    }
                                }
                            />
                        </Box>        
                </Box>
                <Grid item xs={1}>
                    <IconButton color='primary'  onClick={handlePrevImage}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    </div>
  )
}

export default BoxInformation
