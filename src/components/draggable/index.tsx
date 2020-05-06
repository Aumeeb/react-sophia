import React, { FC, CSSProperties, useEffect } from 'react'
import { useObject } from '../../hooks/useObject'
import { getWidth } from '../../util/browser'

export const testdata = [
  React,
  1,
  '2',
  true,
  undefined,
  void 0,
  null,
  [1, 2, 3, [4]],
  () => {},
  function (a: any, b: any) {
    console.log(a + b)
  },
  (firstName: any, lastName: any) => {
    let fullName = firstName + lastName
    console.log(fullName)
  },
  function (z: any) {},
  {
    c: (name: any) => {
      return name
    },
  },
  Symbol('1'),
  {},
  { name: 2 },
]
export interface DraggableProps {
  className?: string
  position?: {
    x: number
    y: number
  }
  width?: number
  height?: number
  offsetTop?: number
  offsetLeft?: number

  onMouseUp?: () => void
}
const STYLES: CSSProperties = {
  position: 'fixed',
  zIndex: 100,
}

const _Draggable: FC<DraggableProps> = props => {
  const { object, updateObject } = useObject(
    {
      arr: testdata,
      pressed: false,
      pressedX: 0,
      pressedY: 0,
      x: 0,
      y: 0,
      callee: 'draggable',
      onMouseUp: () => {},
      alert() {
        alert(2)
      },
      obj: { name: 5, age: 6, typescript: testdata },
    },
    { supervise: true }
  )
  const { position = { x: 500, y: 20 } } = props //set hatch place
  useEffect(() => {
    // updateObject({
    //   x: getWidth() - position.x,
    //   y: getHeight() - position.y,
    // })
    updateObject({
      x: position.x,
      y: position.y,
    })
  }, [])

  function mouseDown(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    updateObject({
      pressed: true,
      pressedX: ev.clientX,
      pressedY: ev.clientY,
    })
  }
  function mouseMove(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // if (object.pressed) {
    //   let changeX = ev.clientX - object.pressedX
    //   let changeY = ev.clientY - object.pressedY
    //   updateObject({
    //     x: object.x + changeX,
    //     y: object.y + changeY,
    //     pressedX: ev.clientX,
    //     pressedY: ev.clientY,
    //   })
    // }
  }
  function mouseUp() {
    updateObject('pressed', false)
  }

  return (
    <div
      className={props.className}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      onMouseOut={mouseUp}
      onDoubleClick={e => void e.preventDefault()}
      style={{
        maxWidth: getWidth() / 2 + 'px',
        ...STYLES,
        width: props.width,
        height: props.height,
        left: object.x,
        top: object.y,
        userSelect: 'none',
      }}
    >
      {props.children}
    </div>
  )
}

export const Draggable: FC<DraggableProps> = props => {
  return <_Draggable {...props} />
}
