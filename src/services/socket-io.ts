import socketIoClient from 'socket.io-client'

export enum EVENT_NAMES {
  CREATE_ROOM = 'create-room', // EMIT > (event) | LISTEN (event, room);
  JOIN_ROOM = 'join-room', // EMIT > (event, room-id);
  LEAVE_ROOM = 'leave-room', // EMIT > (event);
  GAME_SET_POSITION = 'game-set-position', // EMIT > (event, position: number<0, 8>);
  GAME_RESET = 'game-reset', // EMIT > (event);
  UPDATE_ROOM = 'update-room' // LISTEN (event, room);
}

export const client = socketIoClient(import.meta.env.VITE_API_URL)

client.on(`${EVENT_NAMES.LEAVE_ROOM}-response`, (error, data) => {
  // console.log(error)
  // console.log(data)
})

client.on(`${EVENT_NAMES.JOIN_ROOM}-response`, (error, data) => {
  // console.log(error)
  // console.log(data)
})
