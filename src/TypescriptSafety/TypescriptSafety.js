import React from 'react'
import Person from './Person'

const TypescriptSafety = () => {
  return (
    <div>
      <Person 
      name="Oleh"
      email="dmitrivoleg146@gmail.com"
      age={21}
      isMarried={true}
      friends={["jessika","jake","jerry","jasmine"]} />
    </div>
  )
}

export default TypescriptSafety