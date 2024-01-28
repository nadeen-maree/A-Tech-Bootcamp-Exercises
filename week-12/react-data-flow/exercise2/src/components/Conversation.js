import React from 'react'

export const Conversation = (props) => {
  return (
    <div>
        <div>
        {props.convo.map((message, index) => (
            <div key={index}>
            <span className="sender">{message.sender === 'self' ? 'Me' : props.sender}</span>: "{message.text}"
            </div>
        ))}
        </div>
        <button className="back" onClick={props.onBackButtonClick}>
            Back
        </button>
    </div>
  )
}
