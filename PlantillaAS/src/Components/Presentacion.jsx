import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Presentacion = () => {
  const Img= styled("img")(
    {
      width:200,
      height:"100%",
      
    }
  )
  return (
    <div>
      <Grid container spacing={4}
            justifyContent="space-around"
      >
        <Grid   item xs={12} sm={3}>
            <Box
              mt={2}
            >
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
              <Box
                  sx={
                    {
                      display:"flex",
                      alignContent:"center",
                      justifyContent:"center"
                    }
                  }
              >
                  <Typography variant='h5' textAlign="center" 
                  >
                    E.U Colegio Anibal Rodríguez
                  </Typography>
              </Box>
              <Box
                sx={
                  {
                    display:"flex",
                    alignContent:"center",
                    justifyContent:"center"
                  }
              }
              >
                  <Typography
                    sx={
                      {
                        textAlign:"center",
                        fontSize:13
                      }
                    }
                  >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est adipisci nihil soluta temporibus iure, quia autem accusantium, asperiores dolores velit quaerat ipsum possimus eos explicabo rem placeat iste modi. Deserunt.
                  </Typography>
              </Box>

              <Box
                sx={
                  {
                      display:"flex",
                      justifyContent:"center",
                      marginTop:5
                  }
              }
              >
                <Button
                  variant='contained'
                  color='info'
                >
                  Solicitar Cupo
              </Button>
              </Box>
            </Box>  
        </Grid>
        <Grid item xs={0} sm={5}
          sx={
            {
              marginLeft:20, alignItems:"center"            }
          }
        >
          <Box
            mt={2}
            sx={
              {
                display:{xs:"none", md:"flex"},
                alignItems:"center",
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
      </Grid>
    </div>
  )
}

export default Presentacion
