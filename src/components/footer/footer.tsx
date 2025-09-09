import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import { format } from 'date-fns'
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box padding={'20px'} sx={{display:'flex', justifyContent:'space-between', alignItems: 'center', backgroundColor: 'primary.main', color:'white'}}>
      <Typography>     
        © {format(new Date(), 'yyyy')} Sammi. All rights reserved
      </Typography>

      <Box sx={{display: 'flex', gap:' 15px', alignItems: 'center'}}>
  <TelegramIcon sx={{cursor: 'pointer', fontSize: '30px'}}/>
  <InstagramIcon sx={{cursor: 'pointer', fontSize: '30px'}}/>
  <YouTubeIcon sx={{cursor: 'pointer', fontSize: '30px'}}/>
</Box>
    </Box>
  )
}

export default Footer