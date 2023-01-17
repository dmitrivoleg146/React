import React from 'react'
import { useCount } from './useCount'

const Count = () => {
    const {count, increase, decrease, reset} = useCount();
  return (
    <div>
        {count}
        <button onClick={increase}>Increase</button>
        <button>Decrease</button>
        <button>Reset</button>
    </div>
  )
}

export default Count