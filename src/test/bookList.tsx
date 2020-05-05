import React, { useEffect, useState, FC, ReactElement, ReactNode, useContext } from 'react'
import { BookContextProvider, BookContext } from '../shared/book-context'
import { useObject } from '../hooks/useObject'

const _: FC = () => {
  // const { getBooks, getTable, searchBook, name } = useContext(BookContext)
  const { object } = useObject(
    { ...useContext(BookContext), callee: 'testBookPage' },
    {
      supervise: true,
    }
  )
  return (
    <>
      <button>{object.name}</button>
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
