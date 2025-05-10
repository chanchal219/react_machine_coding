import {useState,useEffect} from 'react'
const Accordion = ()=>{
    const data=[{title:'section_1',content:' hi i m section_1'},{title:'section_2',content:'hi i m section_2'},{title:'section_3',content:'hi i m section_3'},{title:'section_4',content:'hi i m section_4'}]
const [isActiveIndex,setActiveIndex] = useState(null)
const handleToggle = (index)=>{
setActiveIndex(isActiveIndex===index?null:index)
}
return (

    <>
    <h1>Accordion</h1>
    {
       data.map((curr,index)=>{

        return <div key={index}><button onClick={()=>handleToggle(index)}>{curr.title}</button>
           {isActiveIndex==index&&
      <p>{curr.content}</p>}</div>
       }) 
    }
  
    </>
)
}
export {Accordion }