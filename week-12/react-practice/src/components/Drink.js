import React from 'react'

export const Drink = (props) => {
  return (
    <div>
        {props.name}
        {props.price}
        {props.company}
        {props.category}
    </div>
  )
}
