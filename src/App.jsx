import axios, { Axios } from 'axios'
import { useState, useEffect } from 'react'
import TextboxList from './TextBoxes'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = () => {    
    axios
      .get("https://young-waters-82793.herokuapp.com/api/posts")
      .then(res => setMessages(res.data))
      .catch(err => console.log(err));
      console.log(messages.text)
  }

  return (
    <div className="App">
      <div>
        {messages.map((message) => (
          <div className={message.isAdmin ? 'adminBox' : 'responseBox'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
