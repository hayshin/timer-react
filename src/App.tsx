import { useState } from 'react'
import Timer from './Timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(localStorage.getItem("name") ?? "Anon")

  return (
    <>
      <label>
        Username:
        <input defaultValue={name} onChange={(e) => {setName(e.target.value); localStorage.setItem("name", name)}} />
        </label>
      <h2>{name}</h2>
      <Timer initTime={3} precision={10} name={name}/>
    </>
  )
}

export default App
