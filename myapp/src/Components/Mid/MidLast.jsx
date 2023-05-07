import React from 'react'
import { Card, Text,Heading,Stack,ButtonGroup,Image,Button, CardFooter, Grid, Box, Flex } from '@chakra-ui/react'
import { BsDot } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";
import Discount from './Discount';


const MidLast = () => {
  return (
    <Box fontFamily={"'Inter', sans-serif"}  ml={100} mr={100} mb={50}>
        <Discount/>

    <Grid mt={100} templateColumns={{xl:'repeat(2, 1fr)' ,lg:'repeat(2, 1fr)' ,base:'repeat(1, 1fr)' }} gap={5}>
      <Card maxW='2xl' >
  <>
    <Image
      src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png'
      alt='Green double couch with wooden legs'
      borderTopRadius='lg'
    />
    <Stack mt='6' spacing='3' ml={6}>
      <Heading size='md'>Furniture Village</Heading>
      <Text>
       Delivery with in 24 hours
      </Text>
      
    </Stack>
  </>
  
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' bg='#231F1E' color="white" borderRadius={20}>
        Shop Now
      </Button>
     
    </ButtonGroup>
  </CardFooter>
</Card>
      <Card maxW='2xl'>
  <>
    <Image
      src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png'
      alt='Green double couch with wooden legs'
      borderTopRadius='lg'
      />
    <Stack mt='6' spacing='3' ml={6}>
      <Heading size='md'>Fashion World</Heading>
      <Text>
       Delivery with in 24 hours
      </Text>
      
    </Stack>
  </>
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' bg='#231F1E' color="white" borderRadius={20}>
        Shop Now
      </Button>
     
    </ButtonGroup>
  </CardFooter>
</Card>



    </Grid>

    <Heading mt={20} fontsize='20px'>Best Selling Store</Heading>

    <Grid templateColumns={{xl:'repeat(4, 1fr)',lg:'repeat(4, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(1, 1fr)',base:'repeat(1, 1fr)'}} gap={2} mt={8} >
 <Box>
    <>
    <Box position={"relative"}>

        <Box  >
        <Image borderRadius="20" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png" />
        </Box>
        <Box w={51} ml={8} position={'absolute'} bottom={-6}>
            <Image src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png'/>
        </Box>
    </Box>
        <Stack mt={6} ml={2} >
            <Heading size='md'>Staples</Heading>
            <Flex  alignItems={'center'}>Bag<BsDot/>Perfume</Flex>
            <Flex color={'pink.600'} gap={2} alignItems={'center'}><AiFillTag/>Delivery with in 24 hours</Flex>
        </Stack>
    </>
 </Box>
 <Box>
    <>
    <Box position={"relative"}>

        <Box  >
        <Image borderRadius="20" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74bd907803dd35b4f_store%20two-min.png" />
        </Box>
        <Box w={51} ml={8} position={'absolute'} bottom={-6}>
            <Image src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253a093c1dea9a21c7_Ellipse%20287-1.png'/>
        </Box>
    </Box>
        <Stack mt={6} ml={2} >
            <Heading size='md'>Now Delivery</Heading>
            <Flex  alignItems={'center'}>Bag<BsDot/>Perfume</Flex>
            <Flex color={'pink.600'} gap={2} alignItems={'center'}><AiFillTag/>Delivery with in 24 hours</Flex>
        </Stack>
    </>
 </Box>
 <Box>
    <>
    <Box position={"relative"}>

        <Box  >
        <Image borderRadius="20" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e668e3265021e48a0b_store%20three-min.png" />
        </Box>
        <Box w={51} ml={8} position={'absolute'} bottom={-6}>
            <Image src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25fbba384ffd156e76_Ellipse%20287-2.png'/>
        </Box>
    </Box>
        <Stack mt={6} ml={2} >
            <Heading size='md'>Bevmo</Heading>
            <Flex  alignItems={'center'}>Bag<BsDot/>Perfume</Flex>
            <Flex color={'pink.600'} gap={2} alignItems={'center'}><AiFillTag/>Delivery with in 24 hours</Flex>
        </Stack>
    </>
 </Box>
 <Box>
    <>
    <Box position={"relative"}>

        <Box  >
        <Image borderRadius="20" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6eaf8537c8058cf04_store%20four-min.png" />
        </Box>
        <Box w={51} ml={8} position={'absolute'} bottom={-6}>
            <Image src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png'/>
        </Box>
    </Box>
        <Stack mt={6} ml={2} >
            <Heading size='md'>Quickly</Heading>
            <Flex  alignItems={'center'}>Bag<BsDot/>Perfume</Flex>
            <Flex color={'pink.600'} gap={2} alignItems={'center'}><AiFillTag/>Delivery with in 24 hours</Flex>
        </Stack>
    </>
 </Box>

    </Grid >
    <Heading mt={20} fontsize='20px'>Services To Help You Shop</Heading>
    <Grid templateColumns={{xl:'repeat(3, 1fr)',lg:'repeat(3, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(1, 1fr)',base:'repeat(1, 1fr)'}} gap={5} mt={8} >
        <Card bg={'#f5f6f6'} borderRadius='md' >
          <Stack gap={5} ml={6} p={10} >
            <Heading size={'md'}>Frequently Asked <br /> Questions</Heading>
            <Text>Update on Safe Shoping <br /> in our Stores</Text>
          </Stack>
          <Box>
            <Image borderBottomRadius='lg' src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png"/>
          </Box>
        </Card>
        <Card bg={'#f5f6f6'} borderRadius='md' >
          <Stack gap={5} ml={6} p={10} >
            <Heading size={'md'}>Online Payment<br /> Process</Heading>
            <Text>Update on Safe Shoping <br /> in our Stores</Text>
          </Stack>
          <Box>
            <Image borderBottomRadius='lg' src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png"/>
          </Box>
        </Card>
        <Card bg={'#f5f6f6'} borderRadius='md' >
          <Stack gap={5} ml={6} p={10} >
            <Heading size={'md'}>Home Delivery <br /> Options</Heading>
            <Text>Update on Safe Shoping <br /> in our Stores</Text>
          </Stack>
          <Box>
            <Image borderBottomRadius='lg' src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png"/>
          </Box>
        </Card>
    </Grid>
      </Box>
  )
}

export default MidLast
