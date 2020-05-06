import React, { FC, useState, useEffect } from 'react'
import './index.css'
import { BrowserPropsProvider } from '../../shared/window-context'
import { os } from '../../archive/objectStore'
import { useObject } from '../../hooks/useObject'
import { ColorfulRows } from '../prop-inspect/type-decorator'
import { AvailableNav } from '../../type'
import { getUid } from '../../util/random'
import { testdata } from '../draggable'

export type UpdatableComponentRange = '__menu__'

const _Menu: FC<MenuProps> = props => {
  let fontSize: number = 12
  let eachIconWidth = 50

  let { object, updateObject } = useObject<{
    nav: AvailableNav
    t: any
    source: any
  }>({
    nav: 'Wastebasket',
    callee: 'menu',
    t: testdata,
    source: os.currentScene.object ?? {},
  })
  useEffect(() => {
    os.addUseStateReturnValues({ act: { o: object, setObj: updateObject }, tag: '__menu__' })
  }, [])

  //default value assignment
  let { emojiIcon = '📓 ', scale = 2, throb = true, minWidth, maxWidth } = props
  console.log('menu', object)

  return (
    <div
      className={throb ? 'menu-icon-beat-up' : ''}
      style={{
        fontSize: scale * fontSize,
      }}
    >
      <header>
        <div className="menu-panel-wrapper" style={{ width: eachIconWidth }}>
          <span>{emojiIcon}</span>
          {props.menuName.map((item, index) => (
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
    return (
      <div>
        {Object.keys(object.source).map(key => {
          const value = object.source[key]
          return <ColorfulRows objectKey={key} key={getUid()} value={value} />
        })}
      </div>
    )
  }

  function renderContentByClickedMenu() {
    if (object.nav === 'Wastebasket') return

    if (object.nav === 'stateReview') {
      return (
        <>
          <div className="menu-panel-info">
            <nav style={{ minWidth, maxWidth }}>
              {os.callees.map(callee => (
                <span
                  key={getUid()}
                  className="nav-span"
                  onClick={() => {
                    os.syncScene(callee)
                    updateObject({ source: os.currentScene.object })
                  }}
                >
                  {callee}
                  <br />
                </span>
              ))}
            </nav>
          </div>
          <div style={{ marginTop: -1, width: 300 }} className="menu-panel-info anim-ease-width-height">
            {renderState()}
          </div>
        </>
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

export interface MenuProps {
  minWidth: number
  maxWidth: number
  emojiIcon?: string
  scale?: number
  offsetTop?: number
  offsetLeft?: number
  throb?: boolean
  menuName: readonly { name: string; nav: AvailableNav }[]
}
