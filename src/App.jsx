import axios, { Axios } from 'axios'
import { useState, useEffect } from 'react'
import TextboxList from './TextBoxes'
import './App.css'

function App() {
  const [message, setMessage] = useState('') // Initialize message to an empty string

  useEffect(() => {
    getMessage()
  }, []) // This will run the effect only once when the component mounts

  const getMessage = () => {    
    axios
      .get("https://young-waters-82793.herokuapp.com/api/posts")
      .then(res => setMessage(res.data.message)) // Set message to the value of res.data.message
      .catch(err => console.log(err));
      console.log(message)
  }

  return (
    <div className="App">
      <div>
          <div className='textBox'><p>`Text Box Test Contains .message: `</p></div>
          <div className='commentBox'><p>Test Comment</p></div>
      </div>
    </div>
  )
}

export default App
