import React, { FC } from 'react'
import { Draggable } from './components/draggable'
import { Menu } from './components/menu'

export const MENU_ROUTER = [
  { name: '📜', nav: 'stateReview' },
  { name: '⚙️', nav: 'settings' },
  { name: '🗑️', nav: 'Wastebasket' },
  // { name: '🐷', nav: 'unblock' },
] as const

export const Sophia: FC = () => {
  return (
    <>
      <Draggable x={500} y={700}>
        <Menu minWidth={200} maxWidth={600} emojiIcon="📦" scale={3} throb menuName={MENU_ROUTER} />
      </Draggable>
    </>
  )
}
