import { useState } from 'react'
import Home from './components/Home'
import Room from './components/Room'
import { client } from './services/socket-io'

function App() {
  const [inGame, setInGame] = useState(false)

  window.client = client

  return (
    <main className='bg-stone-800 w-screen h-screen flex flex-col items-center justify-center gap-12'>
      {!inGame ? (
        <Home setInGame={setInGame} />
      ) : (
        <Room setInGame={setInGame} />
      )}
    </main>
  )
}

export default App
