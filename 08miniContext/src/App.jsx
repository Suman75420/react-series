import React from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './Components/Profile'


function App() {
  

  return (
    <UserContextProvider>
      <h1>React  with Chai aur code and share is important</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
