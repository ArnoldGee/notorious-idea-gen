import React, {useState} from 'react'
import './notes-list.styles.scss'
import NoteSnippet from '../note-snippet/note-snippet.component.jsx'

const NotesList = () => {
  
  const [hidden, setHidden] = useState(false);
  const [size, setSize] = useState({height: "100%"})


  const changeSize = () => {
    setHidden(!hidden)
    if (hidden) {
      setSize({height: "100%"})

    } else {
      if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 600) {
        setSize({width: "0px", minWidth: "0px"})

      } else {
        setSize({height: "0px", minHeight: "0px"})
      }
    }
  }
  

  return (
    <div className="notes-list"

    >
      <div className="notes-list-content" 
      style={size}
      >
        <h1>My notes</h1> 
        <div className="sorting-options" title="Sorting options">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32m256-32v32m80 80H48"/></svg>
          <span>Aa</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="48" y="64" width="416" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 304l-64 64-64-64m64 41.89V224"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M69 153.99l187 110 187-110m-187 310v-200"/><ellipse cx="256" cy="152" rx="24" ry="16"/><ellipse cx="208" cy="296" rx="16" ry="24"/><ellipse cx="112" cy="328" rx="16" ry="24"/><ellipse cx="304" cy="296" rx="16" ry="24"/><ellipse cx="400" cy="240" rx="16" ry="24"/><ellipse cx="304" cy="384" rx="16" ry="24"/><ellipse cx="400" cy="328" rx="16" ry="24"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64m-140.71-96h187.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/></svg>
        </div>
        <NoteSnippet />
      </div>
      <div className="notes-list-toggle" onClick={changeSize}>
        <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg>
      </div>
    </div>
  )
}

export default NotesList;
