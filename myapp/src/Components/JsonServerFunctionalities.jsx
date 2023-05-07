import { Box, Flex,Select,RadioGroup,Stack,Radio } from "@chakra-ui/react"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import styles from "../styles/JsonServerFunctionalities.module.css"
import { handleCategory,handleFilter,handleSort } from "../logic/logicalFunc"
export const JsonServerFunctionalities=({page})=>{   

    const[searchParams,setSearchParams]=useSearchParams()
    const initialOrder=searchParams.get("order")
    const[order,setOrder]=useState(initialOrder||"")
    const initialCategory=searchParams.get("category")
    const[category,setCategory]=useState(initialCategory||"Headphone")
    const initialBrand=searchParams.get("brand")
    const[brand,setBrand]=useState(initialBrand||"")
    useEffect(()=>{
        let params={category}
        brand&&(params.brand=brand)
        order&&(params.order=order)
        page&&(params.page=+page)
        setSearchParams(params)
    },[category,brand,order,page])
    return<Flex className={styles.properties}> 
   
    <Select placeholder='Category' w="10%" value="" onChange={(e)=>handleCategory(e,setCategory)}>
  <option value='Headphone'>Headphones</option>
  <option value='shoes'>Shoes</option>
  <option value='Jewellery'>Jewellery</option>
   </Select>
  <Select placeholder='All Filters' w="10%" value={""} onChange={(e)=>handleFilter(e,setBrand)}>
  <option value='boAt'>boat</option>
  <option value='JBL'>JBL</option>
  <option value='FIFINE'>FIFINE</option>
  <option value='Sony'>Sony</option>
  <option value='ZEBRONICS'>ZEBRONICS</option>
  <option value='PTron'>PTron</option>
  <option value='Campus'>Campus</option>
  <option value='ACTION'>ACTION</option>
  <option value='Generic'>Generic</option>
  <option value='Reebok'>Reebok</option>
  <option value='Shining Diva Fashion'>Shining Diva Fashion</option>
  <option value='brd jewelry'>brd jewelry</option>
  <option value='YouBella Store'>YouBella Store</option>
</Select>

<Select placeholder='sort' w="10%" onChange={(e)=>handleSort(e,setOrder)}>
  <option value='asc'>Asc</option>
  <option value='desc'>Desc</option>
</Select>
    </Flex>
}
