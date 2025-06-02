import { useState, useEffect } from 'react'
import './Timer.css'

// precision - delta of milliseconds
function Timer({initTime, precision}: {initTime: number, precision: number}) {
  let multiplier = 1000 / precision;
  initTime *= multiplier

  const [seconds, setSeconds] = useState(initTime)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (running) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds-1);
      }, precision)
    }     return () => clearInterval(interval);
  }, [running])

  return (
    <>
      <div className="card">
        <h1> {(seconds/multiplier).toFixed(Math.log10(multiplier))} seconds </h1>
        <button onClick={() => setRunning(true)}>Start </button>
        <button onClick={() => setRunning(false)}>Pause </button>
      </div>
    </>
  )
}

export default Timer
