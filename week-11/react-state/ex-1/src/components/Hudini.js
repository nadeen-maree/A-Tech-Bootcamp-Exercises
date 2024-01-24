import React, { Component } from 'react';
import { useState } from 'react';

const Hudini = () => {
    const [show, setShow] = useState(false)
    const toggleShow = () => {
        return show ? "Now you see me" : "Now you don’t";
       
    }

    const changeState = () => {
        setShow(!show)
    }
    return(
        <div>
            {toggleShow()}
            <button onClick={changeState}>Click!</button>
        </div>
    )
}

export default Hudini