import { useState } from 'react'
import { os } from '../archive/objectStore'
import { sceneNameGenerator } from '../util/random'

export function useObject<T extends { [key: string]: any }>(
  initO: T,
  option: {
    supervise?: boolean

    sceneName?: string
  } = {}
) {
  const [object, setO] = useState<T>(initO)
  const { supervise = true, sceneName = '' } = option

  if (sceneName !== '') {
    os.collectObject(option.sceneName!, { treasure: object, setTreasure: setO })
  }

  /**
   * @param obj 🌰eg.. {name:"lee",age:10,gender:true}
   */
  function updateObject(obj: Partial<T>): void
  function updateObject<P extends keyof T>(key: P, value: T[P]): void
  function updateObject<P extends keyof T>(key?: P, value?: T[P]) {
    try {
      let shallowObject: any = { ...object } //here is a bug may be updates typescript will be solved this problem

      /**
       *  to implementation function overload here we have 2  scenarios
       *   #1 passed in a {}
       *   # 2 passed  key & value
       */

      if (typeof key === 'object') {
        Object.keys(key).forEach((prop: keyof T) => {
          shallowObject[prop] = key[prop]
        })
      } else shallowObject[key] = value

      console.log(sceneName, os.currentScene.sceneName)

      if (sceneName === os.currentScene.sceneName) {
        os.useStateReturnAction[0].act.setObj({ source: { ...shallowObject } })
      }
      // if (sceneName !== os.useStateReturnAction.find(p => p.sence.tag === '5a947008-9044-11ea-bb37-0242ac130002')?.sence.sceneName) {
      // const action = os.useStateReturnAction.find(p => p.sence.tag === '5a947008-9044-11ea-bb37-0242ac130002')
      // action?.act.setObj({ source: { ...shallowObject } })
      // return
      // }
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
    object,
    updateObject,
    recover,
  }
}
