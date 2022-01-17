import socketIoClient from 'socket.io-client'

export enum EVENT_NAMES {
  CREATE_ROOM = 'create-room',
  DELETE_ROOM = 'delete-room',
  JOIN_ROOM = 'join-room',
  EXIT_ROOM = 'exit-room',
  MOVE_GAME_POSITION = 'move-game-position'
}

export const client = socketIoClient('http://localhost:4000')

client.on(`${EVENT_NAMES.DELETE_ROOM}-response`, (error, data) => {
  // console.log(error)
  // console.log(data)
})

client.on(`${EVENT_NAMES.JOIN_ROOM}-response`, (error, data) => {
  // console.log(error)
  // console.log(data)
})
