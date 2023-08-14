import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
  const [email, setEmail]= useState("")
  

  const [error, setError]= useState({
    error:false,
    message:""
  })

  const validateEmail= (email) =>{
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submit")
    if (!validateEmail(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
  };
  

  return (
    <div>
      <Box
        sx={
          {
            mt:30
          }
        }
      >
        <Grid   container
          justifyContent="center"
        >
            <Grid item xs={10} md={5}>
                Mapa
                <IconButton
                  color="primary"
                >
                    <InstagramIcon/>
                </IconButton>
                <IconButton
                  color="primary"
                >
                    <InstagramIcon/>
                </IconButton>
                <IconButton
                  color="primary"
                >
                    <InstagramIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={10} md={5}>
              <Box component="form" onSubmit={handleSubmit} autoComplete='off'
              >
                <Typography
                  variant='h4'
                  color="primary"
                  borderBottom={2}
                >
                  Contáctanos
                </Typography>
                
                <TextField
                  variant='filled'
                  label="Nombre y Apellido"
                  margin='dense' 
                  fullWidth
                  required
                />
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="filled"
                  margin='dense'
                  fullWidth
                  required
                  error={error.error}
                  helperText={error.message}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  variant='filled'
                  label="Asunto"
                  margin='dense' 
                  fullWidth
                  required
                />

                <TextField
                  variant="filled"
                  label="Comentario"
                  placeholder="Ingrese un comentario"
                  margin='dense'
                  fullWidth
                  required
                  multiline
                  rows={4}
                  maxRows={6}
                />
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={
                    {
                      mt:2
                    }
                  }
                >
                  Enviar
                </Button>
              </Box>
            </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default ContactUs
