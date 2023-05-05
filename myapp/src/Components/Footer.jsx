import React from 'react'
import {Table,Thead,Tbody,Tr,Td,Th,Flex,Box,Image,Text,Grid,Center} from "@chakra-ui/react"
import logo from "../images/ShopCart.png"
import logo1 from "../images/stripe.png"
import logo2 from "../images/visa.png"
import logo3 from "../images/mastercard.png"
import logo4 from "../images/amazon.png"
import logo5 from "../images/klarna.png"
import logo6 from "../images/paypal.png"
import logo7 from "../images/applepay.png"
import logo8 from "../images/googlepay.png"
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
const Footer = () => {
  return (
    <Box ml={10} mr={10} >
        <Box borderBottom={"2px solid gray"}></Box>
    <Flex mt={50} gap={100} >
    <Box className='left'>
        <Box>
     <Image src={logo} alt="Logo" w={"50%"} />
     </Box>
     <Text mt={10}>Lorem ipsum dolor sit amet consectetur adipisicing  <br /> pariatur atque rem Libero  atque, aliquam deleniti <br /> alias rem  cupiditate in. Minima!</Text>
<Box mt={25} mb={15}>

      <Text   as='b'  fontSize='30px'>Accepted Payments</Text>
</Box>
      <Grid templateColumns='repeat(4, 1fr)' gap={3} mb={10} w={"60%"} ml={2}  >
         
        <Box border="1px solid gray" >
         <Center>

     <Image src={logo1} alt="logo"  w={"80%"} h={30} />
         </Center>
        </Box>
  

        <Box border="1px solid gray" h={8} >
           <Center>
     <Image src={logo2} alt="logo"  w={"80%"} h={5} mt={1}/>
     </Center>
        </Box>
  
   
      
        <Box border="1px solid gray">
        <Center>
     <Image src={logo3} alt="logo"  w={"80%"} h={6} mt={1}/>

     </Center>
        </Box>
   
   

        <Box border="1px solid gray">
        <Center>
     <Image src={logo4} alt="logo"  w={"70%"} h={5} mt={2}/>
     </Center>
        </Box>
   


        <Box border="1px solid gray" h={8}>
        <Center>
     <Image src={logo5} alt="logo"  w={"90%"} h={6} mt={1}/>
     </Center>
        </Box>

   

        <Box border="1px solid gray">
        <Center>
     <Image src={logo6} alt="logo"  w={"80%"} h={5} mt={1}/>
     </Center>
        </Box>
   
   

        <Box border="1px solid gray" >
        <Center >
     <Image src={logo7} alt="logo"  w={"80%"} h={5} mt={1}/>
     </Center>
        </Box>
   
   
        <Box border="1px solid gray">
         <Center>
     <Image src={logo8} alt="logo"  w={"80%"} h={5} mt={1}/>
         </Center>
        </Box>
   

      </Grid>


          
        </Box>
 
    <Box className="right">
    
  <Table size='sm'>
  <Thead  >
    <Tr  >
        <Th  fontSize='md' >Department</Th>
        <Th fontSize='md'>About Us</Th>
        <Th fontSize='md'>Services</Th>
        <Th fontSize='md'>Help</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
        <Td>Fashion</Td>
        <Td>About ShopCart</Td>
        <Td>Gift Card</Td>
        <Td>Shopcart Help</Td>
    </Tr>
    <Tr>
        <Td>Education Product</Td>
        <Td>Carrers</Td>
        <Td>Mobile App</Td>
        <Td>Returns</Td>

    </Tr>
    <Tr>
   <Td>Frozen Food</Td>
   <Td>News and Blogs</Td>
   <Td>Shipping and Delivery</Td>
   <Td>Track Order</Td>
    </Tr>
    <Tr>
    <Td>Beverages</Td>
    <Td>Help</Td>
    <Td>Order Pickup</Td>
    <Td>Contact Us</Td>
    </Tr>
    <Tr>
      <Td>Organic Grocery</Td>
      <Td>Press Center</Td>
      <Td>Account Signup</Td>
      <Td>Feedback</Td>
    </Tr>
    <Tr>
      <Td>Office Supplies</Td>
      <Td>Shop By Location</Td>
      <Td></Td>
      <Td>Security & Fraud</Td>
    </Tr>
    <Tr>
      <Td>Beauty Products</Td>
      <Td>Shopcart Brands</Td>
    </Tr>
    <Tr>
      <Td>Books</Td>
      <Td>Affiliate & Partners</Td>
    </Tr>
    <Tr>
      <Td>Electronic & Gadget</Td>
      <Td>Ideas & Guides</Td>
    </Tr>
    <Tr>
      <Td>Travel Accesories</Td>
    </Tr>
    <Tr>
      <Td>Fitness</Td>
    </Tr>
    <Tr><Td>Sneakers</Td></Tr>
    <Tr><Td>Toys</Td></Tr>
    <Tr><Td>Furniture</Td></Tr>
  </Tbody>
  </Table>
      
    </Box>

 


    </Flex>
    <Box borderBottom={"2px solid gray"} mt={10}></Box>
    <Flex justify={'space-between'} align={"center"} mt={19} mb={20}>
     <Flex justify={'space-between'} align={"center"} gap={10}>
      <Flex justify={'space-between'} align={'center'} gap={2}><BsFillBagCheckFill/> Become Seller</Flex>
      <Flex justify={'space-between'} align={'center'} gap={2}><AiFillGift/> Gift Card</Flex>
      <Flex justify={'space-between'} align={'center'} gap={2}><FiHelpCircle/> Help Center</Flex>
     </Flex>
     <Flex justify={'space-between'} align={"center"} gap={10}>
      <Text>Terms and Services</Text>
      <Text>Privacy and Policy</Text>
     </Flex>
     <Box>
      <Text>All Right reserved by Museming | 2022 </Text>
     </Box>
    </Flex>


    </Box>
  )
}

export default Footer
