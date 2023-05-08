import { Box, Button,Grid,Heading,Image } from "@chakra-ui/react"
import ProductCard from "../Components/ProductCard"
import { useEffect, useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import { getProducts } from "../Redux/AuthReducer/action"
import { JsonServerFunctionalities } from "../Components/JsonServerFunctionalities"
import { useSearchParams } from "react-router-dom"
const ProductPage=()=>{
    const[ searchParams,setSearchParams]=useSearchParams()
    let initialPage=searchParams.get(Number("page"))
    const[page,setPage]=useState(initialPage||1)
    
    let paramsObj={
        params: {
          category: searchParams.get("category"),
          brand:searchParams.get("brand")&&searchParams.get("brand"),
          _sort:searchParams.get("order")&&"price",
          _order:searchParams.get("order"),
          _page:searchParams.get("page")
        }
      }
      function handleClick(unit){
        setPage(page+unit)
      }

    const dispatch=useDispatch()
    const store=useSelector((state)=>state.AuthReducer)
    const {productData}=store;
    // console.log(productData)
    useEffect(()=>{
        dispatch(getProducts(paramsObj))
    },[searchParams])
    return<Box>
        {/* <Heading>{count}</Heading> */
    

    <Box border="0px solid red" m={{base:'5px 45px 10px 50px',}} >


 

    <Box position="relative" h={'500px'}  >

  <Image w="100%" src="https://w0.peakpx.com/wallpaper/480/705/HD-wallpaper-enchanted-by-the-music-girl-model-music-headphones-white-woman-pink.jpg" h='100%' />
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
  
}


        <JsonServerFunctionalities page={page}/>
    <Grid templateColumns={{xl:'repeat(3, 1fr)' ,lg:'repeat(3, 1fr)' ,base:'repeat(1, 1fr)' }}  >
        {productData?.map(({img,price,brand,title,id})=><ProductCard key={id} id={id} title={title.substring(0,50)} price={price} brand={brand} img={img} />)}
    </Grid>
    <Box style={{border:"0px solid red",textAlign:"center"}}>
        <Button isDisabled={page===1} onClick={()=>handleClick(-1)}>prev</Button>
        <Button isDisabled>{page}</Button>
        <Button isDisabled={page>3} onClick={(e)=>handleClick(1)}>next</Button>
        </Box>
    
    </Box>
}
export  default ProductPage