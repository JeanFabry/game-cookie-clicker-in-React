import React, { Component, useState} from 'react'
import { Avatar, Heading } from "@chakra-ui/react"

export const Clicker = (clicking,number, strength, speed) => (
        <div>
        <Heading as="h2" size="xl" isTruncated>
            Clicking Area
            </Heading>
            <h3>Number of cookies: {number}  </h3>
        <Avatar size="2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H3WorKnP10uIQnMOwz0wwbs3uMY-MPCJhQ&usqp=CAU" onClick={() => clicking(strength)} />  
        
        <p >Click the cookie </p>
        <h3>Cookie Clicking Power = {strength} </h3> 
            <h3>Cookie speed per second = {speed} </h3> 
        </div>
)
