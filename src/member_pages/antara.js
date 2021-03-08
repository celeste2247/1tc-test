import react from 'react';
import  { useState, useEffect } from 'react';

function Antara() {
    const [show, setShow] = useState(true);

    function onButtonClick() {
        setShow(false);
    }



    return (
        <div>
            <h1>Hi! I'm Antara :)</h1>
            <p>What's your name?</p>
            {show ? (<p>Hello!</p>) : (<p>Goodbye!</p>)}
            <button onClick={onButtonClick}>Button</button>
        </div>
    );

}


export default Antara;