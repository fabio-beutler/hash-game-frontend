import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { RoomContext } from '../contexts/context'

type RoomProps = {
  setInGame: (type: boolean) => void
}

function RoomBase({ setInGame }: RoomProps) {
  const room = useContext(RoomContext)

  return (
    <>
      <div className='flex gap-8 items-center'>
        <button
          onClick={() => {
            room.leave()
            setInGame(false)
          }}
          className='flex items-center text-white gap-1 p-3 rounded-lg hover:bg-stone-700 transition duration-300'
        >
          <FaArrowLeft /> Back
        </button>
        <h1 className='text-white text-4xl font-bold'>Tic Tac Toe</h1>
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
                checked={room.markCircle === 'O'}
                onChange={room.setMarkCircle.bind(room)}
              />
              <div className='block bg-teal-700 w-14 h-8 rounded-full'></div>
              <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
            </div>
          </label>
          <p className='p-3 text-white'>O</p>
        </div>

        {room.id && (
          <div className='bg-teal-900 p-1 flex items-center gap-1 rounded-full'>
            <span className='text-white px-3 py-2 select-none'>
              Room ID:{' '}
              <strong className='select-text selection:bg-teal-400'>
                {room.id}
              </strong>
            </span>
          </div>
        )}
      </div>

      <div className='grid grid-cols-3 grid-rows-3 gap-1 bg-teal-500'>
        {room.tablePositions.map((position, index) => (
          <div
            key={index}
            onClick={() => room.setGamePosition(index)}
            className='text-white py-14 px-16 bg-stone-800 font-bold text-2xl hover:bg-stone-800/90 transition duration-300 cursor-pointer '
          >
            {position === 'one' && 'x'}
            {position === 'two' && 'o'}
            {/* {position ? 'O' : 'X'} */}
          </div>
        ))}
      </div>
    </>
  )
}

const Room = observer(RoomBase)

export default Room
