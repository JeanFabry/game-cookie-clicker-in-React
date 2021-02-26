import { Flex, Box } from "@chakra-ui/react";
import {Header} from "../components/header"
import React, { Component, useState } from 'react'
import { Products } from '../components/products'
import { Clicker } from '../components/clicker'

export class Home extends Component{
state = {
number: 0,
clickingStrength: 1,
clickingPerSec: 0,
product: 0,
}

clicking = (clickingStrength) => {
// this.setState({number: this.state.cookies.number += 1});
let count = this.state.number;
count += clickingStrength;
this.setState({ number: count });
}

buyProduct=(powerClick, powerSpeed,price)=>{
    let strength = this.state.clickingStrength;
    let speed = this.state.clickingPerSec;
    let number = this.state.number;
    number -= price;
    strength += powerClick;
    speed += powerSpeed;
    this.setState({ clickingStrength: strength, clickingPerSec: speed, number });
    // this.setState({ clickingPerSec: speed  });
    // this.setState({ number});
}

clickingInterval = setInterval(() => {
    let count = this.state.number
    count += this.state.clickingPerSec
this.setState({ number: count })
}, 1000);

render() {
return( 
    <Box backgroundImage="url('https://media.giphy.com/media/l3vRmjIZpfYp8MLwA/giphy.gif')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize= "cover"
        height= "100vh"
    padding= "0"
    margin= "0"
    color="white">
<Flex w="100vw" h="100vh" justifyContent="center" alignItems="center" flexDirection="column">
    <Header />
    <Flex w="90%" p="30px" justifyContent="center">
        <div w={1/5}>
            <Products clicking={this.buyProduct} numCookies={this.state.number}/>
        </div>
        <div w={1 / 3} className="clicker">{Clicker(this.clicking, this.state.number, this.state.clickingStrength, this.state.clickingPerSec)}</
    div>
    </Flex>
</Flex>
        </Box>)
}
}