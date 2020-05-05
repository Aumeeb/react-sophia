import React, { useEffect, useState, FC, ReactElement, ReactNode } from 'react'
import { BrowserPropsProvider } from './window-context'

interface FCC {
  children: ReactNode
}
type HomeContextType = {
  name: string
} & typeof api
const Books = [
  {
    name: '直呼',
    id: 1,
  },
  {
    name: '是的',
    id: 2,
  },
  {
    name: '个是',
    id: 3,
  },
]
const api = {
  getTable() {
    return Promise.resolve<{ name: string; age: number }[]>([{ name: 'lee', age: 5 }])
  },
  getBooks() {
    return Promise.resolve(Books)
  },
  searchBook(id: number) {
    let found = Books.filter(p => (p.id = id))
    return Promise.resolve(found)
  },
}

const HomeContext = React.createContext<Partial<HomeContextType>>({})

function _(props: FCC) {
  let [state, setState] = useState<Partial<HomeContextType>>({ name: 'lee', ...api })

  return <HomeContext.Provider value={state}>{props.children}</HomeContext.Provider>
}
export const HomeContextProvider: FC = props => {
  return <_ {...props}>{props.children}</_>
}
