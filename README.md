# React-Sophia

React-Sophia is a visualization plugin of javascript object trace which promotes development speed when you are debugging & logging variables. and it will provide other amazing features that is on the way!

## Features

- 🧹 Easy to update & maintain & restore Your ReactHookState by TypeScript data type inference
- 📺 Visualization
- 🔌 Easy install & uninstall

# Installing

```bash
npm install react-sophia
```

# Supported Framework

React

# Example

- 🏗️ Step 1 : Put react-sophia component inside your top level of Component, it should be installed only once in your entire project that enough.

```javascript
import React from 'react'
import { Book } from './test/bookList' // page components
import { Sophia } from 'react-sophia'  // import react-sophia in your top level of React components is recommended
function App() {
  return (
    <div>
      <Sophia emojiIcon="💕" />
      <Book />
       <.../>
    </div>
  )
}

export default App
```

- 🏗️🏗️ step 2
