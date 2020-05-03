import React, { FC, useState, useEffect } from 'react'
import './index.css'
import { BrowserPropsProvider } from '../../shared/window-context'
import { os } from '../../hooks/objectStore'
import { useObject } from '../../hooks/useObject'
import { ColorfulRows } from '../prop-inspect/colorful'
import { AvailableNav } from '../../type'
import { getUid } from '../../util/random'

const _Menu: FC<MenuProps> = props => {
  let fontSize: number = 12
  let eachIconWidth = 50
  let [, setSubItemVisible] = useState(true)
  let [, setTouchedBox] = useState(false)
  let [curCallee, setCurCallee] = useState<string>('')
  let { object, updateObject } = useObject<{
    nav: AvailableNav
  }>({
    nav: 'Wastebasket',
    callee: 'menu',
  })
  //default value assignment
  let { emojiIcon = '📓 ', scale = 2, throb = true, minWidth, maxWidth } = props

  useEffect(() => {}, [os.get(curCallee)])

  return (
    <div
      onMouseOver={() => setSubItemVisible(true)}
      onMouseOut={() => setSubItemVisible(false)}
      className={throb ? 'menu-icon-beat-up' : ''}
      style={{
        fontSize: scale * fontSize,
      }}
    >
      <header
        onMouseOver={() => {
          setTouchedBox(true)
        }}
        onMouseOut={() => {
          setTouchedBox(false)
        }}
      >
        <div className="menu-panel-wrapper" style={{ width: eachIconWidth }}>
          <span>{emojiIcon}</span>
          {props.menuName.map(item => (
            <span key={getUid()} className="menu-panel-item-span " onClick={() => updateObject('nav', item.nav)}>
              {item.name}
            </span>
          ))}
        </div>
      </header>
      {renderContentByClickedMenu()}
    </div>
  )
  function renderState() {
    const curStateObject: any = os.get(curCallee) ?? {}

    return (
      <div style={{ marginTop: 16 }}>
        {Object.keys(curStateObject).map(key => {
          const value = curStateObject[key]
          return <ColorfulRows objectKey={key} key={getUid()} value={value} />
        })}
      </div>
    )
  }

  function renderContentByClickedMenu() {
    if (object.nav === 'Wastebasket') return

    if (object.nav === 'stateReview') {
      return (
        <div className="menu-panel-info">
          <nav style={{ minWidth, maxWidth }}>
            {os.callees.map(callee => (
              <span key={getUid()} className="nav-span" onClick={() => setCurCallee(callee)}>
                {callee}
                <br />
              </span>
            ))}
          </nav>

          {renderState()}
        </div>
      )
    }
  }
}

export const Menu: FC<MenuProps> = props => {
  return (
    <BrowserPropsProvider>
      <_Menu {...props} />
    </BrowserPropsProvider>
  )
}

interface MenuProps {
  minWidth: number
  maxWidth: number
  emojiIcon?: string
  scale?: number
  offsetTop?: number
  offsetLeft?: number
  throb?: boolean
  menuName: readonly { name: string; nav: AvailableNav }[]
}
