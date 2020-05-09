import { useState } from 'react'
import { os } from '../archive/objectStore'
import { LIMITED_SCENES_TAG } from '../components/menu'

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
    if (sceneName !== LIMITED_SCENES_TAG.sceneName) {
      const master = os.getMaster()
      if (master) {
        if (os.registerState(sceneName)) {
          const synchronizdTabs = os.scenes.map(tabName => ({ tabName, select: false }))
          master.setTreasure({ tabs: synchronizdTabs })
          console.log(sceneName, synchronizdTabs)
        }
      }
    }
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

      /**
       *  scenaName will be changed by current who called function `SetObject`
       *
       */

      if (sceneName === os.currentScene.sceneName) {
        os.useStateReturnAction[0].act.setObj({ source: { ...shallowObject } })
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
    object,
    updateObject,
    recover,
  }
}
