import { Dispatch, SetStateAction } from "react"

type StatePool<S> = {
    objectPool: S,
    setObjectPool: (value: any) => void
}

class ObjectStore {
    private _callee: string = ''
    get currentScene() {
        return {
            callee: this._callee,
            object: this.get(this._callee)?.objectPool,
            set: this.get(this._callee)?.setObjectPool ?? (() => Promise.resolve(void 0))
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

