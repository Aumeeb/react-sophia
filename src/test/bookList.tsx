import React, { FC, useContext } from 'react'
import { BookContextProvider, BookContext } from '../shared/book-context'
import { useObject } from '../hooks/useObject'

const _: FC = () => {
  const { object, updateObject } = useObject(
    {
      ...useContext(BookContext),
      d: {
        name: 5,
        love: 'loveyou',
        sex: true,
        d: [2, { d: 5 }],
        level1: {
          nname: 512,
          age: 6,
          level2: {
            arr: {
              data: [
                {
                  booss: 'adalaer',
                },
              ],
            },
          },
        },
      },
      callee: 'testBookPage',
      firstName: 'linda',
      lastName: '',
      age: '',
      grandson: { name: 'minay' },
    },
    { sceneName: 'booklist' }
  )
  return (
    <>
      <button>{object.name}</button>
      <div>
        <div>
          Your first name : <input type="text" value={object.firstName} onChange={e => updateObject('firstName', e.target.value)} />
        </div>
        <div>
          Your last name : <input type="text" value={object.lastName} onChange={e => updateObject('lastName', e.target.value)} />
        </div>
        <div>
          Your age is : <input type="text" value={object.age} onChange={e => updateObject('age', e.target.value)} />
        </div>

        <button>{object.grandson.name}</button>
      </div>
    </>
  )
}
export const Book: FC = props => {
  return (
    <BookContextProvider>
      <_ {...props}></_>
    </BookContextProvider>
  )
}
