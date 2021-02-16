import React from 'react';
import { useState } from 'react';

function Alice() {
    const [show, setShow] = useState(true);

    function onButtonClick() {
        setShow(false);
    }

    return (
        <div>
            <h1> Hi! I'm Alice :) Nice to meet you.</h1>
            <p> Fun fact: I like to draw and play League of Legends.</p>

            {show ? (<p>:)</p>) : (<p>:(</p>)}
            <button onClick={onButtonClick}>Button</button>
        </div>
    );
}

export default Alice;