import { useState, useEffect } from 'react'

// precision - delta of milliseconds, doesnt work well using preciision less than 10 ms
function Timer({ initTime, precision, name }: { initTime: number, precision: number, name: string }) {
  let multiplier = 1000 / precision;

  const [seconds, setSeconds] = useState(initTime * multiplier)
  const [isRunning, setRunning] = useState(false)
  const [isEnded, setEnded] = useState(false)

  useEffect(() => {
    setSeconds(initTime * multiplier)
    setRunning(false)
    setEnded(false)
  }, [initTime, multiplier])
  useEffect(() => {

    let interval: ReturnType<typeof setInterval>;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, precision)
    }
    return () => clearInterval(interval);
  }, [isRunning])

  useEffect(() => {
    if (seconds <= 0) { setEnded(true); setRunning(false) }
  }, [seconds])

  return (
    <>
      <div style={{marginTop: 0}} className="card">
        <h1>{(seconds / multiplier).toFixed(Math.log10(multiplier))} </h1> <h3> seconds left</h3>
        <button disabled={isRunning} onClick={() => setRunning(true)}>Start </button>
        <button onClick={() => setRunning(false)}>Pause </button>
        <button onClick={() => { setRunning(false); setSeconds(initTime); setEnded(false)}}>Reset</button>
        {isEnded ? <h2>Nice! {name}, You did it</h2> : <h2 />}
      </div>
    </>
  )
}

export default Timer
