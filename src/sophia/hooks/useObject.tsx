import {useState} from 'react'
import {os} from '../archive/objectStore'
import {LIMITED_SCENES_TAG} from '../components/menu'

/**
 * This function is a multifunction which take 2 arguments that used to reserve ObjectState for you in your page,
 * you can call this function multi times in the same page or other pages.
 * @template T is object type  like `{} , {age:5} , {age:5, cardNames:[100,200,300]}` all were valid.
 * @param initO  The data object typeof `T` which want to reserve data for you
 * @param [option]
 * @returns  { object,updateObject,recover,}
 */
export function useObject<T extends {[key: string]: any}>(
  initO: T,
  option: {
    /**
     *In supervise mode only... remember that  `Do Not Use` the same `name` in the project otherwise stateName in the panel will be rendered only once...
     * sceneName =   'name1' or 'name2'  were corrent.
     * sceneName =  'abc' or 'abc' were incorrent.
     */
    sceneName?: string
  } = {}
) {
  const [object, setO] = useState<T>(initO)
  const {sceneName = ''} = option

  // if current sceneName does not equal to ''  so it considered a superviser object.
  if (sceneName !== '' && os.config.isSupervise) {
    const success = os.collectObject(option.sceneName!, {
      treasure: object,
      setTreasure: setO,
    })
    if (success) {
      const menuAction = os.getMenuStateReturnAction()

      if (menuAction) {
        menuAction.action.setO({tabs: os.formatTabNames()})
      }
    }
    if (sceneName !== LIMITED_SCENES_TAG.sceneName) {
      const master = os.getMaster()
      if (master) {
        if (os.registerState(sceneName)) {
          const synchronizdTabs = os.scenes.map((tabName) => ({
            tabName,
            select: false,
          }))
          master.setTreasure({tabs: synchronizdTabs})
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
      let shallowObject: any = {...object} //here is a bug may be updates typescript will be solved this problem

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
        os.getMenuStateReturnAction()?.action.setO({
          source: {...shallowObject},
        })
      }

      setO({...shallowObject})
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
      setO({...initO})
      return
    }
    if (omit !== undefined && omit.length > 0) {
      let originalObject = {...initO}
      omit.forEach((p) => {
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
