import { Box } from '@mui/material'
import React from 'react'
import Galery from './Galery';
import AboutUs from './AboutUs';
import Notice from './Notice';
import InformationInt from './InformationInt';
import Events from './Events';
import UsTeam from './UsTeam';
import ContactUs from './ContactUs';
import BoxNotice from './BoxNotice';
import BoxInformation from './BoxInformation';

const Body = ({Notice, images2}) => {
    
    return (
    <div>
    
        <Box
            mt={10}
            mb={10}
        >
            <AboutUs/>
        </Box>
        
        <Box>
            <BoxNotice
                Notice={Notice}
            />
        </Box>
        
        <Box>
            <BoxInformation
                images2={images2}
            />
        </Box>

        <Box>
            <Events/>
        </Box>

        <Box>
            <Galery/>
        </Box>
            
        <Box>
            <UsTeam/>
        </Box>

        <Box>
            <ContactUs/>
        </Box>

        <Box>
           
        </Box>
    </div>
)
}

export default Body
