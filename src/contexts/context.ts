import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { client, EVENT_NAMES } from '../services/socket-io'
import { CgClose } from 'react-icons/cg'
import { FaRegCircle } from 'react-icons/fa'

class Room {
  id: string | null
  tablePositions: string[]
  currentPlayer: 'one' | 'two' | null

  myPlayer: 'one' | 'two' | null
  otherPlayer: 'one' | 'two' | null
  stateSymbol: boolean
  symbols: ('X' | 'O')[]
  myPlayerSymbol: 'X' | 'O'
  otherPlayerSymbol: 'X' | 'O'

  winPlayer: 'no-winner' | 'one' | 'two' | null
  gameStatus: 'off' | 'game' | 'end'

  constructor() {
    makeAutoObservable(this)

    this.id = null
    this.tablePositions = Array(9)
    this.currentPlayer = null

    this.myPlayer = null
    this.otherPlayer = null
    this.stateSymbol = true
    this.symbols = ['O', 'X']
    this.myPlayerSymbol = this.symbols[0]
    this.otherPlayerSymbol = this.symbols[1]

    this.winPlayer = null
    this.gameStatus = 'off'

    client.on(`${EVENT_NAMES.CREATE_ROOM}-response`, (error, data) => {
      if (error) console.log(error)
      if (!error) {
        this.id = data.id
        this.tablePositions = data.game.tablePositions
        this.myPlayer = 'one'
        this.otherPlayer = 'two'
      }
    })

    client.on(EVENT_NAMES.UPDATE_ROOM, data => {
      if (!this.id) this.id = data.id

      if (String(this.tablePositions) !== String(data.game.tablePositions)) {
        this.tablePositions = data.game.tablePositions
      }

      this.currentPlayer = data.game.currentPlayer
      this.gameStatus = data.game.status
      console.log(data.game.status, 'status')
      this.winPlayer = data.game.win

      console.log(data.playerOne)
      console.log(client.id)
      if (data.playerOne === client.id) {
        this.myPlayer = 'one'
        this.otherPlayer = 'two'
      } else {
        this.myPlayer = 'two'
        this.otherPlayer = 'one'
      }
    })
  }

  create() {
    client.emit(EVENT_NAMES.CREATE_ROOM)
  }

  join(roomId: string) {
    client.emit(EVENT_NAMES.JOIN_ROOM, roomId)
    this.currentPlayer = 'two'
  }

  setGamePosition(position: number) {
    if (this.gameStatus === 'game')
      client.emit(EVENT_NAMES.GAME_SET_POSITION, position)
  }

  setPositionLocal(position: number) {
    if (this.gameStatus !== 'game') return
    if (this.tablePositions[position]) return
    if (this.currentPlayer !== this.myPlayer) return
    if (this.myPlayer) this.tablePositions[position] = this.myPlayer
    this.setGamePosition(position)
  }

  alternateSymbol() {
    this.stateSymbol = !this.stateSymbol
    if (this.stateSymbol) {
      this.myPlayerSymbol = this.symbols[0]
      this.otherPlayerSymbol = this.symbols[1]
    } else {
      this.myPlayerSymbol = this.symbols[1]
      this.otherPlayerSymbol = this.symbols[0]
    }
  }

  leave() {
    client.emit(EVENT_NAMES.LEAVE_ROOM)
  }

  resetGame() {
    client.emit(EVENT_NAMES.GAME_RESET)
  }
}

export const RoomContext = createContext<Room>(new Room())
