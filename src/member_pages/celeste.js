import react from 'react';
import { useState } from 'react';


function MyFunc () {
    const [show, setShow] = useState(true);
    // variables + functions

    function onButtonClick() {
        setShow(!show);
    }

    return (
        <div>
            {show ? (<p>hello</p>) : (<p>bye</p>)}
            <button onClick={onButtonClick}>button</button>
        </div>
    );
}

export default MyFunc;






