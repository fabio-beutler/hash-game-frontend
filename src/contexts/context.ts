import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { client, EVENT_NAMES } from '../services/socket-io'

class Room {
  id = ''
  tablePositions = Array(9)
  currentPlayer = ''
  markCircle = 'O'

  constructor() {
    makeAutoObservable(this)

    client.on(`${EVENT_NAMES.CREATE_ROOM}-response`, (error, data) => {
      if (error) console.log(error)
      if (!error) {
        this.id = data.id
        this.tablePositions = data.game.tablePositions
      }
    })

    client.on(EVENT_NAMES.UPDATE_ROOM, data => {
      console.log(data)
      if (!this.id) this.id = data.id
      this.tablePositions = data.game.tablePositions
      console.log(this.tablePositions)
      this.currentPlayer = data.game.currentPlayer
    })
  }

  create() {
    client.emit(EVENT_NAMES.CREATE_ROOM)
  }

  join(roomId: string) {
    client.emit(EVENT_NAMES.JOIN_ROOM, roomId)
  }

  setGamePosition(position: number) {
    client.emit(EVENT_NAMES.GAME_SET_POSITION, position)
  }

  setMarkCircle() {
    if (this.markCircle === 'O') {
      this.markCircle = 'X'
    } else {
      this.markCircle = 'O'
    }
  }

  leave() {
    client.emit(EVENT_NAMES.LEAVE_ROOM)
  }
}

export const RoomContext = createContext<Room>(new Room())
