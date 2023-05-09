import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduct, getproduct } from '../Redux/ProductReducer/action';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthEdit from './AuthEdit';


const AuthProducts = () => {   
    const store = useSelector((store) => store.ProductReducer.todos);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    console.log(store, "storegetall")
    useEffect(() => {
        dispatch(getproduct())

    }, [])
    const handleDelete=(id)=>{
        console.log(id,"idcheck")
        dispatch(deleteproduct(id))
    }
    const handleEdit=(id)=>{
        console.log(id,"navigateid")
      navigate()
    }
  
    return (
        <div>
        <div style={{ display: "flex", columnGap: "20px" }}>
        <button style={{ border: "1px solid black", background: "#34d5eb", padding: "5px 40px", borderRadius: "20px" }}>
          <Link to="/authproducts">ALL PRODUCTS</Link>
          {"   "}{"   "}

        </button>

        <button style={{ border: "1px solid black", background: "#34d5eb", padding: "5px 40px", borderRadius: "20px" }}>

          <Link to="/authform">ADD PRODUCT</Link>
          {"   "}{"   "}


        </button>








      </div>

            <table style={{ border: "1px solid black",width:"100%" }}>
                <thead>
                    <tr style={{ border: "1px solid black" }}>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>

                </thead>

                {store.length > 0 && store.reverse().map((el, index) => {
                    return <tbody key={index}>
                        <tr >
                            <td>{el.title}</td>
                            <td>{el.image}</td>
                            <td>{el.price}</td>
                            <td>{el.description}</td>
                            <td>{el.quantity}</td>
                            <td><button onClick={()=>handleDelete(el.id)}>Delete</button></td>
                            <td><Link to={`/authedit/products/${el.id}`}> <button>EDIT PRODUCT</button></Link></td>

                        </tr>


                    </tbody>



                })}


            </table>





        </div>
    )
}

export default AuthProducts