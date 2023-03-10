import React from 'react'

const Counter = () => {
    const [count,setCount]=React.useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <h1>Count:{count}</h1>
        <button  onClick={()=>setCount(count+2)}>INC</button>
        <button disabled={count===0} onClick={()=>setCount(count-1)}>DEC</button>
    </div>
  )
}

export default Counter