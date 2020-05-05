import React, { FC } from 'react'
import { Draggable } from './components/draggable'
import { Menu } from './components/menu'
import './sophia.css'
export const MENU_ROUTER = [
  { name: '📜', nav: 'stateReview' },
  { name: '⚙️', nav: 'settings' },
  { name: '🗑️', nav: 'Wastebasket' },
  // { name: '🐷', nav: 'unblock' },
] as const

export const Sophia: FC = () => {
  return (
    <>
      <Draggable className="grdq2a0x2p6xt">
        <Menu minWidth={200} maxWidth={600} emojiIcon="📦" scale={3} throb menuName={MENU_ROUTER} />
      </Draggable>
    </>
  )
}
