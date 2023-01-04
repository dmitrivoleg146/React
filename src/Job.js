import React from 'react'
import styles from "./App.module.css";

const Job = (props) => {
  return (
    <div>
        <h1>{props.salary}</h1>
        <h1>{props.title}</h1>
        <h1>{props.company}</h1>
    </div>
  )
}

export default Job