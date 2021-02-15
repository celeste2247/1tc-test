import React from 'react';
import { useState } from 'react';

function Annie () {
  const [show, setShow] = useState(true);

  function onButtonClick(){
    setShow(false);
  }

	return (
		<div> 
		<h1>Go Blue!</h1>
        </div>
		);
}

export default Annie;