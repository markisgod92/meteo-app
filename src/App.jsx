import { useState } from 'react'
import { MeteoApp } from './components/MeteoApp/MeteoApp'
import './App.css'
import { DataContextProvider } from './context/DataContext'

function App() {
  return (
    <DataContextProvider>
      <MeteoApp />
    </DataContextProvider>
  )
}

export default App
