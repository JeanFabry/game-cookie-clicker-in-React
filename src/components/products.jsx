import React, { Component } from 'react'
import { Heading, Flex, Avatar, Box, Text, Badge } from "@chakra-ui/react"

export class Products extends Component {
state = {
products:[
{
name:"Cookie Maker",
productBought:0,
price: 10,
addedClickPower:1,
addedCookiePerSec:0,
power:1,
description:"Increase your clicking Power by"
},
{
name:"Cookie Master",
productBought:0,
price: 20,
addedClickPower:2,
addedCookiePerSec:0,
power:2,
description:"Increase your clicking Power by"
},
{
name:"Cookie Monster",
productBought:0,
price: 100,
addedClickPower:10,
addedCookiePerSec:0,
power:10,
description:"Increase your clicking Power by"
},
{
name:"Cookie Genius",
productBought:0,
price: 500,
addedClickPower:50,
addedCookiePerSec:0,
power:50,
description:"Increase your clicking Power by"
},
{
name:"Cookie Emperor",
productBought:0,
price: 2000,
addedClickPower:200,
addedCookiePerSec:0,
power:200,
description:"Increase your clicking Power by"
},
{
name:"Cookie Factory",
productBought:0,
price: 10,
addedClickPower:0,
addedCookiePerSec:1,
power:1,
description:"Increase your cookie speed/s by"
},
{
name:"Cookie Industry",
productBought:0,
price: 20,
addedClickPower:0,
addedCookiePerSec:2,
power:2,
description:"Increase your cookie speed/s by"
},
{
name:"Cookie Country",
productBought:0,
price: 100,
addedClickPower:0,
addedCookiePerSec:10,
power:10,
description:"Increase your cookie speed/s by"
},
{
name:"Cookie Planet",
productBought:0,
price: 500,
addedClickPower:0,
addedCookiePerSec:50,
power:50,
description:"Increase your cookie speed/s by"
},
{
name:"Cookie Universe",
productBought:0,
price: 2000,
addedClickPower: 0,
addedCookiePerSec:200,
power:200,
description:"Increase your cookie speed/s by"
},
{
name: "Emperor of Cookie Universe",
productBought:0,
price: 20000,
addedClickPower: 200,
addedCookiePerSec: 200,
power: 200,
description: "Increase your cookie speed/s and your clicking Power by"
},
]
};

    addAProduct = (product) => {
        let count = product;
        count +=1;
        
    }

showNumberOfUpdates = (name, numberBought) => {
    if (numberBought != 0) {
        return (<Text fontSize="sm"> You have {numberBought} {name}</Text>)
}
};

render() {
return (
<>
    <Heading as="h2" size="lg" isTruncated>
        Upgrades
    </Heading>
    <p fontsize="sm" isTruncated>
        Get more cookies to discover upgrades !
    </p>
    {
    this.state.products.map((products, i) => {
    if (this.props.numCookies >= products.price){
    return(<div className="py-4">
        <Flex onClick={()=> {
            let copyArr = [...this.state.products]
            copyArr[i].productBought+=1;
            this.setState({products:copyArr})

            this.props.clicking(products.addedClickPower, products.addedCookiePerSec, products.price)}}>
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
        {this.showNumberOfUpdates(products.name, products.productBought)}
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