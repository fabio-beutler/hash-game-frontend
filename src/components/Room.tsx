import { FaArrowLeft } from 'react-icons/fa'

type RoomProps = {
  setInGame: (type: boolean) => void
}

function Room({ setInGame }: RoomProps) {
  return (
    <main className='bg-stone-800 w-screen h-screen flex flex-col items-center justify-center gap-12'>
      <div className='flex gap-8 items-center'>
        <button
          onClick={() => setInGame(false)}
          className='flex items-center text-white gap-1 p-3 rounded-lg hover:bg-stone-700 transition duration-300'
        >
          <FaArrowLeft /> Voltar
        </button>
        <h1 className='text-white text-4xl font-bold'>Hash Game</h1>
      </div>
      <div className='flex gap-4'>
        <div className='bg-teal-900 p-1 flex items-center gap-1 rounded-full'>
          <span className='text-white bg-teal-700 px-3 py-2 rounded-full select-none'>
            player 1
          </span>
          <span className='text-white px-3 py-2 rounded-full select-none'>
            player 2
          </span>
        </div>
        <div className='bg-teal-900 p-1 flex items-center gap-1 rounded-full'>
          <span className='text-white bg-teal-700 px-3 py-2 rounded-full select-none'>
            Você é: X
          </span>
        </div>
      </div>
      <table className='flex flex-col gap-1 bg-teal-500'>
        {Array.from(Array(3), (_, i) => (
          <tr className='flex  gap-1'>
            {Array.from(Array(3), (_, i) => (
              <td className='text-white py-14 px-16 bg-stone-800 font-bold text-2xl hover:bg-stone-800/90 transition duration-300 cursor-pointer '>
                X
              </td>
            ))}
          </tr>
        ))}
      </table>
    </main>
  )
}

export default Room
