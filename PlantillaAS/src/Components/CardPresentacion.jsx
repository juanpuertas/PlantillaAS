import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'

const CardPresentacion = () => {

    const Img= styled("img")(
        {
        width:200,
        height:"100%",
        objectFit:"cover",
        objectPosition:"center"
        }
    )
    const Img2= styled("img")(
        {
        width:500,
        height:"100%",
        objectFit:"cover",
        objectPosition:"center",
        display:"flex"
        }
    )
        
    
    return (
    <div>

        <Container maxWidth="xs"
                sx={
                    {
                    display:"flex",
                    alignItems:'center',
                    mt:5,
                    ml:5,
                    border:'none'
                        
                    }
                }
        >
            <Box sx={
                {                    
                flexGrow:1,
                display:"grid",
                gap:2,
                mt:4
                }
            }>
                
                <center>
                    <Img
                        src="https://via.placeholder.com/200"
                        alt='Imagen colegio'
                        className='img'        
                    />
                </center>
                <Typography variant='h5' sx={
                    {
                        marginTop:10,
                        justifyContent:'center',
                        display:'flex'
                    }
                }>E.U Colegio Anibal Rodríguez</Typography>
                <Typography variant='' sx={
                    {
                    marginTop:10,
                    justifyContent:'center',
                    display:'flex',
                    }
                }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quod maxime debitis unde, necessitatibus vero veritatis tempora minima cupiditate aspernatur voluptas voluptatem accusantium possimus. Temporibus vero adipisci doloribus reiciendis tempore!</Typography>
                <Button variant="contained" color='info'
                    sx={
                        {
                            width:200,
                            
                            marginX:12
                        }
                    }
                >Solicito Cupo</Button>

            </Box>

           
            
        </Container>
    
    </div>
)
}

export default CardPresentacion
