import React, { useState } from 'react'


export default function Counter() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const clear = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button className="btn btn-primary mx-1" onClick={increment}>increment</button>
      <button className="btn btn-primary mx-1" onClick={decrement}>decrement</button>
      <button className="btn btn-primary mx-1" onClick={clear}>clear</button>
    </>
  )
}
