import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BharatClock from './components/bharat-clock-text'
import RandomText from './components/next-text'
import TimeAndDate from './components/time'

function App() {

  return <center>
    <BharatClock />
    <RandomText />
    <TimeAndDate />
  </center>
}

export default App
