import React, { FC, useContext, useEffect } from 'react'
import { BookContextProvider, BookContext } from '../shared/book-context'
import { useObject } from '../hooks/useObject'

const _: FC = () => {
  const { object, updateObject } = useObject(
    {
      ...useContext(BookContext),
      d: {
        level1: {
          nname: 512,
          age: 6,
        },
      },
      books: [],
      callee: 'testBookPage',
      firstName: 'linda',
      lastName: '',
      age: '',
      grandson: { name: 'minay' },
    },
    { sceneName: 'booklist' }
  )
  useEffect(() => {
    fetchData()
  }, [object.firstName])

  function fetchData() {
    object.getBooks!().then(d => {
      updateObject('books', d as any)
    })
  }
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

      <table>
        {object.books.map((book: { name: string; id: string }) => {
          return (
            <tr>
              <td>{book.id}</td>
              <td>{book.name}</td>
            </tr>
          )
        })}
      </table>
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
