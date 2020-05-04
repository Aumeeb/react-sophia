import React, { useEffect, useState, FC, ReactElement, ReactNode } from 'react'
import { BrowserPropsProvider } from './window-context'

interface FCC {
  children: ReactNode
}
type HomeContextType = {
  name: string
} & typeof api

const api = {
  getTable() {},
  getBooks() {},
  searchBook() {},
}

const HomeContext = React.createContext<Partial<HomeContextType>>({})

function _(props: FCC) {
  let [state, setState] = useState<Partial<HomeContextType>>({ name: 'lee', ...api })

  return <HomeContext.Provider value={state}>{props.children}</HomeContext.Provider>
}
export const HomeContextProvider: FC = props => {
  return <_ {...props}>{props.children}</_>
}
