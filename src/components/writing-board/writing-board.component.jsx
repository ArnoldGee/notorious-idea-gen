import React from 'react'
import './writing-board.styles.scss'

const WritingBoard = () => {
  return (
    <div className="writing-board">
      <textarea placeholder="Capture any thought or idea" className="text-area"></textarea>
    </div>
  )
}

export default WritingBoard
