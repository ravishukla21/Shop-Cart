import React, { useEffect, useState } from 'react';
import "../styles/Singlepage.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProductPage = () => {   



  const [product456,setproduct456]=useState({})
  const imgs = document.querySelectorAll('.img-select a');
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  const {brand,category,description,id,img,price,quantity,rating,title}=product456;
  const old=price+50

 //   brand
// : 
// "MadRabbit"
// category
// : 
// "Headphone"
// description
// : 
// "Headphones with Foldable Over Ear Wireless Bluetooth(Black)"
// id
// : 
// 2
// img
// : 
// ['https://m.media-amazon.com/images/I/41SEDU2d-VL._AC_UY218_.jpg']
// price
// : 
// 329
// quantity
// : 
// 1
// rating
// : 
// 5
// title
// : 
// "MadRabbit Touch ANC"

  function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  }

  window.addEventListener('resize', slideImage);

  const val=useParams();
  useEffect(()=>{

  axios.get(`https://si2s8l.sse.codesandbox.io/products/${val.id}`).then((res)=>{
    setproduct456(res.data)
  })
  },[val])

  console.log(product456,"products")
  return (

    <div style={{marginTop:"20px"}} class="card-wrapper">

      <div class="card">

        <div style={{width:"60%"}} class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img  src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
              <img src={img} alt="shoe image" />
            </div>
          </div>
          <div class="img-select">
            <div class="img-item">
              <a href="#" data-id="1">
                <img src={img} alt="shoe image" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="2">
                <img src={img} alt="shoe image" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="3">
                <img src={img} alt="shoe image" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="4">
                <img src={img} alt="shoe image" />
              </a>
            </div>
          </div>
        </div>

        <div class="product-content">
          <h2 class="product-title">{brand}</h2>
          <a href="#" class="product-link">visit {brand} store</a>
          <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span>4.7(21)</span>
          </div>

          <div class="product-price">
            <p class="last-price">Old Price: <span>${old}</span></p>
            <p class="new-price">New Price: <span>${price} </span></p>
          </div>

          <div class="product-detail">
            <h2>about this item: </h2>
            <p>{category}</p>
            <p>{description}</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>{quantity}</span></li>
              <li>Category: <span>{category}</span></li>
              <li>Shipping Area: <span>India</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>
          <div style={{ marginTop: "-2px" }} class="social-links">
            <p>  Select colors: </p>
            <a style={{ background: "red" }} href="#">
              <i class=""></i>
            </a>
            <a style={{ background: "blue" }} href="#">
              <i class=""></i>
            </a>
            <a style={{ background: "brown" }} href="#">
              <i class=""></i>
            </a>
            <a style={{ background: "black" }} href="#">
              <i class=""></i>
            </a>
            <a style={{ background: "pink" }} href="#">
              <i class=""></i>
            </a>
          </div>

          <div class="purchase-info">

            <span>Quantity: {"                               "}<input style={{ width: "125px", border: "2px solid black", fontWeight: "bolder" }} type="number" min="1" defaultValue={"1"} /></span>
            <br />
            <button style={{ width: "125px" }} type="button" class="btn">
             
              <Link to="/payment"> Add to Cart</Link>
            </button>

            <button style={{ width: "125px" }} type="button" class="btn">Buy Now {"    "} </button>
          </div>


        </div>
      </div>
    </div>




  )
}

export default SingleProductPage