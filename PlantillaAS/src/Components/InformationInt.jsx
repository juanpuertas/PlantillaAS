import { Box, Button, Grid, Typography, responsiveFontSizes } from '@mui/material'
import IconIglesia from '@mui/icons-material/Church';
import IconYisus from '@mui/icons-material/Accessibility';
import IconBank from '@mui/icons-material/AccountBalance';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import React from 'react'

const InformationInt = () => {
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
                Informacion De Interés 
                </Typography>

                <Grid
                    container spacing={0}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                    mt={10}
                >
                    
                    <Button>
                        <ArrowBackIcon/>
                    </Button>
                    <Grid item xs={12} md={3}>
                    <Box
                            sx={
                                {
                                    boxShadow:10,
                                    borderRadius:10
                                }
                            }
                        >
                        
                            <Box
                                
                                sx={
                                    {
                                    display:"flex",  
                                    justifyContent:"center",
                                }
                                }
                            >
                                <IconIglesia 
                                        color='primary'
                                        sx={
                                            {
                                                fontSize:300,
                                            }
                                        }
                                        />
                            </Box>
                            <Typography variant='h6'
                                sx={
                            {
                                textAlign:"center", 
                                fontWeight:"medium",
                                color:"primary.main"
                            }
                            }
                            >Pastoral Educativa</Typography>
                            <Box
                                sx={
                                    {
                                    display:"flex",
                                    
                                    justifyContent:"center",
                                }
                                }
                            >
                            <Button variant='contained'    
                                        sx={
                                            {
                                                color:"inherit",
                                                fontSize:"large",
                                                borderRadius:5,
                                                marginBottom:2,
                                                marginTop:2
                                            }
                                        }
                                > 
                                Ir 
                                </Button>
                            </Box>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <Box
                            sx={
                                {
                                    boxShadow:10,
                                    borderRadius:10
                                }
                            }
                        >
                        
                            <Box
                                
                                sx={
                                    {
                                    display:"flex",
                                    
                                    justifyContent:"center",
                                }
                                }
                            >
                                <IconBank 
                                        color='primary'
                                        sx={
                                            {
                                                
                                                fontSize:300,
                                            }
                                        }
                                        />
                            </Box>
                            <Typography variant='h6'
                                sx={
                            {
                                textAlign:"center",
                                
                                fontWeight:"medium",
                                color:"primary.main"
                            }
                            }
                            >Bancos</Typography>
                            <Box
                                sx={
                                    {
                                    display:"flex",
                                    
                                    justifyContent:"center",
                                }
                                }

                            >
                            <Button variant='contained'    
                                        sx={
                                            {
                                                color:"inherit",
                                                fontSize:"large",
                                                borderRadius:5,
                                                marginBottom:2,
                                                marginTop:2
                                            }
                                        }
                                > 
                                Ir 
                                </Button>
                            </Box>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={
                                {
                                    boxShadow:10,
                                    borderRadius:10
                                }
                            }
                        >
                        
                            <Box
                                
                                sx={
                                    {
                                    display:"flex",
                                    
                                    justifyContent:"center",
                                }
                                }
                            >
                                <IconYisus 
                                        color='primary'
                                        sx={
                                            {
                                                
                                                fontSize:300,
                                            }
                                        }
                                        />
                            </Box>
                            <Typography variant='h6'
                                sx={
                            {
                                textAlign:"center",
                                
                                fontWeight:"medium",
                                color:"primary.main"
                            }
                            }
                            >Clubes Escolares</Typography>
                            <Box
                                sx={
                                    {
                                    display:"flex",
                                    
                                    justifyContent:"center",
                                }
                                }

                            >
                            <Button variant='contained'    
                                        sx={
                                            {
                                                color:"inherit",
                                                fontSize:"large",
                                                borderRadius:5,
                                                marginBottom:2,
                                                marginTop:2
                                            }
                                        }
                                > 
                                Ir 
                                </Button>
                            </Box>
                        </Box>    
                    </Grid>
                    <Button>
                        <ArrowForwardIcon/>
                    </Button>
                </Grid>
        </Box>
    </div>
  )
}

export default InformationInt
