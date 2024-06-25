import { useState } from 'react'


import Chatbox from './components/Chatbox'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chatbox/>
    </>
  )
}

export default App
