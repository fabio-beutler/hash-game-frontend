import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { RoomContext } from '../contexts/context'

type HomeProps = {
  setInGame: (type: boolean) => void
}

function HomeBase({ setInGame }: HomeProps) {
  const [inputValue, setInputValue] = useState('')

  const room = useContext(RoomContext)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    room.join(inputValue)
    setInGame(true)
  }

  function initRoom() {
    room.create()
    setInGame(true)
  }
  return (
    <>
      <h1 className='text-white text-4xl font-bold'>Tic Tac Toe</h1>
      <div className='p-20 rounded-xl bg-teal-900/20 flex flex-col items-center justify-center gap-12'>
        <form onSubmit={onSubmit} className='flex flex-col gap-1 '>
          <label htmlFor='code' className='text-white text-lg'>
            Join Room:
          </label>
          <div className=' flex items-center focus-within:ring ring-teal-500 rounded-lg'>
            <input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              id='code'
              type='text'
              placeholder='Insert room code'
              className='p-3 text-lg rounded-l-lg outline-none'
            />
            <button
              type='submit'
              className='p-3 h-full bg-white rounded-r-lg text-black transition duration-300 hover:bg-stone-200'
            >
              <FaArrowRight />
            </button>
          </div>
        </form>
        <button
          onClick={initRoom}
          className='p-3 w-full text-lg font-bold text-white bg-teal-900 rounded-lg hover:bg-teal-700 transition duration-300'
        >
          Create room
        </button>
      </div>
    </>
  )
}

const Home = observer(HomeBase)

export default Home
