import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup, Flex, Spacer, Center } from '@chakra-ui/react'
// import { Box, Rating, Typography } from '@mui/material';

import React, { useState } from 'react'

const ProductCard = () => {
    // const [value, setValue] = useState < number | null > (2);

    return (
        <div style={{ margin: "50px" }}>
            <Card maxW='sm' >
                <CardBody>
                    <Image
                        src='https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png'
                        alt='Gaming Headphone'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Flex alignItems={'center'}>
                            <Heading size='md'>Gaming Headphone</Heading>
                            <Spacer />
                            <Text
                             color='black.800' fontSize='2xl'>
                                $239
                            </Text>
                        </Flex>
                        <Text fontSize='10px' as='sub'>
                            Table with air purifier,stained venner/black
                        </Text>

                    </Stack>
                </CardBody>
                {/* mui */}
                {/* <Rating name="read-only" value={5} readOnly /> */}
                {/* mui end */}

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button style={{ borderRadius: "30px", padding: "20px 15px", backgroundColor: "#003d29", color: "white" }} colorScheme="teal"
                            variant='outline'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductCard