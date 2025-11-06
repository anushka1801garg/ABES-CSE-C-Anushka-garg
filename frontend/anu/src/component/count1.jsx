import React ,{useState} from 'react'

function count1() {
    const [count, setCount]=useState(0);
    function inrement()
    {
        setCount(count+1)
    }

    function decrement()
    {
        setCount(count-1)
    }

  return (
    <div>
      <h1>counter app</h1>
      <button onclick={increment}>+</button>
      <span>[count]</span>
      <button onclick={decrement}>-</button>
    </div>
  )
}

export default count1
