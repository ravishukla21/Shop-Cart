import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/react'

import React from 'react'

const OnePage = () => {
  return (
    
    <Box m={{base:'5px 45px 10px 50px',}} >

 

    <Box position="relative" h={'500px'}  >

  <Image src="https://w0.peakpx.com/wallpaper/480/705/HD-wallpaper-enchanted-by-the-music-girl-model-music-headphones-white-woman-pink.jpg" h='100%' />
    </Box >
    <Box position={{xl:"absolute",lg:"absolute",base:'unset'}} top={150} right={100}  w={{xl:'600px',lg:'513px',base:'wrap'}} h={{xl:'400px',lg:'481.78px',base:'200px'}}  p={{xl:"65px 84px",lg:"75px 64px",base:0}}  m={{base:'10px 0 10px 0',xl:0,lg:0}}  >

        <Box h='100%'  color={'#003D29'}  fontWeight={'bold'} >
            <Heading mt={5} fontSize={"35px"} >Grap Upto 50% Off On <br /> Selected Headphones</Heading>
            <Button color={'white'} border={'1px solid white'} bg={'#003D29'} 
            w={"25%"} borderRadius={'20px'} p={5} mt={10}
            >Learn More</Button>
        </Box>


    </Box>
</Box>
  )
}

export default OnePage
