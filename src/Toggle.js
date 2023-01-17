import React, {useState} from 'react'
import { useToggle } from './useToggle'


const Toggle = () => {
    // const [isVisible, toggle] = useToggle()
    // const {state,toggle} =useToggle();
     // if we return an array in custom hook
    // const {state, setState} = useState(); // if we return an object in custom hook, change 
    //out variable in state hook on the same as in object
    const [isVisible2, toggle2] = useToggle();
  return (
    <div>
        {/* // custom hook */}
        {/* <button onClick={toggle}>
          {state ? "Hide" : "Show"}
        </button>

        {state && <h1>Hidden text</h1>} */}

        <button onClick={toggle2}>
          {isVisible2 ? "Hide" : "Show"}
        </button>

        {isVisible2 && <h1>Hidden text</h1>}
        {/* <button onClick={()=>setIsVisible((prev)=> !prev)}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1>Hidden Text</h1>} */}
    </div>
  )
}

export default Toggle