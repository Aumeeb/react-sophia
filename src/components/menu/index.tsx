import React, { FC, useState, useEffect } from 'react'
import './index.css'

import { os } from '../../archive/objectStore'
import { useObject } from '../../hooks/useObject'
import { ColorfulRows } from '../prop-inspect/type-decorator'
import { AvailableNav } from '../../type'
import { getUid } from '../../util/random'
import { testdata } from '../draggable'

export type LimitedReversedActiveSceneName = '5a947008-9044-11ea-bb37-0242ac130002'
export type LimitedReversedActive = { sceneName: string; tag: LimitedReversedActiveSceneName }
const LIMITED_SCENES_TAG: LimitedReversedActive = {
  sceneName: '⚙️menu⚙️',
  tag: '5a947008-9044-11ea-bb37-0242ac130002',
}

const _Menu: FC<MenuProps> = props => {
  let fontSize: number = 12
  let eachIconWidth = 50

  let { object, updateObject } = useObject<{
    nav: AvailableNav
    t: any
    source: { [key: string]: any }
    tabs: { tabName: string; select: boolean }[]
  }>(
    {
      nav: '📜',
      t: testdata,
      source: os.currentScene.object ?? {},
      tabs: os.scenes.map(tabName => ({ tabName, select: false })),
    },
    { sceneName: LIMITED_SCENES_TAG.sceneName }
  )
  // const [currentStateList, setCurrentStateList] = useState(os.scenes.map(tabName => ({ tabName, select: false })))
  useEffect(() => {
    os.addUseStateReturnValuesOfSystem({ act: { o: object, setObj: updateObject }, sence: LIMITED_SCENES_TAG })
  }, [])

  //default value assignment
  let { emojiIcon = '📓 ', scale = 2, throb = true, minWidth, maxWidth } = props

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
          {/* render menus icon emoji */}
          {props.menuName.map((item, index) => (
            <span key={getUid()} className="menu-panel-item-span " onClick={() => updateObject('nav', item.nav)}>
              {item.nav.toString()}
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
    if (object.nav === '🗑️') return

    if (object.nav === '📜') {
      return (
        <>
          <div className="menu-panel-info">
            <nav style={{ minWidth, maxWidth }}>
              {object.tabs.map((curState, i) => (
                <span
                  key={getUid()}
                  className={`nav-span ${curState.select ? 'selected-callee' : ''}`}
                  onClick={() => {
                    os.syncScene(curState.tabName)
                    object.tabs.forEach(p => (p.select = false))
                    object.tabs[i].select = true

                    updateObject({ source: os.currentScene.object, tabs: object.tabs })
                  }}
                >
                  {curState.tabName}
                  <br />
                </span>
              ))}
            </nav>
          </div>
          <div style={{ marginTop: -1 }} className="menu-panel-info anim-ease-width-height">
            {renderState()}
          </div>
        </>
      )
    }
  }
}

export const Menu: FC<MenuProps> = props => {
  return (
    <div>
      <_Menu {...props} />
    </div>
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
