import React, { useEffect, useState, FC, ReactElement, ReactNode, useContext } from 'react'
import { BookContextProvider, BookContext } from '../shared/book-context'
import { useObject } from '../hooks/useObject'

const _: FC = props => {
  // const { getBooks, getTable, searchBook, name } = useContext(BookContext)
  const { object, updateObject } = useObject(
    { ...useContext(BookContext), callee: 'testBookPage', firstName: 'linda', lastName: '', age: '', grandson: { name: 'minay' } },
    {
      supervise: true,
      twoWay: true,
    }
  )
  console.log(object)

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
