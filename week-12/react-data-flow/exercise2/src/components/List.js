import React from 'react'
import { Contact } from './Contact'

export const List = (props) => {
    
  return (
    <div>
        <ul>
        {props.contacts.map((contact, index) => (
          <Contact key={index} name = {contact} displayConvo={props.displayConvo}/>
        ))}
      </ul>
    </div>
  )
}
