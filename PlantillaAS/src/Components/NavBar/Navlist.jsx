import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InboxIcon from "@mui/icons-material/Inbox"



const Navlist = ({navLink}) => {
  return (
    <div>
        <Box sx={
            {
                width:250,
                bgcolor:"inherit"

            }
        }>
            <nav>
                <List>
                    {navLink.map(item=>(
                        <ListItem
                            disablePadding
                            key={item.title}
                        >
                        <ListItemButton 
                            component="a"
                            href={item.path}

                            
                        >
                            <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                        
                    </ListItem>
                    ))} 
                </List>
            </nav>    
        </Box>
    </div>
  )
}

export default Navlist
