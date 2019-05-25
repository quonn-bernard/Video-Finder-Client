import React from 'react'
import './Backdrop.css'

function Backdrop (props){
  return (
    <div className="backdrop" onClick={props.backdropClick}></div>
  )
}

export default Backdrop