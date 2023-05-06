import React, { useEffect, useState } from 'react';
import { todaydeals } from "./todaysdeals.js"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from "../styles/Home.module.css";
const Slider = () => {
    const [start12, setstart12] = useState(0)
    const [product456, setproduct456] = useState("")

    useEffect(() => {
        setproduct456(document.querySelectorAll(`.${styles.todaydealsproductitem}`))

    }, [])
    const todaydealslideright = () => {
        setstart12((prev) => prev + 150)
        // start12+=100
        //  settodaydealleft(document.querySelectorAll(`.${styles.todaydealsproductitem}`))
        product456.forEach(el => {
            // console.log(el, "elelelelleleelel")
            el.style.transform = `translateX(${start12}%)`;
        })

    }


    const todaydealslideleft = () => {
        setstart12((prev) => prev - 150)

        // start12-=100


        product456.forEach(el => {
            // console.log(el, "elelelelleleelel")
            el.style.transform = `translateX(${start12}%)`;
        })


        //  settodaydealleft(document.querySelectorAll(`.${styles.todaydealsproductitem}`))



    }



    return (
        <div>
            <div className={styles.todaydealscontainer}>
                <div className={styles.todaydealsheading}>
                    {/* <h1>Todays Deals</h1>
                    <p><a href=".">See all deals</a></p> */}

                </div>
                <div className={styles.todaydealsproductcontainer}>
                    <div className={styles.todaydealsbtncontainer}>
                        <button className={styles.todaydealsbtn} onClick={() => { todaydealslideleft() }}>
                            <ArrowBackIosNewIcon />
                        </button>
                        <button className={styles.todaydealsbtn}>

                            <ArrowForwardIosIcon onClick={() => { todaydealslideright() }} />
                        </button>
                    </div>
                    <div className={styles.todaydealsproductlist}>



                        {todaydeals?.map((el, index) => {
                            return <div className={styles.todaydealsproductitem} key={index}>
                                <div className={styles.imagefit} style={{ width: "100%" }}>
                                    <img src={el.img}></img>
                                </div>
                                <div className={styles.discountcontainer}>
                                    <a href=".">Up to {el.discount}% off</a>
                                    <a href=".">{el.Dealofday}</a>

                                </div>
                                <p style={{ marginTop: "4px" }}>{el.desc}</p>
                            </div>
                        })}





                    </div>

                </div>

            </div>
        </div>
    )
}

export default Slider