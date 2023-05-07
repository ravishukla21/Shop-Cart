import { Button } from '@chakra-ui/button'
import { Card } from '@chakra-ui/card'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const Discount = () => {
  return (
    <Box >
        <Box position="relative"   >

      <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png"  />
        </Box >
        <Box position={{xl:"absolute",lg:"absolute",base:'unset'}} top={200} right={200}  w={{xl:'513px',lg:'513px',base:'wrap'}} h={{xl:'481.78px',lg:'481.78px',base:'200px'}}  p={{xl:"75px 64px",lg:"75px 64px",base:0}} bg={'#003D29'} m={{base:'10px 0 10px 0',xl:0,lg:0}}  >

            <Card h='100%' bg={'#003D29'} color={'white'} fontSize={"20px"}  >
                <Heading mt={5} >Get 5% Cash <br /> Back On $200</Heading>
                <Text mt={10} color={"white"}>Shopping is a bit of a relaxing hobby for <br /> me, which is sometimes troubling for the <br /> bank balance.</Text>
                <Button color={'white'} border={'1px solid white'} bg={'#003D29'}
                w={"35%"} borderRadius={'20px'} p={5} mt={10}
                >Learn More</Button>
            </Card>


        </Box>
    </Box>
  )
}

export default Discount
