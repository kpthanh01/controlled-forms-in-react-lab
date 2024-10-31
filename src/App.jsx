import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bookshelf from './components/Bookshelf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  )
}

export default App
