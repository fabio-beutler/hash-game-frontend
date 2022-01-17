import { useCallback, useEffect, useState } from 'react'
import Home from './components/Home'
import Room from './components/Room'
import { client, EVENT_NAMES } from './services/socket-io'

function App() {
  const [inGame, setInGame] = useState(false)
  const [roomId, setRoomId] = useState<string>('')

  useEffect(() => {
    client.on(`${EVENT_NAMES.CREATE_ROOM}-response`, (error, data) => {
      console.log(data.id)
      setRoomId(data.id)
    })
  }, [])

  const createRoom = useCallback(() => client.emit(EVENT_NAMES.CREATE_ROOM), [])
  const joinRoom = useCallback(id => client.emit(EVENT_NAMES.JOIN_ROOM, id), [])
  const deleteRoom = useCallback(() => client.emit(EVENT_NAMES.DELETE_ROOM), [])
  return (
    <main className='bg-stone-800 w-screen h-screen flex flex-col items-center justify-center gap-12'>
      {!inGame ? (
        <Home
          setInGame={setInGame}
          createRoom={createRoom}
          joinRoom={joinRoom}
        />
      ) : (
        <Room roomId={roomId} deleteRoom={deleteRoom} setInGame={setInGame} />
      )}
    </main>
  )
}

export default App
