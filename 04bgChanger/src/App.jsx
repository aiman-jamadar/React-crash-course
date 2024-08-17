import { useState } from "react"

function App() {
  const [color,setColor]=useState('black')
  const fir=()=>
    {
      setColor('black')
    }
  return (
    
   <>
   <div className="w-full h-screen duration-200"style={{backgroundColor:color}}>

   
   <div className="fixed flex-wrap justify-center bottom-12  inset-x-0 px-2">
    
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full text-white shadow-lg">
      
      <button onClick={()=>setColor("red")}className="outline-none px-4"style={{backgroundColor:'red'}}> Red</button>
      <button onClick={()=>setColor('pink')}className="outline-none px-4"style={{backgroundColor:'pink'}}> pink</button>
      <button  onClick={()=>setColor('green')}className="outline-none px-4"style={{backgroundColor:'green'}}> green</button>
      <button onClick={()=>setColor('yellow')} className="outline-none px-4"style={{backgroundColor:'yellow'}}> yellow</button>
      <button onClick={()=>setColor('blue')}className="outline-none px-4"style={{backgroundColor:'blue'}}> blue</button>
      <button onClick={fir}className="outline-none px-4"style={{backgroundColor:'black'}}> black</button>
      
      </div> 
      
      </div>
      </div>  
      </>
  )
}

export default App
