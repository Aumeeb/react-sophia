import React, { FC, useState } from 'react'
import logo from './logo.svg'
import { Sophia } from './sophia'
import './App.css'
import { randomColor } from './util/random'
import { Book } from './test/bookList'

function Recurisve(props: { deep: number; left: number; children?: any }) {
  let [s, ss] = useState(true)
  let deep = props.deep - 1
  if (deep > 0) {
    return (
      <div
        onClick={e => {
          e.stopPropagation()

          ss(!s)
        }}
        style={{ display: s ? 'block' : 'none', background: randomColor(), paddingLeft: props.left * deep }}
      >
        {deep}
        <Recurisve deep={deep} left={props.left}>
          {props.children}
        </Recurisve>
      </div>
    )
  }
  return <div> </div>
}
function Recurisve2(deep: number, left: number) {
  deep -= 1
  if (deep > 0) {
    return (
      <div style={{ background: 'auto', paddingLeft: left * deep }}>
        {deep}
        {Recurisve2(deep, left)}
      </div>
    )
  }
  return <div> </div>
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" >
        <img style={{color:'red'}} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}

      {/* {Recurisve2(10, 10)} */}
      {/* <Recurisve deep={10} left={10} /> */}

      {/* <div
        onClick={() => {
  
        }}
      >
        11111
        <div
          onClick={e => {
             e.stopPropagation()
            
          }}
        >
          22222
          <div onClick={handleClick}>33333</div>
        </div>
      </div> */}
      <Book />
      <Sophia />
    </div>
  )
}

export default App
