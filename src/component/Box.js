import React from 'react'

const Box = (props) => {
  let result;
  if(props.title === "Computer" && props.result !== "tie" && props.result !=="") {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.name}</h1>
      <img className='item-img' src={props.item && props.item.img} alt="..." />
      <h2>{result}</h2>
    </div>
  )
}

export default Box