import { useState } from 'react'
import Timer from './Timer'
import './App.css'

function App() {
  const [name, setName] = useState(localStorage.getItem("name") ?? "Anon")
  const [time, setTime] = useState(10);

  return (
    <>
      <label>
        <span>Username:  </span>
        <input value={name} onChange={(e) => {
          setName(e.target.value);
          localStorage.setItem("name", name)
        }
        } />
      </label>
      <br />
      <label>
        <span>Seconds:  </span>
        <input type="number" value={time} onChange={(e) => {
          const newTime = Number.parseInt(e.target.value);
          setTime(isNaN(newTime) ? 10 : newTime);
        }} />
      </label>
      <br />
      <h2>{name}</h2>
      <Timer initTime={time} precision={10} name={name} />
    </>
  )
}

export default App

