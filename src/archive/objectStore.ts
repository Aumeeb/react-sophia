import { LimitedReversedActive, LIMITED_SCENES_TAG } from "../components/menu"

type StatePool<S> = {
    treasure: S,
    setTreasure: React.Dispatch<React.SetStateAction<S>>
}
type UseStateReturnInfo = { sence: LimitedReversedActive, act: { o: {}, setObj: any } } // ((value: any) => void | (key: any, val: any) => void)
class ObjectStore {
    private _system_useState: UseStateReturnInfo[] = []
    private _sceneName: string = ''
    private _registeredStateName: string[] = []   //to record which stateObject has been register .. if registered it should not  be admit func `useObject` to update repeatedly!
    get currentScene() {
        return {
            sceneName: this._sceneName,
            object: this.get(this._sceneName)?.treasure ?? {},
            set: (value: any) => {
                let setValue = this.get(this._sceneName)?.setTreasure ?? (() => Promise.resolve(void 0))
                setValue({ ...value })
            },

        }
    }
    get useStateReturnAction() {
        return this._system_useState
    }
    addUseStateReturnValuesOfSystem(act: UseStateReturnInfo) {
        this._system_useState.push(act)
    }
    private readonly treasures: Map<string, StatePool<any>> = new Map()

    /**To get count of the state objects. */
    get count() {
        return this.treasures.size
    }
    /**Get the alias names of all state objects*/
    get scenes() {
        let sceneNameList = []
        for (var key of this.treasures.keys()) {
            sceneNameList.push(key)
        }
        return sceneNameList
    }
    /** automatically store the state object to this storage */
    collectObject<S>(key: string, value: StatePool<S>) {
        this.treasures.set(key, value)

    }
    registerState(name: string) {
        if (!this._registeredStateName.includes(name)) {
            this._registeredStateName.push(name)
            return true
        }
        return false
    }
    /** To getStateObject  */
    get(key: string) {
        return this.treasures.get(key)
    }
    getMaster() {
        return this.get(LIMITED_SCENES_TAG.sceneName)
    }
    /** which state should be displayed?  */
    syncScene(name: string): void {
        this._sceneName = name
    }
    /** let user to select which  data bind mode is prefered 
     *  1way 
     * 2ways
    */
    // twoWaysbindsCheck(setO: Function): boolean {
    //     let isTwoWays = false
    //     this.treasures.forEach(p => {
    //         if (p.setTreasure === setO && p.twoWay) {
    //             isTwoWays = true
    //         }
    //     })
    //     return isTwoWays
    // }
}
export const os = new ObjectStore()

