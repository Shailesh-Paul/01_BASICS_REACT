import { useState } from "react";



function App() {

  const [counter , setCounter]=useState(15)
  
  

  const addValue=()=>{
    console.log("clicked",counter)
    // counter = counter+ 1;
    setCounter(counter+1)
  }
  
  const renmoveValue=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Hello Dosto</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value={counter}</button>
      <br></br>
      <button onClick={renmoveValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
