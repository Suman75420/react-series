import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);

  //let counter = 10

  const addValue = () => {
    console.log("clicked",counter);
    //counter = counter + 1;
    setCounter(counter + 1);
    // setCounter(prevCounter => prevCounter+ 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

    setCounter(counter + 1);
    if(counter == 20) {
      alert("Limit reached!"); 
       return; 
    } 
    setCounter(counter+1);

   
  }

  const removeValue = () => {
    console.log("clicked to remove" ,counter);
    setCounter(counter-1);
    if(counter == 0){
      alert("limit reached");
      return ;
    }
    setCounter(counter - 1);
  }

  return (
    <>
  <h1>chai aur react</h1>
  <h2>Counter value : {counter}</h2>

  <button onClick = {addValue} disabled = {counter === 20 }>Add value {counter}</button>
  <br />
  <button onClick = {removeValue} disabled = {counter === 0}>Remove  value {counter}</button>
  <p>footer : {counter} </p>

    </>
  )
}
export default App
