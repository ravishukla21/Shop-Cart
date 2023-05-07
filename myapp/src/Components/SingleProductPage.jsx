import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const val = useParams();
    console.log(val,"singleproduct")
    return (
        <div>
            <h1>SIngleproduct</h1>
            SingleProductPage{val.id}
        </div>
    )
}

export default SingleProductPage