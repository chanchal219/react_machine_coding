import {useState} from 'react'

const Counter=()=>{
    const[count,setCount]=useState(0)
    
   return <div>
   <h1>CounterApp</h1>
   <h1>{count}</h1>
   <button onClick={()=>setCount(count+1)}>+</button>
   <button onClick={()=>setCount(count-1)}>-</button>
   <button onClick={()=>setCount(0)}>Reset</button>
   </div>
}
export {Counter}
