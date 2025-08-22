import React, { useEffect, useState,useRef } from "react";

function App () {

  const[name,setName] = useState('');

  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current=name;
  },[name])

  const handleclick = () => (
    console.log(inputRef.current)
  )

  return(
    <div>
      <h1>this is name: {inputRef.current}</h1>
    <input type="text" 
    value={name}
    onChange={(e)=>setName(e.target.value)} />
    <button onClick={handleclick}>show input</button>
    </div>
  )
}

export default App