import {useState} from "react"
export const useToggle=(initialValue=false)=>{
   const [state, setState] = useState(initialValue);
   const toggle = () =>{
    setState((prev)=>!prev)
   }

   return  [state, toggle];
}
// export const useToggle=(initialValue=false)=>{
//     const [state, setState] = useState(initialValue);
//    //hooks handle a state logic not a UI logic
//     const toggle = () =>{
//         setState((prev)=>!prev)
//     }
//     return [state, toggle];
