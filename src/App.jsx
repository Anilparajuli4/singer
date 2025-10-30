import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingerPortfolio from './Template'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SingerPortfolio/>
      
    </>
  )
}

export default App
