import { ReactEventHandler, useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './assets/style/style.css'

function App() {

  const [search, setSearch] = useState('')
  function handleSearch(event)=>{
    setSearch(event.target.value)
  }


  return (
    <>
      <div className="cont max-w-screen-xl mr-auto ml-auto">
        <Header search={search} setSearch={setSearch} handleSearch={handleSearch}></Header>
        <Body></Body>
      </div>
    </>
  )
}

export default App
