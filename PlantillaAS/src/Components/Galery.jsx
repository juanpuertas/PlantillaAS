import styled from 'styled-components'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Img= styled("img")(
    {
        width:"100%",
        height:"100%",
        borderRadius:20
    }
)

  const Galery = () => {
    
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
                >Galeria</Typography>

                <Grid container 
                        justifyContent="center" alignItems="center"
                        spacing={2}
                        mt={5}
                >
                    <Grid item xs={1.5}>
                        <Box my={25}
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
                    </Grid>
                    
                    <Grid item xs={10} md={2.5}>
                        <Box
                            sx={{
                                display:"flex",
                                transition: "0.2s",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                            }}
                        >    
                            <Img
                                src='https://via.placeholder.com/200'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={10} md={2.5}>
                        <Box
                            sx={{
                                display:"flex",
                                transition: "0.2s",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                            }}
                            >     
                            <Img
                                src='https://via.placeholder.com/200'
                            />
                        </Box>    
                    </Grid>
                    <Grid item xs={10} md={2.5}>
                        <Box
                            sx={{
                                display:"flex",
                                transition: "0.2s",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                            }}
                            >     
                            <Img
                                src='https://via.placeholder.com/200'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Box my={25}
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
                    </Grid>
                </Grid>
        </Box>
    </div>
  )
}

export default Galery
