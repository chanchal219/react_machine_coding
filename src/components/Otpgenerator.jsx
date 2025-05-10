import {useState,useEffect} from 'react'

const Otpgenerator = ()=>{
    const[value,setValue]=useState('')
    useEffect(()=>{
      handleGenerator()
    },[])
    const handleGenerator = ()=>{
         setValue(Math.floor((Math.random()*900)+100))
    }
return (

    <>
<h1>OTP Generator</h1>
<h2>Your Otp is {value}</h2>
<button onClick={handleGenerator}>ReGenerator</button>

    </>
)
    
}
export {Otpgenerator}
