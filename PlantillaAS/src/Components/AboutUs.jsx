import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import GroupOrientation from './GroupButton';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ChurchIcon from '@mui/icons-material/Church';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';


const AboutUs = () => {
    const Img= styled("img")(
        {
        width:"50%",
        height:"100%",
        marginTop:2
        }
    )
    return (
    <div>
        <Box mt={20}>
            <Grid container
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item xs={10} sm={5}>
                    <Box
                        sx={
                            {
                            display:"flex",
                            alignContent:"center",
                            justifyContent:"center"
                            }
                        }
                    >
                    <Img
                        src='https://via.placeholder.com/200'

                    />
                    </Box>
                </Grid>
                <Grid item xs={10} sm={5}>
                    <Box
                        sx={
                            {
                                display:"flex",
                                alignContent:"center",
                                justifyContent:{xs:"center", md:"left"}
                            }
                        }
                    >
                        <Typography
                            variant='h6'
                            color="primary"
                        >
                            Conoce Nuestro Colegio
                        </Typography>
                    </Box>
                    <Box
                        sx={
                            {
                                display:"flex",
                                alignContent:"center",
                                justifyContent:{xs:"center", md:"left"}
                                
                            }
                        }
                    >
                        <Typography
                            fontSize={13}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, aliquid provident praesentium quibusdam tempore odit quia? Magnam, quis illo culpa iste exercitationem libero unde voluptas totam excepturi deserunt eveniet commodi.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={1}>
                    <Box
                        component="span"
                            sx={
                                {
                                    display:{xs:"none",md:"block"},
                                }
                            }   
                        >
                        <GroupOrientation/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </div>
)
}

export default AboutUs
    