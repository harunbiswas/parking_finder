import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App
