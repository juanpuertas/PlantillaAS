import React, { useState } from 'react'
import Navlist from './Navlist'


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import { Drawer,  Button, Container, Box, IconButton } from '@mui/material';

const navLink=[
    {
        title:"Home" , path:"#home"
    },
    {
        title:"Plataforma Web SAE", path:"#sae"
    },
    {
        title:"Publicaciones", path:"#publicaciones"
    },
    {
        title:"Contactos", path:"#contact"
    }
]

const Navbar = () => {
  
    
  const [open,setOpen]=useState(false)
  
    return (
    <div>
        <AppBar 
            position='static'
        >
                <Toolbar>
                    <Box sx={
                                {
                                    display:{xs:"flex", sm:"none"},
                                    
                                }
                            } >
                        <IconButton
                            size='large'
                            onClick={() =>setOpen(true)}  
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                    <Box
                        sx={
                            {
                                display:{xs:"none", sm:"flex"}, 
                                justifyContent:"right",
                                flexGrow:1
                            }
                        }
                    >
                        {navLink.map(item =>(
                            <Button 
                                color='inherit'
                                key={item.title}
                                component="a"
                                href={item.path} 
                            >{item.title}</Button>    
                        
                        ))}
                    </Box>
                    <Drawer
                        open={open}
                        anchor="right"
                        onClose={()=> setOpen(false)}
                    >
                        <Navlist navLink={navLink}/>
                    </Drawer>
                </Toolbar>
            
        </AppBar>
    </div>
)
}

export default Navbar
