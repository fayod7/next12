import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { deepPurple } from '@mui/material/colors';
import { format } from 'date-fns';

const Hero = () => {
  return (
    <Box width={'100%'}  height={'70vh'} sx={{backgroundColor: 'red'}}>
        <Carousel responsive={{
              mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
        }}>
                {
                    data?.map((item) => (
                        <Box key={item.image}>
                            <Box sx={{position: 'relative', width: '100%', height: '70vh'}}>
                            {/* <Image src={item.image} alt='77' fill style={{objectFit: 'cover'}}/> */}
                            <Box sx={{position:'absolute', top: 0, left: 0, bottom: 0,
                                right: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0, .6)'
                            }}/>

                            <Box width={{xs: '100%', sm: '70%'}} position={"relative"} color={'white'} zIndex={999}  sx={{top: '50%', transform: 'translateY(-50%)', paddingLeft: {xs: '10px', sm:'50px'}}}>
                            <Typography variant='h2'>
                                {item.title}
                            </Typography>
                            <Typography variant='h5'>
                                {item.exerpt}
                            </Typography>
                            <Box sx={{display: 'flex', gap: '10px', alignItems: 'center', marginTop: '20px'}}>
                                <Avatar sx={{ bgcolor: deepPurple[500] }}>SB</Avatar>
                                <Box>
                                <Typography>{item.author.name}</Typography>
                                <Box>
                                    {format(new Date(), 'dd MMM, yyyy') } &#x2022; 10 min read
                                      
                                </Box>

                                </Box>
                            </Box>
                            </Box>
                            </Box>
                        </Box>
                    ))
                }
        </Carousel>
    </Box>
  )
}

export default Hero

const data = [
  {
    image: '/',
    title: 'Technical SEO with Hygraph',
    exerpt: 'Get started with your SEO implementation when using a Headless CMS',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNQqQNGRz2F4UFntKQx',
    },
  },
  {
    image: 'https://media.graphassets.com/bh3K2NNtTHCN26OXfq9h',
    title: 'Union Types and Sortable Relations with Hygraph',
    exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNQqQNGRz2F4UFntKQx',
    },
  },
];