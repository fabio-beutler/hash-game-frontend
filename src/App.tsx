import { useState } from 'react'
import Home from './components/Home'
import Room from './components/Room'

function App() {
  const [inGame, setInGame] = useState(false)
  return (
    <>
      {!inGame ? (
        <Home setInGame={setInGame} />
      ) : (
        <Room setInGame={setInGame} />
      )}
    </>
  )
}

export default App
