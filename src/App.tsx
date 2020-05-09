import React from 'react'
import { Sophia } from './sophia'
import './App.css'
import 'antd/dist/antd.css'
import { Book } from './test/bookList'

function App() {
  return (
    <div className="App">
      <Sophia />
      <Book />
    </div>
  )
}

export default App
