export function handleCategory(e,setCategory){
    console.log(e.target.value)
    setCategory(e.target.value)
}
export const handleFilter=(e,setBrand)=>{
    console.log(e.target.value)
    setBrand(e.target.value)
}
export const handleSort=(e,setOrder)=>{
  setOrder(e.target.value)
}