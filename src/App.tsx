import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './assets/style/style.css'

function App() {

  return (
    <>
      <div className="cont max-w-screen-xl mr-auto ml-auto">
        <Header></Header>
        <Body></Body>
      </div>
    </>
  )
}

export default App
