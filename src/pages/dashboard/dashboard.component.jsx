import React from 'react'
import NotesList from '../../components/notes-list/notes-list.component'
import WritingBoard from '../../components/writing-board/writing-board.component'
import GridView from '../../components/grid-view/grid-view.component'

import './dashboard.styles.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NotesList />
      <WritingBoard />
      <GridView />
    </div>
  )
}

export default Dashboard
