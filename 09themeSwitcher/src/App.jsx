import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import './App.css'
import { ThemeProvider } from './contexts/theme'



function App() {
  const [themeMode,setThemeMode] = useState("Light")

  const LightTheme = () => {
    setThemeMode("Light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme



  useEffect(() => {
   document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
  <ThemeProvider value = {{themeMode,LightTheme,darkTheme}} >
    <div className="flex flex-wrap min-h-screen items-center">


      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  </ThemeProvider>

  )
}

export default App
