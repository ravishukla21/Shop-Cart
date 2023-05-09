import React from 'react';
import "../styles/Discount.css";
import { Heading } from '@chakra-ui/react';

const Discount = () => {
    return (
        <div style={{width:"100%"}}><section className="get-discount-area">
            <div className="container">
                <div className="section-title-wrap">
                    <Heading as='h3' size='lg' mb='5'>Get Up to 70% off</Heading>
                </div>
                <div className="get-discount-item-wrap grid">
                    <div className="get-discount-single-item">
                        <div className="get-discount-content">
                            <h3 className="discount-title">Save</h3>
                            <div className="discount-price mb-20">
                                <span className="text-span-2">$</span>100{" "}
                            </div>
                            <div className="discount-paragraph">
                                Explore Our Furniture &amp; Home Furnishing Range
                            </div>
                        </div>
                        <div className="get-discount-thumbnail-wrap">
                            <img
                                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png"
                                loading="lazy"
                                alt=""
                                className="discount-image"
                            />
                        </div>
                    </div>
                    <div className="get-discount-single-item misty-rose">
                        <div className="get-discount-content">
                            <h3 className="discount-title">Save</h3>
                            <div className="discount-price mb-20 red-rose">
                                <span className="text-span-2">$</span>29
                            </div>
                            <div className="discount-paragraph">
                                Explore Our Furniture &amp; Home Furnishing Range
                            </div>
                        </div>
                        <div className="get-discount-thumbnail-wrap">
                            <img
                                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png"
                                loading="lazy"
                                alt=""
                                className="discount-image"
                            />
                        </div>
                    </div>
                    <div className="get-discount-single-item linen">
                        <div className="get-discount-content">
                            <h3 className="discount-title">Save</h3>
                            <div className="discount-price mb-20 color-two">
                                <span className="text-span-2">$</span>67{" "}
                            </div>
                            <div className="discount-paragraph">
                                Explore Our Furniture &amp; Home Furnishing Range
                            </div>
                        </div>
                        <div className="get-discount-thumbnail-wrap">
                            <img
                                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png"
                                loading="lazy"
                                alt=""
                                className="discount-image"
                            />
                        </div>
                    </div>
                    <div className="get-discount-single-item light-cyan">
                        <div className="get-discount-content">
                            <h3 className="discount-title">Save</h3>
                            <div className="discount-price mb-20 main-color">
                                <span className="text-span-2">$</span>59
                            </div>
                            <div className="discount-paragraph">
                                Explore Our Furniture &amp; Home Furnishing Range
                            </div>
                        </div>
                        <div className="get-discount-thumbnail-wrap">
                            <img
                                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png"
                                loading="lazy"
                                alt=""
                                className="discount-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Discount