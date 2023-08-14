import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import styled from 'styled-components';
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material'


const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  const Img2 = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

const Events = () => {
    

  return (
    <div>
    <Box>
        <Typography
                    variant='h4'
                    sx={
                        {
                            textAlign:"center",
                            mt:10,
                            fontWeight:"bold",
                            color:"primary.main"
                        }
                    }
                >
                    Eventos
            </Typography>

            <Grid container spacing={2}
                justifyContent="center"
                sx={
                    {
                        mt:5
                    }
                }
            >
                <Grid item xs={12} md={3}>
                    Calender is here!
                </Grid>
                <Grid item xs={12} md={3}>
                <Box
                        marginLeft={2}
                        borderRadius={5}
                        boxShadow={4}
                    >
                        <Box>
                            <Img2

                                src="https://via.placeholder.com/200"
                            />
                        </Box>
                        <Box
                            sx={
                                {
                                    
                                }
                            }
                        >
                            <Typography
                                variant='h6'
                                color="primary"
                                sx={
                                    {
                                        textAlign:"center",
                                        mt:5,
                                        fontWeight:"bold",
                                        color:"primary.main"
                                    }
                                    }
                            >
                                Titulo 1 Titulo 1 Titulo 1 Titulo 1 Titulo 1
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={
                                {
                                    m:2
                                }
                            }
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.
                            </Typography>
                        </Box>
                        <Divider/>
                        
                        <Box
                            display="flex"
                            justifyContent="space-around"
                            alignContent="center"
                            mt={1}
                            mx={2}
                        >
                            <Button
                                variant='contained'
                                sx={
                                    {
                                        marginLeft:1,
                                        marginBottom:1
                                    }
                                }
                                >
                                    Leer más
                                </Button>
                            <Typography>
                                July 18, 2023
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3.3}>
                    <Box
                        sx={
                            {
                                display:"block"
                            }
                        }
                    >
                        <Card
                        sx={{
                            display:"flex",
                            transition: "0.2s",
                            "&:hover": {
                            transform: "scale(1.01)",
                            },
                        }}
                        >
                        <Img2
                            src='https://via.placeholder.com/200'
                        />

                        <CardContent>
                            <Typography variant='h5' color="primary">
                                Fiesta de Graduación
                            </Typography>
                            <Typography
                                sx={
                                    {
                                        fontSize:14
                                    }
                                }
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores non quam eos dolores, a eveniet quo optio quae inventore consequuntur odio dolore at temporibus magnam doloribus perspiciatis! Pariatur, molestiae.
                            </Typography>
                        </CardContent>
                        </Card>
                    </Box>
                    
                    <Box
                        sx={
                            {
                                mt:2
                            }
                        }
                    >
                        <Card
                            sx={{
                                display:"flex",
                                transition: "0.2s",
                                "&:hover": {
                                transform: "scale(1.01)",
                                },
                            }}
                            >
                            <Img2
                                src='https://via.placeholder.com/200'
                            />

                            <CardContent>
                                <Typography variant='h5' color="primary">
                                    Fiesta de Graduación
                                </Typography>
                                <Typography
                                    sx={
                                        {
                                            fontSize:14
                                        }
                                    }
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores non quam eos dolores, a eveniet quo optio quae inventore consequuntur odio dolore at temporibus magnam doloribus perspiciatis! Pariatur, molestiae.
                                </Typography>
                            </CardContent>
                            </Card>
                    </Box>

                    <Box
                        sx={
                            {
                                mt:2
                            }
                        }
                    >
                        <Card
                            sx={{
                                display:"flex",
                                transition: "0.2s",
                                "&:hover": {
                                transform: "scale(1.01)",
                                },
                            }}
                            >
                            <Img2
                                src='https://via.placeholder.com/200'
                            />

                            <CardContent>
                                <Typography variant='h5' color="primary">
                                    Fiesta de Graduación
                                </Typography>
                                <Typography
                                    sx={
                                        {
                                            fontSize:14
                                        }
                                    }
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores non quam eos dolores, a eveniet quo optio quae inventore consequuntur odio dolore at temporibus magnam doloribus perspiciatis! Pariatur, molestiae.
                                </Typography>
                            </CardContent>
                            </Card>
                            <Box
                                sx={
                                    {
                                        display:"flex",
                                        justifyContent:"center",
                                        mt:5
                                    }
                                }
                            >
                                <Button
                                    variant='contained'
                                >
                                    Ver más
                                </Button>
                            </Box>
                    </Box>
                </Grid>
            </Grid> 
        </Box>
    </div>
)
}

export default Events
