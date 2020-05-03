import React, { FC, CSSProperties, useEffect } from 'react'

import { BrowserPropsProvider } from '../../shared/window-context'
import { useObject } from '../../hooks/useObject'
import { getHeight, getWidth } from '../../util/browser'
// import { throttle } from 'lodash'

export interface DraggableProps {
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
  position: 'absolute',
  zIndex: 100,
}
const SIZE = {
  width: 20,
  height: 20,
}

const _Draggable: FC<DraggableProps> = props => {
  const { object, updateObject } = useObject(
    {
      pressed: false,
      pressedX: 0,
      pressedY: 0,
      x: 0,
      y: 0,
      callee: 'draggable',
      onMouseUp: () => {
        console.log([
          1,
          2,
          3,
          {},
          { name: 2 },
          [[]],
          undefined,
          null,
          '1',
          'f',
          _Draggable,
          function () {
            console.log(1)
          },
          () => {
            console.log(2)
          },
        ])
      },
      alert() {
        alert(2)
      },
      getObjects: () => {
        console.log({ name: 5, age: 2, sex: true })
      },
      arr: [1, '2', true, undefined, void 0, null, () => {}, function () {}, Symbol('1'), [], [1], [1, []], _Draggable, {}, { name: 2 }],
      obj: { name: 5, age: 6 },
    },
    { supervise: false, forceCleanUp: false }
  )
  const { position = { x: 800, y: 1200 } } = props
  useEffect(() => {
    updateObject({
      x: getWidth() - position.x,
      y: getHeight() - position.y,
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
    if (object.pressed) {
      let changeX = ev.clientX - object.pressedX
      let changeY = ev.clientY - object.pressedY

      updateObject({
        x: object.x + changeX,
        y: object.y + changeY,
        pressedX: ev.clientX,
        pressedY: ev.clientY,
      })
    }
  }
  function mouseUp() {
    updateObject('pressed', false)
  }

  return (
    <div
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      // onMouseMove={throttle(mouseMove, 50)}
      onMouseMove={mouseMove}
      onMouseOut={mouseUp}
      onDoubleClick={e => void e.preventDefault()}
      style={{
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
  return (
    <BrowserPropsProvider>
      <_Draggable {...props} />
    </BrowserPropsProvider>
  )
}
