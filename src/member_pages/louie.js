import react from 'react';
import  { useState, useEffect } from 'react';

function CookieFunc() {
    const [cookies, setCookies] = useState(0);

    function onCookieClick() {
        setCookies(cookies + 1);
    }



    return (
        <div>
        {cookies < 10 ? (<p> :( u have very little cookies</p>) : (<p>Wow thats a lot of cookies</p>) }
        <p>{cookies} Cookies </p>
        <button onClick={onCookieClick}>Cookie</button>
        </div>

    );

}


export default CookieFunc;
