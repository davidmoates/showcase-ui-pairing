import React from 'react'

const WikiCard = props => {
  return(
  <div>
    <h1>{props.title}</h1>
    <img src={props.url} alt={props.title} />
  </div>)
}

export default WikiCard
