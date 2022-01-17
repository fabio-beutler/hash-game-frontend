import { FaArrowRight } from 'react-icons/fa'

type HomeProps = {
  setInGame: (type: boolean) => void
}

function Home({ setInGame }: HomeProps) {
  return (
    <main className='bg-stone-800 w-screen h-screen flex flex-col items-center justify-center gap-12'>
      <h1 className='text-white text-4xl font-bold'>Hash Game</h1>
      <div className='p-20 rounded-xl bg-teal-900/20 flex flex-col items-center justify-center gap-12'>
        <div className='flex flex-col gap-1 '>
          <label htmlFor='code' className='text-white text-lg'>
            Código da sala:
          </label>
          <div className=' flex items-center focus-within:ring ring-teal-500 rounded-lg'>
            <input
              id='code'
              type='text'
              placeholder='Insira o código da sala'
              className='p-3 text-lg rounded-l-lg outline-none'
            />
            <button className='p-3 h-full bg-white rounded-r-lg text-black transition duration-300 hover:bg-stone-200'>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <button
          onClick={() => setInGame(true)}
          className='p-3 w-full text-lg font-bold text-white bg-teal-900 rounded-lg hover:bg-teal-700 transition duration-300'
        >
          Criar uma sala
        </button>
      </div>
    </main>
  )
}

export default Home
