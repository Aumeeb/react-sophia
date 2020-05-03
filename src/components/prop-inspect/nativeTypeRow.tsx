import { ReactNode, useState } from 'react'
import { getSVG } from '../../svgs/svgBadge'
import { SVGBlockSize } from '../../svgs'
import React from 'react'
import { CSpan } from './colorful'
import { EMJS, SYMBOLS } from '../../shared/emojis'
import { getType, isArrowFunction, ExistNativeType } from '../../type'
import { ITALIC, INLINE_BLOCK } from '../../shared/styles'
import { getUid } from '../../util/random'

const TYPE_COLORS = {
  function: 'rgb(220,220,170)',
  string: '#dd7324',
  number: '#b4c8a0',
  event: 'rgb(235,184,109)',
  boolean: '#569cca',
  null_undefined: '#569cca',
  object: '#000',
  array: '#b4c8a0',
  symbol: 'pink',
}

export class NativeTypeRow implements Omit<getNativeTypeDescription, 'getNativeTypeDescription'> {
  private size: SVGBlockSize = {
    width: 20,
    height: 20,
  }
  constructor(protected value: any) {}
  textTextColor = ''
  getNativeTypeDescription(): NativeTypeDescription | undefined {
    if (getType(this.value) === 'string') return new StringType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'number') return new NumberType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'boolean') return new BooleanType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'function') return new FunctionType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'event') return new EventType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'undefined') return new UndefinedType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'null') return new NullType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'object') return new ObjectType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'symbol') return new SymbolType(this.value).getNativeTypeDescription()
    if (getType(this.value) === 'array')
      return new (class extends NativeTypeRow implements getNativeTypeDescription {
        textTextColor = TYPE_COLORS.array
        getNativeTypeDescription(): NativeTypeDescription {
          return {
            typeRange: ['number'],
            typeTextColor: this.textTextColor,
            badges: [],
            mainBody: this.getArrayBody(this.value),
            self: this,
            beforeNode: <></>,
            afterNode: <></>,
          }
        }
      })(this.value).getNativeTypeDescription()

    return undefined
  }
  getDefualtTypeSVG() {
    return getSVG(this.value)(this.size)
  }
  getRegularBody(prefix: ReactNode = <></>, affix: ReactNode = <></>) {
    if (getType(this.value) === 'symbol') {   
      this.value = this.value.toString()  //symbol has method toString intrinsically but 'undefined & null' doesn't
    }
    return (
      <CSpan color={this.textTextColor}>
        {prefix}
        {this.value + ''}
        {affix}
      </CSpan>
    )
  }
  getShrunkenObjectBody() {
    return <CSpan color={TYPE_COLORS.object}>{`{...}`}</CSpan>
  }
  getShrunkenArrayBody(arr: any[]) {
    return <CSpan color={TYPE_COLORS.array}>{`Array (${arr.length})`}</CSpan>
  }
  /** for array */
  getArrayBody(arrValue: any[], deepLevel: number = 0): ReactNode {
    let [expend, setExpend] = useState(true)
    let [level, setLevel] = useState(deepLevel)
    return (
      <article
        style={{ ...INLINE_BLOCK }}
        onClick={() => {
          setExpend(!expend)
        }}
      >
        <span>{SYMBOLS.downPointingTriangle}</span>
        <span style={ITALIC}>({arrValue.length})</span>
        <CSpan ml={10}>[</CSpan>
        {arrValue.map(val => {
          let matchedBody: ReactNode
          if (getType(val) === 'number' || getType(val) === 'string' || getType(val) === 'null' || getType(val) === 'boolean' || getType(val) === 'undefined' || getType(val) === 'symbol') {
            matchedBody = new NativeTypeRow(val).getNativeTypeDescription()?.mainBody
          }
          if (getType(val) === 'function') {
            let funcValue = 'func'
            if (isArrowFunction(val)) {
              funcValue = 'λ-func'
            }
            matchedBody = <CSpan color={TYPE_COLORS.function}>{funcValue}</CSpan>
          }

          if (getType(val) === 'obejct') {
            matchedBody = this.getShrunkenObjectBody()
          }
          if (getType(val) === 'array') {
            matchedBody = this.getShrunkenArrayBody(val)
          }
          return (
            <span key={getUid()}>
              {matchedBody}
              {this.getSeparatorNode(', ')}
            </span>
          )
        })}

        <CSpan color="gray">]</CSpan>
        {expend && <article>12312312312</article>}
      </article>
    )
  }
  getArrayVertiaclBody(): ReactNode {
    return <CSpan color={this.textTextColor}>{this.value + ''}</CSpan>
  }
  getSeparatorNode(separator: ReactNode = <></>): ReactNode {
    return (
      <CSpan ml={0} color={'gray'}>
        {separator}
      </CSpan>
    )
  }
}
interface getNativeTypeDescription {
  getNativeTypeDescription(): NativeTypeDescription
  textTextColor: string
}

const StringType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.string
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['string'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(`"`, `"`),
      self: this,
      beforeNode: <></>,
      afterNode: <></>,
    }
  }
}
const NumberType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.number
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['number'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <></>,
      afterNode: <></>,
    }
  }
}
const EventType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.event
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['event'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <span onClick={this.value}>{EMJS.run}</span>,
      afterNode: <></>,
    }
  }
}
const FunctionType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.function
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['function'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <span onClick={this.value}>{EMJS.run}</span>,
      afterNode: <></>,
    }
  }
}
const BooleanType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.boolean
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['boolean'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <></>,
      afterNode: <></>,
    }
  }
}
const UndefinedType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.null_undefined
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['undefined'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <></>,
      afterNode: <></>,
    }
  }
}
const NullType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.null_undefined
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['null'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <></>,
      afterNode: <></>,
    }
  }
}
const ObjectType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.object
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['object'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <></>,
      afterNode: <></>,
    }
  }
}
const SymbolType = class extends NativeTypeRow implements getNativeTypeDescription {
  textTextColor = TYPE_COLORS.symbol
  getNativeTypeDescription(): NativeTypeDescription {
    return {
      typeRange: ['object'],
      typeTextColor: this.textTextColor,
      badges: [],
      mainBody: this.getRegularBody(),
      self: this,
      beforeNode: <></>,
      afterNode: <></>,
    }
  }
}

export interface NativeTypeDescription {
  typeRange: Array<ExistNativeType>
  typeTextColor: string

  badges: Array<{
    behave: 'invoke' | 'hint'
    display: boolean
    emoji: string
    descrition: ReactNode | string
  }>
  mainBody?: ReactNode
  beforeNode?: ReactNode
  afterNode?: ReactNode
  self: NativeTypeRow
}

// function say<T extends 'hello' | 'world'>(word: T): T extends 'hello' ? 'mello' : 'wrod' {
//   return 'mello'
// }
