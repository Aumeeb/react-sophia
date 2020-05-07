import React, { FC, CSSProperties, useEffect, useRef } from 'react'
import { useObject } from '../../hooks/useObject'
import { getWidth, EvaluateElementArea, getHeight } from '../../util/browser'
import { toPixel } from '../../shared/styles'

export const testdata = [
  React,
  1,
  '2321312312',
  '23213123123232132',
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
interface CapturedUserMouse {
  /**when mouse is pressed this should be true synchronically */
  pressed: boolean
  /**record postion offset of X of window  when  mouse is pressed  */
  pressedX: number
  /**record postion offset of Y of window  when  mouse is pressed  */
  pressedY: number

  x: number
  y: number
}
let CapturedUserMouse: CapturedUserMouse = {
  pressed: false,
  pressedX: 0,
  pressedY: 0,
  x: 0,
  y: 0,
}
function edgeProtect(target: HTMLDivElement, info: CapturedUserMouse): CapturedUserMouse {
  if (info.x <= 0) {
    info.x = 0
  }
  if (info.y <= 0) {
    info.y = 0
  }
  if (info.x >= getWidth() - EvaluateElementArea(target).width) {
    info.x = getWidth() - EvaluateElementArea(target).width
  }
  if (info.y >= getHeight() - EvaluateElementArea(target).height) {
    info.y = getHeight() - EvaluateElementArea(target).height
  }
  return info
}
function syncDragPosition(target: HTMLDivElement | null, info: CapturedUserMouse) {
  if (target !== null) {
    info = edgeProtect(target, info)
    target.style.left = toPixel(info.x)
    target.style.top = toPixel(info.y)
    return true
  } else {
    return false
  }
}
const _Draggable: FC<DraggableProps> = props => {
  const { object, updateObject } = useObject(
    {
      arr: testdata,
      callee: 'draggable',
      onMouseUp: () => {},
      alert() {
        alert(2)
      },
      obj: { name: 5, age: 6, typescript: testdata },
    },
    { supervise: true }
  )

  const draggablArea = useRef<HTMLDivElement>(null)
  const { position = { x: 500, y: 20 } } = props //set hatch place
  useEffect(() => {
    // updateObject({                      //init position where you want to dock [ top left right bottom]
    //   x: getWidth() - position.x,
    //   y: getHeight() - position.y,
    // })

    // updateObject({
    //   x: position.x,
    //   y: position.y,
    // })

    CapturedUserMouse.x = position.x
    CapturedUserMouse.y = position.y
    syncDragPosition(draggablArea.current, CapturedUserMouse)
  }, [])

  function mouseDown(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // updateObject({
    //   pressed: true,
    //   pressedX: ev.clientX,
    //   pressedY: ev.clientY,
    // })

    CapturedUserMouse.pressed = true
    CapturedUserMouse.pressedX = ev.clientX
    CapturedUserMouse.pressedY = ev.clientY
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

    if (CapturedUserMouse.pressed) {
      let changeX = ev.clientX - CapturedUserMouse.pressedX
      let changeY = ev.clientY - CapturedUserMouse.pressedY

      CapturedUserMouse.x += changeX
      CapturedUserMouse.y += changeY
      CapturedUserMouse.pressedX = ev.clientX
      CapturedUserMouse.pressedY = ev.clientY
      syncDragPosition(draggablArea.current, CapturedUserMouse)
    }
  }
  function mouseUp() {
    // updateObject('pressed', false)

    CapturedUserMouse.pressed = false
  }

  return (
    <div
      ref={draggablArea}
      className={props.className}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      onMouseOut={mouseUp}
      onDoubleClick={e => void e.preventDefault()}
      style={{
        // maxWidth: getWidth() / 2 + 'px',
        ...STYLES,
        width: props.width,
        height: props.height,
        // left: object.x,
        // top: object.y,
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
