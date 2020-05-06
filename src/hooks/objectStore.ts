import { Dispatch, SetStateAction } from "react"

type StatePool<S> = {
    objectPool: S,
    setObjectPool: Dispatch<SetStateAction<S>>
}

class ObjectStore {
    private _callee: string = ''
    get currentScene() {
        return {
            callee: this._callee,
            currentObject: this.get(this._callee)?.objectPool,
            currentSetObect: this.get(this._callee)?.setObjectPool
        }
    }
    private readonly pool: Map<string, StatePool<any>> = new Map()

    /**To get count of the state objects. */
    get count() {
        return this.pool.size
    }
    /**Get the alias names of all state objects*/
    get callees() {
        let callees = []
        for (var key of this.pool.keys()) {
            callees.push(key)
        }
        return callees
    }
    /** automatically store the state object to this storage */
    collectObject<S>(key: string, value: StatePool<S>) {
        this.pool.set(key, value)
    }
    /** To getStateObject  */
    get(key: string) {
        return this.pool.get(key)
    }

    syncScene(name: string): void {
        this._callee = name
    }
}
export const os = new ObjectStore()

