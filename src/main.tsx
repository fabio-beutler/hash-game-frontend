import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RoomContext, Room } from './contexts/context'

ReactDOM.render(
  <React.StrictMode>
    <RoomContext.Provider value={new Room()}>
      <App />
    </RoomContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
