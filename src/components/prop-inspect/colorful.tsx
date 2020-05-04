import React, { FC, CSSProperties } from 'react'
import { DrawNativeTypeRow } from './nativeTypeRow'
import { FLEX } from '../../shared/styles'

const KEY_STYLE: CSSProperties = {
  marginLeft: 2,
  marginRight: 2,
  position: 'relative',
  top: -5,
}
const DATA_TYPE_WRAPPER_STYLE: CSSProperties = { position: 'relative', top: -4 }

export const ColorfulRows = (props: { objectKey: string; value: string; badgeWidth?: number }) => <RenderPropertyOfObjectOrArray objectKey={props.objectKey} value={props.value} />

export const CSpan: FC<{ color?: string; ml?: string | number }> = props => {
  let { ml = 6 } = props

  return <span style={{ marginLeft: ml, color: props.color }}>{props.children}</span>
}

/** this function will be rendered the each property of an object or an item of an Array */
export const RenderPropertyOfObjectOrArray = (props: { objectKey: string; value: any }): JSX.Element => {
  const typeDesc = new DrawNativeTypeRow(props.value).getNativeTypeDescription()

  return (
    <div style={{ marginTop: 10, ...FLEX }}>
      <aside>
        {typeDesc?.self.getDefualtTypeSVG()} <span style={KEY_STYLE}>{props.objectKey} :</span>
      </aside>
      <article style={DATA_TYPE_WRAPPER_STYLE}>
        {typeDesc?.beforeNode} {typeDesc?.mainBody} {typeDesc?.afterNode}
      </article>
    </div>
  )
}
 