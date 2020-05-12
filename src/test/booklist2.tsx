import React, { FC, useContext, useEffect } from 'react'
import { BookContextProvider, BookContext } from '../sophia/shared/book-context'
import { Button, Input, Table } from 'antd'
import { useObject } from '../sophia'

const _: FC = () => {
  const { object, updateObject } = useObject(
    {
      ...useContext(BookContext),
      level1: {
        nname: 512,
        age: 6,
        grandson: { name: 'minay' },
      },
      pageName: '📜booklist2📜',
      otherType: [Symbol('todo'), true, null],
      books: [],
      firstName: 'lins',
      lastName: '~',
      age: 5,
    },
    { sceneName: '📜booklist2📜' }
  )
  useObject({ pageName: 'tree' }, { sceneName: '🌲tree🌲' })
  useObject({ name: '🦚Peacock🦚' }, { sceneName: '🦚Peacock🦚' })
  useObject({ name: 'frog', height: 67 }, { sceneName: '🐸frog🐸' })
  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    object.getBooks!().then(d => {
      updateObject('books', d as any)
    })
  }
  console.log(object)

  return (
    <div style={{ padding: 20, width: '50%' }}>
      <Button type="primary">{object.pageName}</Button> {/*  efe  */}
      <div>
        <div>
          Your first name : <Input type="text" value={object.firstName} onChange={e => updateObject('firstName', e.target.value)} />
        </div>
        <div>
          Your last name : <Input type="text" value={object.lastName} onChange={e => updateObject('lastName', e.target.value)} />
        </div>
        <div>
          Your age is : <Input type="text" value={object.age} onChange={e => updateObject('age', +e.target.value)} />
        </div>

        <Button type="ghost">{object.level1.grandson.name}</Button>
      </div>
      <Table
        dataSource={object.books}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
          },
        ]}
      />
    </div>
  )
}
export const Book2: FC = props => {
  return (
    <BookContextProvider>
      <_ {...props}></_>
    </BookContextProvider>
  )
}
