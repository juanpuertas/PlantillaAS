import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ChurchIcon from '@mui/icons-material/Church';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';


const buttons = [
  <Button key="one"><ChurchIcon/></Button>,
  <Button key="two"><PersonIcon/></Button>,
  <Button key="three"><SchoolIcon/></Button>,
  <Button key="four"><CastForEducationIcon/></Button>,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical text button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
     
    </Box>
  );
}
