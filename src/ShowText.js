import React from 'react'
import Text from './Text';
import { useEffect, useState } from 'react';

const ShowText = () => {
    const [showText, setShowText] = useState(false);
  return (
    <div>
        <button onClick={()=>{
            setShowText(!showText);
        }}>
         Show Text
        </button>
        {showText && <Text/>}
    </div>
  )
}

export default ShowText