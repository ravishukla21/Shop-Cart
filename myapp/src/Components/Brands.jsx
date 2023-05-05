import React from 'react'
import "../styles/Brands.css"
import { Heading } from '@chakra-ui/react'

const Brands = () => {
    return (
        <div>
            <section className="choose-brand-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <Heading as='h3' size='lg' mb='5'>Choose by Brand</Heading>
                    </div>
                    <div className="choose-brand-item-wrap  grid-container grid">
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Staples</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Sprouts</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Grocery outlet</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Mollie stones</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Sports Basement</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Container Store</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Target</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                        <div
                            className="choose-brand-single-item"
                        >
                            <div className="choose-brand-thumbnail-wrap">
                                <img
                                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="deal-image"
                                />
                            </div>
                            <div className="choose-brand-content">
                                <h3 className="brand-title">Bevmo!</h3>
                                <div className="delivery-time">Delivery with in 24 hours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Brands