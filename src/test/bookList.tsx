import React, { useEffect, useState, FC, ReactElement, ReactNode, useContext } from 'react'
import { BookContextProvider, BookContext } from '../shared/book-context'

const _: FC = () => {
  const { getBooks, getTable, searchBook, name } = useContext(BookContext)
  return (
    <>
      <button>{name}</button>
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
