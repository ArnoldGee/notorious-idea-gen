import React from 'react'
import './note-snippet.styles.scss'

const NoteSnippet = () => {
  return (
    <div className="note-snippet">
      <h2>Name of the note</h2>
      <p>Note text</p>
      <div className="note-actions">
        {/*Here you put share, copy, bin icons*/}
      </div>
    </div>
  )
}

export default NoteSnippet
