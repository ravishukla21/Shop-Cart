import React from 'react'
import "../styles/DiscountBanner.css"

const DiscountBanner = () => {
    return (
        <div><section className="discount-banner-two" >
            <div className="container">
                <div className="discount-banner-content-two d-flex">
                    <div className="discount-banner-content-inner">
                        <h2 className="discount-title mw100">
                            Get 5% Cash back
                        </h2>
                        <p className="banner-discount-paragraph mb-30">
                            on Shopcart.com
                        </p>
                        <div className="is-magnetic">
                            <div className="btn-wrapper">
                                <a
                                    href="#"
                                    className="primary-button bg-main w-inline-block"
                                >
                                    <div className="button-content">
                                        <div className="button-color">Learn More</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="discount-card-thumbnail-wrap">
                        <div className="card-one">
                            <img
                                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"
                                loading="lazy"
                                alt=""
                                className="card-image"
                            />
                        </div>
                        <div className="card-two">
                            <img
                                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad08ebe75690_visa%20card%2002-min.png"
                                loading="lazy"
                                alt=""
                                className="card-image"
                            />
                        </div>
                        <div className="card-three">
                            <img
                                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea1a963f08a8c3dcd7c945_visa%20card%2003.svg"
                                loading="lazy"
                                alt=""
                                className="card-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default DiscountBanner