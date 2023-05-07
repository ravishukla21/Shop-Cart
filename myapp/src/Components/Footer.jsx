import React from 'react'
import {Table,Thead,Tbody,Tr,Td,Th,Flex,Box,Image,Text,Grid} from "@chakra-ui/react"
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
    <Box ml={100} mr={10} mt={50}  >
        <Box borderBottom={"2px solid gray"}></Box>
    <Flex mt={50} gap={100} flexDirection={{xl:'row',lg:'row',base:'column'}} >
    <Box className='left' fontFamily={"'Inter', sans-serif"}>
        <Box cursor='pointer'>
     <Image src={logo} alt="Logo" w={"50%"} />
     </Box>
     <Text mt={10} >Lorem ipsum dolor sit amet consectetur adipisicing  <br /> pariatur atque rem Libero  atque, aliquam deleniti <br /> alias rem  cupiditate in. Minima!</Text>
<Box mt={25} mb={15}>

      <Text   as='b'  fontSize={{xl:'xl',lg:'xl',base:'md'}} >Accepted Payments</Text>
</Box>
      <Grid templateColumns={{xl:'repeat(4, 1fr)',lg:'repeat(4, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(1, 1fr)',base:'repeat(1, 1fr)'}} gap={3} mb={10} mt={5} w={{xl:"70%",lg:"70%",base:"30%"}} ml={2}
       cursor={'pointer'} >
         
        <Box border="1px solid gray" borderRadius={'5px'} p={2} >
         

     <Image src={logo1} alt="logo"  w={{md:"100%",lg:"100%",base:"60%"}} mt={1} ml={{xl:0,lg:0,md:'0',base:'4'}}  />
        
        </Box>
  

        <Box border="1px solid gray" borderRadius={'5px'} p={2} >
          
     <Image src={logo2} alt="logo"   w={{md:"100%",lg:"100%",base:"50%"}} h={5} mt={1}/>
     
        </Box>
  
   
      
        <Box border="1px solid gray"  borderRadius={'5px'} p={2}>
        
     <Image src={logo3} alt="logo"   w={{md:"100%",lg:"100%",base:"50%"}} h={6} mt={1}/>

    
        </Box>
   
   

        <Box border="1px solid gray"  borderRadius={'5px'} p={2}>
        
     <Image src={logo4} alt="logo"  w={{md:"70%",lg:"70%",base:"60%"}} h={5} mt={2} ml={1}/>
    
        </Box>
   


        <Box border="1px solid gray"   borderRadius={'5px'} p={2}>
      
     <Image src={logo5} alt="logo"   w={{md:"90%",lg:"90%",base:"60%"}} h={6} mt={1}/>
     
        </Box>

   

        <Box border="1px solid gray"  borderRadius={'5px'} p={2}>
     <Image src={logo6} alt="logo"   w={{md:"80%",lg:"80%",base:"60%"}} h={5} mt={1}/>
     
        </Box>
   
   

        <Box border="1px solid gray"  borderRadius={'5px'} p={2} >
        
     <Image src={logo7} alt="logo"  w={{md:"80%",lg:"80%",base:"60%"}} h={5} mt={1}/>
     
        </Box>
   
   
        <Box border="1px solid gray"  borderRadius={'5px'} p={2}>
         
     <Image src={logo8} alt="logo"  w={{md:"80%",lg:"80%",base:"60%"}} h={5} mt={1}/>
         
        </Box>
   

      </Grid>


          
        </Box>
 
    <Box className="right"  >
    
  <Table size={{base:'sm',xs:'xs'}} w={'wrap'} width={"100%"} >
  <Thead  >
    <Tr  >
         <Th fontSize={['xs', 'md','sm']}  >Department</Th>
          <Th fontSize={['xs', 'md','sm']} >About Us</Th>
         <Th fontSize={['xs', 'md','sm']}  >Services</Th>
         <Th fontSize={['xs', 'md','sm']} >Help</Th>
    </Tr>
  </Thead>
  <Tbody >
    <Tr >
        <Td fontSize={['xs', 'md']}>Fashion</Td>
        <Td fontSize={['xs', 'md']}>About ShopCart</Td>
        <Td fontSize={['xs', 'md']}>Gift Card</Td>
        <Td fontSize={['xs', 'md']}>Shopcart Help</Td>
    </Tr>
    <Tr>
        <Td fontSize={['xs', 'md']}>Education Product</Td>
        <Td fontSize={['xs', 'md']}>Carrers</Td>
        <Td fontSize={['xs', 'md']}>Mobile App</Td>
        <Td fontSize={['xs', 'md']}>Returns</Td>

    </Tr>
    <Tr>
   <Td fontSize={['xs', 'md']}>Frozen Food</Td>
   <Td fontSize={['xs', 'md']}>News and Blogs</Td>
   <Td fontSize={['xs', 'md']}>Shipping and Delivery</Td>
   <Td fontSize={['xs', 'md']}>Track Order</Td>
    </Tr>
    <Tr>
    <Td fontSize={['xs', 'md']}>Beverages</Td>
    <Td fontSize={['xs', 'md']}>Help</Td>
    <Td fontSize={['xs', 'md']}>Order Pickup</Td>
    <Td fontSize={['xs', 'md']}>Contact Us</Td>
    </Tr>
    <Tr>
      <Td fontSize={['xs', 'md']}>Organic Grocery</Td>
      <Td fontSize={['xs', 'md']}>Press Center</Td>
      <Td fontSize={['xs', 'md']}>Account Signup</Td>
      <Td fontSize={['xs', 'md']}>Feedback</Td>
    </Tr>
    <Tr>
      <Td fontSize={['xs', 'md']}>Office Supplies</Td>
      <Td fontSize={['xs', 'md']}>Shop By Location</Td>
      <Td fontSize={['xs', 'md']}></Td>
      <Td fontSize={['xs', 'md']}>Security & Fraud</Td>
    </Tr>
    <Tr>
      <Td fontSize={['xs', 'md']}>Beauty Products</Td>
      <Td fontSize={['xs', 'md']}>Shopcart Brands</Td>
    </Tr>
    <Tr>
      <Td fontSize={['xs', 'md']}>Books</Td>
      <Td fontSize={['xs', 'md']}>Affiliate & Partners</Td>
    </Tr>
    <Tr>
      <Td fontSize={['xs', 'md']}>Electronic & Gadget</Td>
      <Td fontSize={['xs', 'md']}>Ideas & Guides</Td>
    </Tr>
    <Tr>
      <Td fontSize={['xs', 'md']}>Travel Accesories</Td>
    </Tr>
    <Tr>
      <Td fontSize={['xs', 'md']}>Fitness</Td>
    </Tr>
    <Tr><Td fontSize={['xs', 'md']}>Sneakers</Td></Tr>
    <Tr><Td fontSize={['xs', 'md']}>Toys</Td></Tr>
    <Tr><Td fontSize={['xs', 'md']}>Furniture</Td></Tr>
  </Tbody>
  </Table>
      
    </Box>

    </Flex>
    <Box borderBottom={"2px solid gray"} mt={10} ></Box>
    
    <Flex justify={'space-between'} align={{base:"center",md:'left',sm:'left'}} mt={19} mb={20} fontFamily={"'Inter', sans-serif"}
    flexDirection={{base:'column',xl:'row',lg:'row'}}
    w={'wrap'}
    
    > 

     <Flex justify={'space-between'} align={"center"} gap={10}
     flexDirection={{base:'column',xl:'row',lg:'row',md:'row'}}
     >

      <Flex justify={'space-between'} align={'center'} gap={2}><BsFillBagCheckFill color='#d14d8f'/> Become Seller</Flex>
      <Flex justify={'space-between'} align={'center'} gap={2}><AiFillGift  color='#d14d8f'/> Gift Card</Flex>
      <Flex justify={'space-between'} align={'center'} gap={2}><FiHelpCircle  color='#d14d8f'/> Help Center</Flex>
     </Flex>


     <Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:"repeat(1,1fr)"}} align={"center"} gap={10} >
      <Text>Terms and Services</Text>
      <Text>Privacy and Policy</Text>
     </Grid>
     <Box>
      <Text w={'wrap'}>All Right reserved by Museming | 2022 </Text>
     </Box>
    </Flex>


    </Box>
  )
}

export default Footer
