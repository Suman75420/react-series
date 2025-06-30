import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}


// const reactElement  = {
//   type : 'a',
//   props : {
//     href : 'https://www.google.com/',
//     target : '_blank'
//   },
//   children : 'click me to visit google'
// }

const anotherElement = (
    <a href = "https://www.google.com/" target ='_blank'>Visit Google</a>
)
const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href : 'https://www.google.com/',target : '_blank'},'click me to visit google',anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
      
  );

// react ko html smjh ni atti hai isiliye react me  app.jsx file hota hai jisme html or js mix hota hai jo react as a html use karta hai
// reactelement we can't be  access in theese type because it is a object so in app.jsx theere are another syntax that can run  

//another element run easily