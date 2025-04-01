import React from 'react'

const Box = (props) => {
  console.log(props);
  
  return (
    <div className='box'>
      <h1>{props.name}</h1>
      {props.item && (
        <img src={props.item.img} alt="..." />
      )}
      <h2>WIN</h2>
    </div>
  )
}

export default Box