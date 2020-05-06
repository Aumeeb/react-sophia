import { useState } from 'react'
import { os } from '../archive/objectStore'

export function useObject<T extends { [key: string]: any }>(
  initO: T & { callee?: string },
  option: Partial<{
    supervise: boolean
    twoWay?: boolean
  }> = {
    supervise: false,
    twoWay: false,
  }
) {
  const [object, setO] = useState<T>(initO)
  if (option.supervise ?? false) {
    os.collectObject(object.callee, { treasure: object, setTreasure: setO, twoWay: option.twoWay ?? false })
  }
  /**
   * @param obj 举个🌰  {name:"lee",age:10,gender:true}
   */
  function updateObject(obj: Partial<T>): void
  function updateObject<P extends keyof T>(key: P, value: T[P]): void
  function updateObject<P extends keyof T>(key?: P, value?: T[P]) {
    try {
      let shallowObject: any = { ...object } //here is a bug may be updates typescript will be solved this problem
      if (!shallowObject.callee) shallowObject.callee = 'untitled'

      if (typeof key === 'object') {
        Object.keys(key).forEach((prop: keyof T) => {
          shallowObject[prop] = key[prop]
        })
      } else shallowObject[key] = value
      if (os.twoWaysbindsCheck(setO)) {
        console.log(`is two ways`)
      }
      setO({ ...shallowObject })
    } catch (error) {}
  }

  /** Recover all the values of each property which you passed in at the `useObject` at the beginning.*/
  function recover(): void
  /**
   * Recover all the values of each property which you passed in at the `useObject` at the beginning.
   * @param omit Omit some of properties of those you wouldn't want to recover.
   */
  function recover(omit?: (keyof T)[]): void
  function recover(omit?: (keyof T)[]): void {
    if (omit === undefined) {
      setO({ ...initO })
      return
    }
    if (omit !== undefined && omit.length > 0) {
      let originalObject = { ...initO }
      omit.forEach(p => {
        originalObject[p] = object[p]
      })
      setO(originalObject)
      return
    }
  }
  return {
    /**创建返回的对象 */
    object,
    /** 可更新单个属性
     *  可更新一个 T 类型的对象
     *    */
    updateObject,
    /**直接还原到初始状态*/
    recover,
  }
}
