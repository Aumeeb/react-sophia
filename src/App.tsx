import React from 'react'
import 'antd/dist/antd.css'
import { Book } from './test/bookList'
import { Book2 } from './test/booklist2'
import { Sophia } from './sophia'

function App() {
  return (
    <div className="App">
      <Sophia emojiIcon="💕" supervise />
      <Book />
      <Book2 />
    </div>
  )
}

export default App
