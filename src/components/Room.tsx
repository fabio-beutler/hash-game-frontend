import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

type RoomProps = {
  setInGame: (type: boolean) => void
  deleteRoom: () => void
  roomId: string
}

function Room({ setInGame, deleteRoom, roomId }: RoomProps) {
  const [markCircle, setMarkCircle] = useState(true)

  return (
    <>
      <div className='flex gap-8 items-center'>
        <button
          onClick={() => {
            deleteRoom()
            setInGame(false)
          }}
          className='flex items-center text-white gap-1 p-3 rounded-lg hover:bg-stone-700 transition duration-300'
        >
          <FaArrowLeft /> Voltar
        </button>
        <h1 className='text-white text-4xl font-bold'>Hash Game</h1>
      </div>

      <div className='flex gap-8 items-center'>
        <div className='bg-teal-900 p-1 flex items-center gap-1 rounded-full'>
          <span className='text-white bg-teal-700 px-3 py-2 rounded-full select-none'>
            player 1
          </span>
          <span className='text-white px-3 py-2 rounded-full select-none'>
            player 2
          </span>
        </div>

        <div className='flex items-center bg-teal-900 rounded-full'>
          <p className='p-3 text-white'>X</p>
          <label htmlFor='toggle' className='flex items-center cursor-pointer'>
            <div className='relative'>
              <input
                type='checkbox'
                id='toggle'
                className='sr-only'
                checked={markCircle}
                onChange={e => setMarkCircle(e.target.checked)}
              />
              <div className='block bg-teal-700 w-14 h-8 rounded-full'></div>
              <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
            </div>
          </label>
          <p className='p-3 text-white'>O</p>
        </div>

        {roomId && (
          <div className='bg-teal-900 p-1 flex items-center gap-1 rounded-full'>
            <span className='text-white px-3 py-2 select-none'>
              Sala:{' '}
              <strong className='select-text selection:bg-teal-400'>
                {roomId}
              </strong>
            </span>
          </div>
        )}
      </div>

      <table>
        <tbody className='flex flex-col gap-1 bg-teal-500'>
          {Array.from(Array(3), (_, i) => (
            <tr key={i} className='flex  gap-1'>
              {Array.from(Array(3), (_, i) => (
                <td
                  key={i}
                  className='text-white py-14 px-16 bg-stone-800 font-bold text-2xl hover:bg-stone-800/90 transition duration-300 cursor-pointer '
                >
                  {markCircle ? 'O' : 'X'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Room
