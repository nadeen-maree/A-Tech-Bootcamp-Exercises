import './App.css';
import React, { useState } from 'react';
import { List } from './components/List';
import { Conversation } from './components/Conversation';

function App() {
const [conversationsState, setConversationsState] = useState({
    displayConversation: null,
    conversations: [
        {
            with: "Laura",
            convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", 
            convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", 
            convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
})


const contacts = conversationsState.conversations.map((conversation)=> conversation.with)

const displayConvo = (name) => {
  setConversationsState({
    ...conversationsState,
    displayConversation: name,
  });
};

const selectedConversation = conversationsState.conversations.find(
  (conversation) => conversation.with === conversationsState.displayConversation
);

const handleBackButtonClick = () => {
  setConversationsState({
    ...conversationsState,
    displayConversation: null,
  });
};

  return (
    <div className="App">
    
      {
      conversationsState.displayConversation == null ?
       (<List 
        contacts = {contacts}
        displayConvo={displayConvo}
        />)
       : 
       (<Conversation 
        convo={selectedConversation.convo}
        sender={conversationsState.displayConversation}
        onBackButtonClick={handleBackButtonClick}
        />)
      }
    </div>
  );
}

export default App;
