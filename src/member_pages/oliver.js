import react from 'react';
import {useState} from 'react';

function Oliver(){
    const [show, setShow] = useState(true);

    function onButtonClick(){
        setShow(false);
    }

    return(
        <div>
            <p>My name is Oliver. </p>
            <p>I like the air outside more than the air inside</p>
            <p>My favorite fruits to eat during the winter are oranges and grapefruits </p>
            {show ? (<p>hello!</p>) : (<p>bye!</p>)}
            <button onClick={onButtonClick}> This is a button </button>
        </div>
    );
}


export default Oliver;