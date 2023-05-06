import { Grid, GridItem, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react'
import "../styles/HomePage.css"

const Categories = () => {
    return (
        <div className='categories_section'>
            <Heading as='h3' size='lg' mb='5'>Shop Our Top Categories</Heading>

            <Spacer />
            <Grid
                className="catgrid"
                h="200px"
                templateColumns={[
                    "repeat(2, 1fr)", // For mobile screens
                    "repeat(3, 1fr)", // For iPad screens
                    "repeat(6, 190px)", // For larger screens
                ]}
                gap={5}
            >
                <GridItem className="categories head-text" colSpan={1}>
                    <div>
                        <img
                            className="categories"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                            alt=""
                        />
                    </div>
                    <div class="text-on-image">
                        <Text fontSize='20px' color='white' as='b'>
                            Sofa
                        </Text>
                    </div>
                </GridItem>
                <GridItem className="categories head-text" colSpan={1}>
                    <div>
                        <img
                            className="categories"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"
                            alt=""
                        />
                    </div>
                    <div class="text-on-image">
                        <Text fontSize='20px' color='white' as='b'>
                            Hand Bags
                        </Text>
                    </div>
                </GridItem>
                <GridItem className="categories head-text" colSpan={1}>
                    <div>
                        <img
                            className="categories"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"
                            alt=""
                        />
                    </div>
                    <div class="text-on-image">
                        <Text fontSize='20px' color='white' as='b'>
                            Books
                        </Text>
                    </div>
                </GridItem>
                <GridItem className="categories head-text" colSpan={1}>
                    <div>
                        <img
                            className="categories"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"
                            alt=""
                        />
                    </div>
                    <div class="text-on-image">
                        <Text fontSize='20px' color='white' as='b'>
                            Tech
                        </Text>
                    </div>
                </GridItem>
                <GridItem className="categories head-text" colSpan={1}>
                    <div>
                        <img
                            className="categories"
                            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"
                            alt=""
                        />
                    </div>
                    <div class="text-on-image">
                        <Text fontSize='20px' color='white' as='b'>
                            Sneakers
                        </Text>
                    </div>
                </GridItem>
                <GridItem className='categories head-text' colSpan={1}>
                    <div>
                        <img className='categories' src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png" alt="" />
                    </div>
                    <div class='text-on-image'>
                        <Text fontSize='20px' color='white' as='b'>
                            Travel
                        </Text>
                    </div>
                </GridItem>
            </Grid>
        </div>
    )
}

export default Categories; 