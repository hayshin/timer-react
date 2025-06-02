import { useState } from 'react'
import Timer from './Timer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Anon")

  return (
    <>
      <label>
        Username:
        <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
        </label>
      <h1>{name}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Timer initTime={10} precision={1}/>
    </>
  )
}

export default App
