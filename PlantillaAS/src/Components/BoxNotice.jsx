import { Box, Button, Card, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const BoxNotice = ({Notice, noticeToShow = 3}) => {
    
    const[currentNotice, setCurrentNotice]=useState(0)
    
    const handleNextNotice = () => {
        setCurrentNotice((prevIndex) => (prevIndex + 1) % Notice.length);
      };
    
      const handlePrevNotice = () => {
        setCurrentNotice((prevIndex) =>
          prevIndex === 0 ? Notice.length - 1 : prevIndex - 1
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
            >Noticias</Typography>
            <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                <Grid item>
                    <IconButton variant="" color='primary' onClick={handlePrevNotice}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Grid>
                {Array.from({ length: noticeToShow }).map((_, index) => (    
                        <Grid item xs md={3} key={index}>
                            <Box 
                                sx={{boxShadow:20,borderRadius:5}}
                            >
                                <CardMedia
                                    key={index}
                                    component="img"
                                    alt={Notice[(currentNotice + index) % Notice.length].alt}
                                    image={Notice[(currentNotice + index) % Notice.length].src}
                                    sx={
                                        {
                                            borderRadius:5
                                        }
                                    }
                                />
                                <Typography 
                                    variant='h5'
                                    color="primary"
                                    sx={
                                        {
                                            textAlign:"center",
                                            pt:10,
                                            fontWeight:"bold",
                                            color:"primary.main"
                                        }
                                        }
                                >
                                    {Notice[(currentNotice + index) % Notice.length].title}
                                </Typography>
                                <Typography 
                                    sx={
                                        {
                                            m:2,
                                            fontSize:13
                                        }
                                    }
                                >
                                    {Notice[(currentNotice + index) % Notice.length].content}
                                </Typography>
                                <Typography 
                                    sx={
                                        {
                                            m:2,
                                            fontSize:13
                                        }
                                    }
                                >
                                    {Notice[(currentNotice + index) % Notice.length].date}
                                </Typography>
                                
                                <Divider/>
                                
                                <Button variant='contained'
                                    sx={
                                        {
                                            m:2
                                        }
                                    }
                                >
                                    Ver mas
                                </Button>
                            </Box>
                        </Grid>
                ))}
                <Grid item>
                        <IconButton variant="" color='primary' onClick={handleNextNotice}>
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
            >Noticias</Typography>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                <Grid item>
                    <IconButton variant="" color='primary' onClick={handlePrevNotice}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Grid>
                <Grid item xs={8}>
                    <Box
                        sx={{boxShadow:20,borderRadius:5}}
                    >
                        <CardMedia
                            component="img"
                            alt={Notice[currentNotice].alt}
                            image={Notice[currentNotice].src}
                            sx={
                                {
                                    width:"100%",
                                    heigth:"100%",
                                    borderRadius:5
                                }
                            }
                        />
                        <Typography
                            variant='h5'
                            color="primary"
                            sx={
                                {
                                    m:1,
                                    fontWeight:"bold",
                                    color:"primary.main"
                                }
                                }
                        >
                            {Notice[currentNotice].title}
                        </Typography>
                        <Typography
                            sx={
                                {
                                    m:2,
                                    fontSize:13
                                }
                            }
                        >
                            {Notice[currentNotice].content}
                        </Typography>
                        <Typography
                            sx={
                                {
                                    m:2,
                                    fontSize:13
                                }
                            }
                        >
                            {Notice[currentNotice].date}   
                        </Typography>
                        
                        <Divider/>
                        
                        <Button variant='contained'
                            sx={
                                {
                                m:2
                                }
                                }
                        >
                            Leer más
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <IconButton variant="" color='primary' onClick={handleNextNotice}>
                            <ArrowForwardIcon/>
                        </IconButton>
                </Grid>
    </Grid>
        </Box>
    </div>
  )
}

export default BoxNotice
