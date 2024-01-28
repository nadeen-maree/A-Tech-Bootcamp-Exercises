import React from 'react'

export const Contact = (props) => {
    const handleClick = () => {
        props.displayConvo(props.name);
      };
  return (
    <div>
        <p onClick={handleClick}>{props.name}</p>
    </div>
  )
}
