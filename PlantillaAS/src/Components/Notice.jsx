import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Notice = () => {
    const Img= styled("img")(
        {
        width:"100%",
        height:"100%",
        borderRadius:20
        }
      )

    return (
    <div>
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

        <Box
            mt={5}
        >
            <Box
                        my={25}
                        sx={
                            {
                                display:"flex",
                                justifyContent:"center",
                                alignContent:"center",
                            }
                        }
                    >
                        <Button>
                            <ArrowBackIcon/>
                        </Button>
                    </Box>
            <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
            >
                
                
                <Grid item xs={7} md={3.3}>
                    <Box
                        
                        borderRadius={5}
                        boxShadow={4}
                            
                    >
                        <Box>
                            <Img
                                src="https://via.placeholder.com/200"
                            />
                        </Box>
                        <Box>
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
                                        m:2,
                                        fontSize:13
                                    }
                                }
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.
                            </Typography>
                        </Box>
                        <Divider/>
                        <Button
                            variant='contained'

                            sx={
                                {
                                    marginTop:2,
                                    marginLeft:2
                                }
                            }
                        >
                            Leer más
                        </Button>
                        <Box
                            display="flex"
                            mt={1}
                            mx={2}
                            justifyContent="space-between"
                        >
                            <Typography>
                                Admin
                            </Typography>
                            <Typography>
                                Fecha
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs md={3.3}>
                    <Box
                        marginLeft={2}
                        borderRadius={5}
                        boxShadow={4}

                        sx={
                            {
                                display:{xs:"none", md:"block"}
                            }
                        }
                    >
                        <Box>
                            <Img
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
                                    m:2,
                                    fontSize:13
                                }
                            }
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.
                            </Typography>
                        </Box>
                        <Divider/>
                        <Button
                            variant='contained'

                            sx={
                                {
                                    marginTop:2,
                                    marginLeft:2

                                }
                            }
                        >
                            Leer más
                        </Button>
                        <Box
                            display="flex"
                            mt={1}
                            mx={2}
                            justifyContent="space-between"
                        >
                            <Typography>
                                Admin
                            </Typography>
                            <Typography>
                                Fecha
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs md={3.3}>
                    <Box
                        marginLeft={2}
                        borderRadius={5}
                        boxShadow={4}

                        sx={
                            {
                                display:{xs:"none", md:"block"}
                            }
                        }
                    >
                        <Box>
                            <Img
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
                                        m:2,
                                        fontSize:13
                                    }
                            }
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aspernatur aliquam totam commodi deserunt mollitia ipsum porro deleniti quibusdam fuga natus vitae veniam id quam impedit, architecto, delectus magni dolorum.
                            </Typography>
                        </Box>
                        <Divider/>
                        <Button
                            variant='contained'

                            sx={
                                {
                                    marginTop:2,
                                    marginLeft:2

                                }
                            }
                        >
                            Leer más
                        </Button>
                        <Box
                            display="flex"
                            mt={1}
                            mx={2}
                            justifyContent="space-between"
                        >
        
                            <Typography>
                                Admin
                            </Typography>
                            <Typography>
                                Fecha
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item>
                    

                </Grid>

            </Grid>
            
            <Box
                        my={25}
                        sx={
                            {
                                display:"flex",
                                justifyContent:"center",
                                alignContent:"center",
                            }
                        }
                    >
                        <Button>
                            <ArrowForwardIcon/>
                        </Button>
                    </Box>
            <Box
                sx={
                    {
                        display:"flex",
                        justifyContent:"center",
                        marginTop:10
                    }
                }
            >
                <Button
                    variant='contained'
                    
                    sx={
                        {
                            color:"inherit",
                            fontSize:"large",
                            borderRadius:5
                        }
                    }
                >
                    Ver más
                </Button>
            </Box>

        </Box>

    </div>
  )
}

export default Notice
