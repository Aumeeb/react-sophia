# React-Sophia

React-Sophia is a visualization plugin of javascript object trace which promotes development speed when you are debugging & logging variables. and it will provide other amazing features that is on the way!

## Features

- 🧹 Easy to update & maintain & restore Your ReactHookState by TypeScript data type inference
- 📺 Visualization Object Data Type
- 🐛 Debug your Code dynamically
- 🔌 Easy install & uninstall
- 🔮 Reflect metaData what ever you want

# Installing

```bash
npm install react-sophia
```

# Supported Framework

React

# Example

- 🏗️ Step 1 : Put react-sophia component inside your top level of Component, it should be installed only once in your entire project that is better.

```jsx
import React from 'react'
import { Book } from './test/bookList' // page components
import { Sophia } from 'react-sophia'  
function App() {
  return (
    <div>
      <Sophia emojiIcon="💕" />     {/*  💡   import react-sophia in your top level of React components is recommended  */} 
      <Book />
       <.../>
    </div>
  )
}

export default App
```

- 🏗️🏗️ step 2 : To provide Data to react-sophia for supervise. you should call **_useObject_** from react-sophia

```tsx
import React from 'react'
import { useObject } from 'react-sophia'

const Home = () => {
    const { object, updateObject, recover } = useObject(
    {
      house: {
         address: 'milkyway...'
         area: { width: 10000: height:20000}
      },
      bookshelf: ["English","Math"],
      firstName: 'linda',
      lastName: 'fosn',
      age: 999,
    },
    { sceneName: `🦠linda's home🦠` }
  )

  return (
     <>
      Your first name : <Input type="text" value={object.firstName} onChange={e => updateObject('firstName', e.target.value)} />

       Your last name : <Input type="text" value={object.lastName} onChange={e => updateObject('lastName', e.target.value)} />

       <button>my age is {object.age}</button>
     </>
  )

}
```
