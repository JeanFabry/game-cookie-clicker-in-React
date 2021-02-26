import React, { Component, useState} from 'react'
import { Image, Heading , Flex} from "@chakra-ui/react"

export const Clicker = (clicking,number, strength, speed) => (
        <div>        
        <Flex justifyContent="space-around">
        <div w="50%">
                <Image
                    borderRadius="full"
                    objectFit="cover"
                    boxSize="300px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H3WorKnP10uIQnMOwz0wwbs3uMY-MPCJhQ&usqp=CAU"
                    alt="Cookie"
     onClick={() => clicking(strength)} />  
        </div>
            <Flex ml="50px" w="50%" flexDirection="column" justifyContent="center">
                <Heading as="h2" size="xl" isTruncated>
                    Click the cookie !
            </Heading>
                <h3 fontSize="lg">Number of cookies: {number}  </h3>
                <h3 fontSize="lg">Cookie Clicking Power = {strength} </h3> 
                <h3 fontSize="lg">Cookie speed per second = {speed} </h3> 
            </Flex>
        </Flex>
    </div>
)
