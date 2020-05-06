import { Dispatch, SetStateAction } from "react"

type StatePool<S> = {
    objectPool: S,
    setObjectPool: Dispatch<SetStateAction<S>>
}

class ObjectStore {
    get current() {
        return {
            callee: '',
            currentObject: null,
            currentSetObect: null
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

    // syncUpdate<T>(setPropFunc: (o: T) => void) {
    //     // setPropFunc(o)
    // }
}
export const os = new ObjectStore()

