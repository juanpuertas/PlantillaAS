import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components';

const Img= styled("img")(

    {
        width:"100%",
        height:"100%"
    }
)

const UsTeam = () => {
  return (
    <div>
        <Box mt={5}>
            <Typography variant='h4'
                sx={
                    {
                        textAlign:"center",
                        mt:10,
                        fontWeight:"bold",
                        color:"primary.main"
                    }
                }
            >
                Nuestro Equipo
            </Typography>
            <Grid container 
                mb={10}
                justifyContent="space-between"
                
                mt={5}
            >
                <Grid item xs={1}>
                        <Box 
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
                <Grid
                    item xs={10} md={2}
                >
                    <Avatar
                        src=''
                        sx={
                            {   
                                transition: "0.3s",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                                border:8,
                                borderColor:"primary.main",
                                boxShadow:10,
                                width:"100%",
                                height:"120%"
                            }
                        }
                    />   
                </Grid>
                <Grid
                    item xs={10} md={2}
                >
                    
                        <Avatar
                            src=''
                            sx={
                                {
                                    display:"flex",
                                    transition: "0.3s",
                                    "&:hover": {
                                    transform: "scale(1.05)",
                                    },
                                    border:8,
                                    borderColor:"primary.main",
                                    boxShadow:10,
                                    width:"100%",
                                    height:"120%",
                                    
                                }
                            }
                        />
                    
                </Grid>
                <Grid
                    item xs={10} md={2}
                >
                    <Avatar
                        src=''
                        sx={
                            {
                                display:"flex",
                                transition: "0.3s",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                                border:8,
                                borderColor:"primary.main",
                                boxShadow:10,
                                width:"100%",
                                height:"120%"
                            }
                        }
                    />     
                </Grid>
                <Grid
                    item xs={10} md={2}
                >
                    <Avatar
                        src=''
                        sx={
                            {
                                display:"flex",
                                transition: "0.3s",
                                "&:hover": {
                                transform: "scale(1.05)",
                                },
                                border:8,
                                borderColor:"primary.main",
                                boxShadow:10,
                                width:"100%",
                                height:"120%"
                            }
                        }
                    />     
                </Grid>
                <Grid item xs={1}>
                        <Box 
                            sx={
                                { 
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
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

export default UsTeam
