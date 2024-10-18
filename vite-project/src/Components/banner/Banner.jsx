import React from 'react'
import {useSelector} from "react-redux"

const Banner = () => {
    let ami = useSelector((state) => state.counter.value)
    
  return (
    <div>Banner {ami}</div>
  )
}

export default Banner