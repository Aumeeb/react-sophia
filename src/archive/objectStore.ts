

type StatePool<S> = {
    treasure: S,
    setTreasure: (value: any) => void
    twoWay: boolean
}

class ObjectStore {
    private _callee: string = ''
    get currentScene() {
        return {
            callee: this._callee,
            object: this.get(this._callee)?.treasure ?? {},
            set: (value: any) => {
                let setValue = this.get(this._callee)?.setTreasure ?? (() => Promise.resolve(void 0))
                setValue({ ...value })
            },
            twoWay: this.get(this._callee)?.twoWay
        }
    }
    private readonly treasures: Map<string, StatePool<any>> = new Map()

    /**To get count of the state objects. */
    get count() {
        return this.treasures.size
    }
    /**Get the alias names of all state objects*/
    get callees() {
        let callees = []
        for (var key of this.treasures.keys()) {
            callees.push(key)
        }
        return callees
    }
    /** automatically store the state object to this storage */
    collectObject<S>(key: string, value: StatePool<S>) {
        this.treasures.set(key, value)
    }
    /** To getStateObject  */
    get(key: string) {
        return this.treasures.get(key)
    }

    syncScene(name: string): void {
        this._callee = name
    }
    twoWaysbindsCheck(setO: Function): boolean {
        let isTwoWays = false
        this.treasures.forEach(p => {
            if (p.setTreasure === setO && p.twoWay) {
                isTwoWays = true
            }
        })
        return isTwoWays
    }
}
export const os = new ObjectStore()

