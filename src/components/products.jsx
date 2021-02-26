import React, { Component } from 'react'
import { Heading, Flex, Avatar, Box, Text, Badge } from "@chakra-ui/react"

export class Products extends Component {
state = {
products:[
{
name:"Cookie Maker",
price: 10,
addedClickPower:1,
addedCookiePerSec:0,
power:1,
description:"Increase your clicking Power by"
},
{
name:"Cookie Master",
price: 20,
addedClickPower:2,
addedCookiePerSec:0,
power:2,
description:"Increase your clicking Power by"
},
{
name:"Cookie Monster",
price: 100,
addedClickPower:10,
addedCookiePerSec:0,
power:10,
description:"Increase your clicking Power by"
},
{
name:"Cookie Genius",
price: 500,
addedClickPower:50,
addedCookiePerSec:0,
power:50,
description:"Increase your clicking Power by"
},
{
name:"Cookie Emperor",
price: 2000,
addedClickPower:200,
addedCookiePerSec:0,
power:200,
description:"Increase your clicking Power by"
},
{
name:"Cookie Factory",
price: 10,
addedClickPower:0,
addedCookiePerSec:1,
power:1,
description:"Increase your cookie speed per second by"
},
{
name:"Cookie Industry",
price: 20,
addedClickPower:0,
addedCookiePerSec:2,
power:2,
description:"Increase your cookie speed per second by"
},
{
name:"Cookie Country",
price: 100,
addedClickPower:0,
addedCookiePerSec:10,
power:10,
description:"Increase your cookie speed per second by"
},
{
name:"Cookie Planet",
price: 500,
addedClickPower:0,
addedCookiePerSec:50,
power:50,
description:"Increase your cookie speed per second by"
},
{
name:"Cookie Universe",
price: 2000,
addedClickPower: 0,
addedCookiePerSec:200,
power:200,
description:"Increase your cookie speed per second by"
},
{
name: "Emperor of Cookie Universe",
price: 20000,
addedClickPower: 200,
addedCookiePerSec: 200,
power: 200,
description: "Increase your cookie speed per second and your clicking Power by"
},
]
}

render() {
return (
<>
    <Heading as="h2" size="xl" isTruncated>
        Upgrades
    </Heading>
    <Heading as="h2" size="md" isTruncated>
        Get more cookies to discover more upgrades !
    </Heading>
    {
    this.state.products.map(products => {
    if (this.props.numCookies >= products.price){
    return(<div className="py-4">
        <Flex onClick={()=> this.props.clicking(products.addedClickPower, products.addedCookiePerSec, products.price)}>
            <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H3WorKnP10uIQnMOwz0wwbs3uMY-MPCJhQ&usqp=CAU" />
            <Box ml="3">
                <Text fontWeight="bold">
                    {products.name}
                    <Badge ml="1" colorScheme="green">
                        {products.price} cookies
                    </Badge>
                </Text>
                <Text fontSize="sm">{products.description} {products.power}</Text>
            </Box>
        </Flex>

    </div>
    );
    }
    }
    )
    }
</>
)
}
}