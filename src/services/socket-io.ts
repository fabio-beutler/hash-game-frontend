import socketIoClient from 'socket.io-client'

export enum EVENT_NAMES {
  CREATE_ROOM = 'create-room', // (event)
  JOIN_ROOM = 'join-room', // (event, room-id: string)
  LEAVE_ROOM = 'leave-room', // (event)
  GAME_SET_POSITION = 'game-set-position', // (event, position: number(0, 8))
  UPDATE_ROOM = 'update-room' // (event, room)
}

export const client = socketIoClient('http://localhost:4000')

client.on(`${EVENT_NAMES.LEAVE_ROOM}-response`, (error, data) => {
  // console.log(error)
  // console.log(data)
})

client.on(`${EVENT_NAMES.JOIN_ROOM}-response`, (error, data) => {
  // console.log(error)
  // console.log(data)
})
