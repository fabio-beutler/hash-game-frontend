import { useCallback, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

type HomeProps = {
  setInGame: (type: boolean) => void
  createRoom: () => void
  joinRoom: (id: string) => void
}

function Home({ setInGame, createRoom, joinRoom }: HomeProps) {
  const [inputValue, setInputValue] = useState('')

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    joinRoom(inputValue)
  }

  const inputChangeText = useCallback(
    (cb: React.Dispatch<React.SetStateAction<string>>) => {
      return ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        cb(target.value)
      }
    },
    []
  )

  function initRoom() {
    createRoom()
    setInGame(true)
  }
  return (
    <>
      <h1 className='text-white text-4xl font-bold'>Hash Game</h1>
      <div className='p-20 rounded-xl bg-teal-900/20 flex flex-col items-center justify-center gap-12'>
        <form onSubmit={onSubmit} className='flex flex-col gap-1 '>
          <label htmlFor='code' className='text-white text-lg'>
            Código da sala:
          </label>
          <div className=' flex items-center focus-within:ring ring-teal-500 rounded-lg'>
            <input
              value={inputValue}
              onChange={inputChangeText(setInputValue)}
              id='code'
              type='text'
              placeholder='Insira o código da sala'
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
          Criar uma sala
        </button>
      </div>
    </>
  )
}

export default Home
