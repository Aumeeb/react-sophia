import React, { FC, CSSProperties, ReactNode } from 'react'
import { isString, isNumber, isFunction, isBoolean } from 'util'
import { getSVG, isEvent } from '../../svgs/svgBadge'
import { EMJS } from '../../shared/emojis'
import { NativeTypeRow, NativeTypeDescription } from './nativeTypeRow'
import { type } from 'os'

const KEY_STYLE: CSSProperties = {
  marginLeft: 2,
  marginRight: 2,
}
const DATA_TYPE_WRAPPER_STYLE: CSSProperties = { position: 'relative', top: -4 }

export const ColorfulRows = (props: { objectKey: string; value: string; badgeWidth: number }) => renderPropertyOfObjectOrArray(props.objectKey, props.value)

export const CSpan: FC<{ color?: string; ml?: string | number }> = props => {
  let { ml = 6, color = '#000' } = props

  return <span style={{ marginLeft: ml, color: props.color }}>{props.children}</span>
}

/** this function will be rendered the each property of an object or an item of an Array */
export function renderPropertyOfObjectOrArray(objectKey: string, value: any): JSX.Element {
  const typeDesc = new NativeTypeRow(value).getNativeTypeDescription()

  return (
    <div style={{ marginTop: 10 }}>
      {typeDesc?.self.getDefualtTypeSVG()}
      <span style={DATA_TYPE_WRAPPER_STYLE}>
        <span style={KEY_STYLE}> {objectKey}</span> : {typeDesc?.beforeNode} {typeDesc?.mainBody} {typeDesc?.afterNode}
      </span>
    </div>
  )
}
